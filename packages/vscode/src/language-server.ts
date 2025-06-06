import type { LabsInfo } from '@volar/vscode'
import type { LanguageClientOptions, ServerOptions } from '@volar/vscode/node'
import * as serverProtocol from '@volar/language-server/protocol'
import { activateAutoInsertion, createLabsInfo, getTsdk } from '@volar/vscode'
import { LanguageClient, TransportKind, State } from '@volar/vscode/node'
import * as vscode from 'vscode'
import { LanguageServerContext } from './context/server-context'

export class EtsLanguageServer extends LanguageServerContext {
  private _client: LanguageClient | undefined
  private _isRestarting: boolean = false

  private async getServerOptions(context: vscode.ExtensionContext): Promise<ServerOptions> {
    const serverModule = vscode.Uri.joinPath(context.extensionUri, 'dist', 'server.js')
    const runOptions = { execArgv: <string[]>[] }
    const debugOptions = { execArgv: ['--nolazy', `--inspect=${6009}`] }

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

  private async getClientOptions(context: vscode.ExtensionContext): Promise<LanguageClientOptions> {
    // 初始化 SDK 管理器（如果还没有初始化）
    this.initializeSdkManager(context)
    
    // 获取 SDK 路径，带有自动处理功能
    let ohosSdkPath = await this.getOhosSdkPath()
    
    // 如果没有找到 SDK，处理这种情况
    if (!ohosSdkPath) {
      this.getConsola().warn('OpenHarmony SDK not found, language server will start with limited functionality')
      
      // 检查是否应该自动提示安装
      const autoPrompt = vscode.workspace.getConfiguration('ets').get<boolean>('ohos.autoPromptInstall', true)
      if (autoPrompt) {
        // 异步处理 SDK 安装提示，不阻塞语言服务器启动
        this.handleSdkNotFoundAsync(context)
      }
    } else {
      this.getConsola().info(`Using OpenHarmony SDK at: ${ohosSdkPath}`)
    }

    return {
      documentSelector: [{ language: 'ets' }],
      initializationOptions: {
        typescript: {
          tsdk: (await getTsdk(context))!.tsdk,
        },
        ohos: {
          sdkPath: ohosSdkPath,
          tsconfigPath: vscode.Uri.joinPath(context.extensionUri, 'dist', 'types', 'tsconfig.base.json').fsPath,
        },
      },
    }
  }

  /**
   * 异步处理 SDK 未找到的情况，不阻塞语言服务器启动
   */
  private async handleSdkNotFoundAsync(context: vscode.ExtensionContext): Promise<void> {
    // 延迟一点时间，让语言服务器先启动
    setTimeout(async () => {
      try {
        const sdkPath = await this.handleSdkNotFound()
        if (sdkPath) {
          // 如果用户安装或选择了 SDK，重启语言服务器
          vscode.window.showInformationMessage(
            'OpenHarmony SDK configured successfully. Restarting language server for full functionality...'
          )
          await this.restart(context)
        }
      } catch (error) {
        this.getConsola().error('Error handling SDK not found:', error)
      }
    }, 2000) // 2秒延迟
  }

  async start(context: vscode.ExtensionContext): Promise<LabsInfo | undefined> {
    // 停止现有的客户端
    if (this._client) {
      try {
        // 检查客户端状态，只有在需要时才停止
        if (this._client.state === State.Running) {
          await this._client.stop()
        } else if (this._client.state === State.Starting) {
          // 如果正在启动，等待启动完成再停止
          this.getConsola().info('Previous client is starting, waiting for completion...')
          try {
            await this._client.start()
            await this._client.stop()
          } catch (error) {
            this.getConsola().warn('Error waiting for previous client startup:', error)
          }
        }
      } catch (error) {
        this.getConsola().warn('Error stopping previous client:', error)
      }
      this._client = undefined
    }

    try {
      // 获取服务器和客户端选项
      const [serverOptions, clientOptions] = await Promise.all([
        this.getServerOptions(context),
        this.getClientOptions(context),
      ])

      // 创建新的语言客户端
      this._client = new LanguageClient(
        'ets-language-server',
        'ETS Language Server',
        serverOptions,
        clientOptions,
      )

      // 监听 local.properties 文件变化
      this.listenAllLocalPropertiesFile(context)
      
      // 启动客户端
      await this._client.start()
      
      // 激活自动插入功能
      activateAutoInsertion('ets', this._client)
      
      this.getConsola().info('ETS Language Server started!')
      vscode.window.setStatusBarMessage('ETS Language Server started!', 1000)

      // 支持 Volar Labs
      const labsInfo = createLabsInfo(serverProtocol)
      labsInfo.addLanguageClient(this._client)
      
      return labsInfo.extensionExports

    } catch (error) {
      this.getConsola().error('Failed to start ETS Language Server:', error)
      vscode.window.showErrorMessage(`Failed to start ETS Language Server: ${error}`)
      throw error
    }
  }

  getCurrentLanguageClient(): LanguageClient | undefined {
    return this._client
  }

  async stop(): Promise<void> {
    if (this._client) {
      try {
        // 检查客户端状态，只有在运行状态时才停止
        if (this._client.state === State.Running) {
          await this._client.stop()
        } else if (this._client.state === State.Starting) {
          // 如果正在启动，等待启动完成再停止
          this.getConsola().info('Language client is starting, waiting for it to complete...')
          await this._client.start() // 等待启动完成
          await this._client.stop()  // 然后停止
        }
        this._client = undefined
        this.getConsola().info('ETS Language Server stopped!')
        vscode.window.setStatusBarMessage('ETS Language Server stopped!', 1000)
      } catch (error) {
        this.getConsola().error('Error stopping ETS Language Server:', error)
        this._client = undefined
      }
    } else {
      this.getConsola().warn('ETS Language Server is not running, cannot stop it.')
      vscode.window.setStatusBarMessage('ETS Language Server is not running, cannot stop it.', 1000)
    }
  }

  async restart(context: vscode.ExtensionContext): Promise<void> {
    // 防止并发重启
    if (this._isRestarting) {
      this.getConsola().info('ETS Language Server is already restarting, skipping...')
      return
    }

    this._isRestarting = true
    this.getConsola().info('Restarting ETS Language Server...')
    
    try {
      await this.stop()
      await this.start(context)
      this.getConsola().info('ETS Language Server restarted successfully!')
    } catch (error) {
      this.getConsola().error('Failed to restart ETS Language Server:', error)
      vscode.window.showErrorMessage(`Failed to restart ETS Language Server: ${error}`)
      throw error
    } finally {
      this._isRestarting = false
    }
  }

  /**
   * 检查语言服务器是否正在运行
   */
  isRunning(): boolean {
    return this._client !== undefined
  }

  /**
   * 获取当前的 SDK 状态和语言服务器状态
   */
  async getStatus(): Promise<{
    serverRunning: boolean
    sdkStatus: {
      isInstalled: boolean
      versions: string[]
      currentPath?: string
    }
  }> {
    const sdkStatus = await this.getSdkStatus()
    
    return {
      serverRunning: this.isRunning(),
      sdkStatus
    }
  }

  /**
   * 强制重新初始化 SDK 配置
   */
  async reinitializeSdk(context: vscode.ExtensionContext): Promise<void> {
    if (!this.sdkManager) {
      this.initializeSdkManager(context)
    }

    // 清除缓存的 SDK 路径
    const sdkPath = await this.getOhosSdkPath()
    
    if (sdkPath) {
      this.getConsola().info(`Reinitialized SDK at: ${sdkPath}`)
      // 重启语言服务器以应用新的 SDK 配置
      await this.restart(context)
    } else {
      this.getConsola().warn('No valid SDK found during reinitialization')
      const foundSdk = await this.handleSdkNotFound()
      if (foundSdk) {
        await this.restart(context)
      }
    }
  }

  /**
   * 手动触发 SDK 安装流程
   */
  async triggerSdkInstallation(): Promise<boolean> {
    if (!this.sdkManager) {
      vscode.window.showErrorMessage('SDK Manager not initialized')
      return false
    }

    return await this.installSdkWithDialog()
  }

  /**
   * 手动触发 SDK 路径选择流程
   */
  async triggerSdkSelection(): Promise<string | undefined> {
    return await this.browseSdkPath()
  }
}