import fs from 'node:fs'
import process from 'node:process'
import { ETSLanguagePlugin } from '@arkts/language-plugin'
import { LanguageServerLogger } from '@arkts/shared'
import { createConnection, createServer, createTypeScriptProject } from '@volar/language-server/node'
import * as ets from 'ohos-typescript'
import { create as createTypeScriptServices } from 'volar-service-typescript'
import { TextDocument } from 'vscode-languageserver-textdocument'
import { LanguageServerConfigManager } from './config-manager'
import { create$$ThisService } from './services/$$this.service'
import { createETSLinterDiagnosticService } from './services/diagnostic.service'
import { createETSDocumentSymbolService } from './services/symbol.service'

const connection = createConnection()
const server = createServer(connection)
const logger = new LanguageServerLogger('ETS Language Server')
const lspConfiguration = new LanguageServerConfigManager(logger)

logger.getConsola().info(`ETS Language Server is running: (pid: ${process.pid})`)

connection.onRequest('ets/waitForEtsConfigurationChangedRequested', (e) => {
  logger.getConsola().info(`waitForEtsConfigurationChangedRequested: ${JSON.stringify(e)}`)
  lspConfiguration.setConfiguration(e)
})

interface ETSFormattingDocumentParams {
  options: import('vscode').FormattingOptions
  textDocument: import('vscode').TextDocument
}

let etsLanguageService: ets.LanguageService | undefined
connection.onRequest('ets/formatDocument', async (params: ETSFormattingDocumentParams): Promise<any[]> => {
  if (!etsLanguageService)
    return []

  const doc = TextDocument.create(
    params.textDocument.uri.fsPath,
    params.textDocument.languageId,
    params.textDocument.version,
    fs.existsSync(params.textDocument.uri.fsPath) ? fs.readFileSync(params.textDocument.uri.fsPath, 'utf-8') : '',
  )
  const formatSettings = ets?.getDefaultFormatCodeSettings()
  if (params.options.tabSize !== undefined) {
    formatSettings.tabSize = params.options.tabSize
    formatSettings.indentSize = params.options.tabSize
  }

  const textChanges = etsLanguageService.getFormattingEditsForDocument(params.textDocument.uri.fsPath, formatSettings)
  return textChanges.map(change => ({
    newText: change.newText,
    range: {
      start: doc.positionAt(change.span.start),
      end: doc.positionAt(change.span.start + change.span.length),
    },
  }))
})

connection.onInitialize(async (params) => {
  if (params.locale)
    lspConfiguration.setLocale(params.locale)
  lspConfiguration.setConfiguration({ typescript: params.initializationOptions?.typescript })

  const tsdk = lspConfiguration.getTypeScriptTsdk()
  const [tsSemanticService, _tsSyntacticService, ...tsOtherServices] = createTypeScriptServices(ets as any, {
    isFormattingEnabled: () => true,
    isSuggestionsEnabled: () => true,
    isAutoClosingTagsEnabled: () => true,
    isValidationEnabled: () => true,
  })

  return server.initialize(
    params,
    createTypeScriptProject(ets as any, tsdk.diagnosticMessages, () => {
      return {
        languagePlugins: [ETSLanguagePlugin(ets, { sdkPaths: [lspConfiguration.getSdkPath(), lspConfiguration.getHmsSdkPath()].filter(Boolean) as string[], tsdk: lspConfiguration.getTsdkPath() })],
        setup(options) {
          if (!options.project || !options.project.typescript || !options.project.typescript.languageServiceHost)
            return

          const originalSettings = options.project.typescript.languageServiceHost.getCompilationSettings() || {}
          logger.getConsola().debug(`Settings: ${JSON.stringify(lspConfiguration.getTsConfig(originalSettings as ets.CompilerOptions), null, 2)}`)
          options.project.typescript.languageServiceHost.getCompilationSettings = () => {
            return lspConfiguration.getTsConfig(originalSettings as ets.CompilerOptions) as any
          }
          etsLanguageService = ets.createLanguageService(options.project.typescript.languageServiceHost as ets.LanguageServiceHost)
        },
      }
    }),
    [
      tsSemanticService,
      ...tsOtherServices,
      createETSLinterDiagnosticService(ets, logger),
      createETSDocumentSymbolService(),
      create$$ThisService(lspConfiguration.getLocale()),
    ],
  )
})

connection.listen()
connection.onInitialized(server.initialized)
connection.onShutdown(server.shutdown)
