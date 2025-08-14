/* eslint-disable perfectionist/sort-imports */
import 'reflect-metadata'
import type { LabsInfo } from '@volar/vscode'
import type { ExtensionContext } from 'vscode'
import { extensionContext, watch } from 'reactive-vscode'
import { CommandPlugin, DisposablePlugin, LanguageProviderPlugin, VSCodeBootstrap, WatchConfigurationPlugin } from 'unioc/vscode'
import { useCompiledWebview } from './hook/compiled-webview'
import { EtsLanguageServer } from './language-server'
import './res/resource-provider'
import { HiLogServerService } from './hilog/server'
import type { IClassWrapper } from 'unioc'
import * as vscode from 'vscode'
import type { JSONRPC } from '@arkts/headless-jsonrpc'
import { createConnection, createVSCodeWebviewAdapter } from '@arkts/headless-jsonrpc'
import { HiLogController } from './hilog/server/hilog.controller'
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
    const webview = useCompiledWebview(vscode.Uri.joinPath(context.extensionUri, 'build', 'hilog.html').fsPath)
    const closeWatch = watch(() => webview.view.value?.webview, async (webView) => {
      if (!webView)
        return
      const connection = createConnection({
        adapter: createVSCodeWebviewAdapter(webView, context),
        functions: await globalContainer.findOne<JSONRPC.Dictionary<(...args: unknown[]) => unknown>>(HiLogController)?.resolve(),
      })
      await connection.listen()
      await this.createValue(connection, 'hilog/connection').resolve()
      await globalContainer.findOne(HiLogServerService)?.resolve()
      closeWatch()
    }, { immediate: true })

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
