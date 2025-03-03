import type { LabsInfo } from '@volar/vscode'
import type { ExecutableOptions, LanguageClientOptions, ServerOptions } from '@volar/vscode/node'
import * as serverProtocol from '@volar/language-server/protocol'
import { activateAutoInsertion, createLabsInfo, getTsdk } from '@volar/vscode'
import { LanguageClient, TransportKind } from '@volar/vscode/node'
import * as vscode from 'vscode'
import { LanguageServer } from './language-server'

interface ExtendedExecutableOptions extends ExecutableOptions {
  [key: string]: any
}

export class ETSLanguageServer extends LanguageServer {
  constructor(protected readonly context: vscode.ExtensionContext) {
    super(context)
  }

  private getServerOptions(serverModule: vscode.Uri, runOptions: ExtendedExecutableOptions, debugOptions: ExtendedExecutableOptions): ServerOptions {
    return {
      run: {
        module: serverModule.fsPath,
        transport: TransportKind.ipc,
        options: runOptions,
      },
      debug: {
        module: serverModule.fsPath,
        transport: TransportKind.ipc,
        options: debugOptions,
      },
    }
  }

  private async getClientOptions(): Promise<LanguageClientOptions> {
    const verificationEnabled = vscode.workspace.getConfiguration('ets').get('verification.enabled')

    return {
      documentSelector: [{ language: 'ets' }],
      initializationOptions: {
        typescript: {
          tsdk: (await getTsdk(this.context))!.tsdk,
        },
        etsOptions: {
          verification: typeof verificationEnabled === 'boolean' ? verificationEnabled : true,
        },
      },
    }
  }

  private _client: LanguageClient | null = null
  private _isRestart: boolean = false

  public async start(): Promise<LabsInfo> {
    return new Promise<LabsInfo>(async (res) => {
      const statusBarMessage = vscode.window.setStatusBarMessage('ArkTS server is starting...')
      const serverModule = vscode.Uri.joinPath(this.context.extensionUri, 'dist', 'server.js')
      const runOptions: ExtendedExecutableOptions = { execArgv: <string[]>[] }
      const debugOptions = { execArgv: ['--nolazy', `--inspect=${6009}`] }
      const serverOptions = this.getServerOptions(serverModule, runOptions, debugOptions)
      const clientOptions = await this.getClientOptions()
      if (!this._client) {
        this._client = new LanguageClient(
          'ets-language-server',
          'ETS Language Server',
          serverOptions,
          clientOptions,
        )
      }
      await this._client.start()

      // support for auto close tag
      activateAutoInsertion('ets', this._client)

      // Add tsconfig.json files to watcher
      const tsConfigPaths = super.getTsConfigPaths()
      console.log('tsConfigPaths: ', tsConfigPaths)
      this.watcher.add(tsConfigPaths)
      this.watcher.on('all', () => this.restart())

      // Add command
      if (!this._isRestart) {
        this.context.subscriptions.push(
          vscode.commands.registerCommand('ets.restartServer', () => this.restart()),
        )
      }

      // support for https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volarjs-labs
      // ref: https://twitter.com/johnsoncodehk/status/1656126976774791168
      const labsInfo = createLabsInfo(serverProtocol)
      labsInfo.addLanguageClient(this._client)
      statusBarMessage.dispose()
      vscode.window.setStatusBarMessage('ETS Language Server is Started!', 1000)
      this._isRestart = true
      const timer = setTimeout(() => {
        res(labsInfo.extensionExports)
        clearTimeout(timer)
      }, 1000)
    })
  }

  public async stop(): Promise<void> {
    return new Promise(async (res) => {
      if (this._client) {
        await this._client.stop()
        vscode.window.setStatusBarMessage('ETS Language Server stopped!', 1000)
        const timer = setTimeout(() => {
          res()
          clearTimeout(timer)
        }, 1000)
      }
    })
  }

  public async restart(): Promise<void> {
    await this.stop()
    await this.start()
  }
}
