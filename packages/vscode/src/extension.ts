/* eslint-disable perfectionist/sort-imports */
import 'reflect-metadata'
import type { LabsInfo } from '@volar/vscode'
import type { ExtensionContext } from 'vscode'
import { extensionContext } from 'reactive-vscode'
import { CommandPlugin, DisposablePlugin, LanguageProviderPlugin, VSCodeBootstrap, WatchConfigurationPlugin } from 'unioc/vscode'
import { EtsLanguageServer } from './language-server'
import './res/resource-provider'
import type { IClassWrapper } from 'unioc'
import * as vscode from 'vscode'
import { SdkVersionGuesser } from './sdk/sdk-guesser'

class ArkTSExtension extends VSCodeBootstrap<Promise<LabsInfo | undefined>> {
  beforeInitialize(context: ExtensionContext): Promise<void> | void {
    this.use(CommandPlugin)
    this.use(LanguageProviderPlugin)
    this.use(DisposablePlugin)
    this.use(WatchConfigurationPlugin)
    extensionContext.value = context
  }

  async onActivate(context: ExtensionContext): Promise<LabsInfo | undefined> {
    context.subscriptions.push(
      vscode.workspace.onDidOpenTextDocument((document) => {
        if (document.fileName.endsWith('.json5')) {
          vscode.languages.setTextDocumentLanguage(document, 'jsonc')
        }
      }),
    )

    vscode.workspace.textDocuments.forEach((document) => {
      if (document.fileName.endsWith('.json5')) {
        vscode.languages.setTextDocumentLanguage(document, 'jsonc')
      }
    })

    const globalContainer = this.getGlobalContainer()
    globalContainer.findOne(SdkVersionGuesser)?.resolve()
    const languageServer = globalContainer.findOne(EtsLanguageServer) as IClassWrapper<typeof EtsLanguageServer> | undefined
    const runResult = await languageServer?.getClassExecutor().execute({
      methodName: 'run',
      arguments: [],
    })
    if (runResult?.type === 'result')
      return await runResult.value
  }
}

// eslint-disable-next-line no-restricted-syntax
export = new ArkTSExtension().run()
