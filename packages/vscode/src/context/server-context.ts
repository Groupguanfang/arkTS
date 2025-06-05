import type { LabsInfo } from '@volar/vscode'
import * as vscode from 'vscode'
import { AbstractWatcher } from '../abstract-watcher'
import { OhosSdkManager } from '../sdk-manager'

export abstract class LanguageServerContext extends AbstractWatcher {
  protected sdkManager: OhosSdkManager | undefined
  private restartTimeout: NodeJS.Timeout | undefined

  /** Start the language server. */
  abstract start(context: vscode.ExtensionContext): Promise<LabsInfo | undefined>
  /** Stop the language server. */
  abstract stop(): Promise<void>
  /** Restart the language server. */
  abstract restart(context: vscode.ExtensionContext): Promise<void>

  /** Initialize SDK manager */
  protected initializeSdkManager(context: vscode.ExtensionContext): void {
    if (!this.sdkManager) {
      this.sdkManager = new OhosSdkManager(context)
    }
  }

  /** Listen to all local.properties files in the workspace. */
  listenAllLocalPropertiesFile(context: vscode.ExtensionContext): void {
    const workspaceFolders = vscode.workspace.workspaceFolders ?? []

    for (const workspaceFolder of workspaceFolders) {
      this.watcher.add(vscode.Uri.joinPath(workspaceFolder.uri, 'local.properties').fsPath)
      this.getConsola().info(`Listening ${vscode.Uri.joinPath(workspaceFolder.uri, 'local.properties').fsPath}`)
    }

    this.watcher.on('all', (event, path) => this.localPropertiesWatcher(event, path, context))
  }

  private async localPropertiesWatcher(event: string, path: string, context: vscode.ExtensionContext): Promise<void> {
    this.getConsola().warn(`${path} is ${event.toUpperCase()}, scheduling restart...`)
    
    // 清除之前的定时器
    if (this.restartTimeout) {
      clearTimeout(this.restartTimeout)
    }
    
    // 设置新的定时器，防抖 500ms
    this.restartTimeout = setTimeout(async () => {
      try {
        this.getConsola().info('Restarting ETS Language Server due to local.properties change...')
        await this.restart(context)
      } catch (error) {
        this.getConsola().error('Failed to restart after local.properties change:', error)
      }
    }, 500)
  }

  /** Get the path of the Ohos SDK. */
  protected async getOhosSdkPath(): Promise<string | undefined> {
    // 首先尝试从 local.properties 获取
    const localPropSdkPath = await this.getSdkPathFromLocalProperties()
    if (localPropSdkPath) {
      // 验证路径是否有效
      if (this.sdkManager && await this.sdkManager.checkInstallation(localPropSdkPath)) {
        return localPropSdkPath
      } else {
        this.getConsola().warn(`SDK path from local.properties is invalid: ${localPropSdkPath}`)
      }
    }

    // 如果 local.properties 中没有找到有效的 SDK，则使用 SDK 管理器查找
    if (this.sdkManager) {
      const sdkPath = await this.sdkManager.findSdkPath()
      
      if (sdkPath) {
        // 如果找到了 SDK，询问用户是否要更新 local.properties
        const shouldUpdate = await this.promptUpdateLocalProperties(sdkPath)
        if (shouldUpdate) {
          await this.updateLocalPropertiesSdkPath(sdkPath)
        }
        return sdkPath
      }
    }

    return undefined
  }

  /** Get SDK path from local.properties file */
  private async getSdkPathFromLocalProperties(): Promise<string | undefined> {
    try {
      const workspaceDir = this.getCurrentWorkspaceDir()
      if (!workspaceDir) {
        return undefined
      }

      const localPropPath = vscode.Uri.joinPath(workspaceDir, 'local.properties')
      
      try {
        const stat = await vscode.workspace.fs.stat(localPropPath)
        if (stat.type !== vscode.FileType.File) {
          return undefined
        }
      } catch {
        // local.properties 文件不存在
        return undefined
      }

      const content = await vscode.workspace.fs.readFile(localPropPath)
      const lines = content.toString().split('\n')
      const sdkPath = lines.find(line => line.trim().startsWith('sdk.dir'))
      
      if (!sdkPath) {
        return undefined
      }

      const sdkDir = sdkPath.split('=')[1]?.trim()
      return sdkDir || undefined

    } catch (error) {
      this.getConsola().error('Failed to read local.properties:', error)
      return undefined
    }
  }

  /** Prompt user to update local.properties with found SDK path */
  private async promptUpdateLocalProperties(sdkPath: string): Promise<boolean> {
    const workspaceDir = this.getCurrentWorkspaceDir()
    if (!workspaceDir) return false

    const localPropPath = vscode.Uri.joinPath(workspaceDir, 'local.properties')
    
    try {
      await vscode.workspace.fs.stat(localPropPath)
      // 文件存在，询问是否更新
      const action = await vscode.window.showInformationMessage(
        `Found OpenHarmony SDK at: ${sdkPath}\nWould you like to update local.properties?`,
        'Yes', 'No'
      )
      return action === 'Yes'
    } catch {
      // 文件不存在，询问是否创建
      const action = await vscode.window.showInformationMessage(
        `Found OpenHarmony SDK at: ${sdkPath}\nWould you like to create local.properties file?`,
        'Yes', 'No'
      )
      return action === 'Yes'
    }
  }

  /** Update local.properties with SDK path */
  private async updateLocalPropertiesSdkPath(sdkPath: string): Promise<void> {
    try {
      const workspaceDir = this.getCurrentWorkspaceDir()
      if (!workspaceDir) return

      const localPropPath = vscode.Uri.joinPath(workspaceDir, 'local.properties')
      let content = ''
      let lines: string[] = []

      try {
        const existingContent = await vscode.workspace.fs.readFile(localPropPath)
        content = existingContent.toString()
        lines = content.split('\n')
      } catch {
        // 文件不存在，创建新内容
      }

      // 查找是否已存在 sdk.dir 配置
      const sdkDirLineIndex = lines.findIndex(line => line.trim().startsWith('sdk.dir'))
      const newSdkDirLine = `sdk.dir=${sdkPath}`

      if (sdkDirLineIndex >= 0) {
        // 更新现有行
        lines[sdkDirLineIndex] = newSdkDirLine
      } else {
        // 添加新行
        if (lines.length > 0 && lines[lines.length - 1].trim() !== '') {
          lines.push('') // 添加空行
        }
        lines.push(newSdkDirLine)
      }

      const newContent = lines.join('\n')
      await vscode.workspace.fs.writeFile(localPropPath, Buffer.from(newContent, 'utf8'))
      
      vscode.window.showInformationMessage(`Updated local.properties with SDK path: ${sdkPath}`)
      
    } catch (error) {
      this.getConsola().error('Failed to update local.properties:', error)
      vscode.window.showErrorMessage(`Failed to update local.properties: ${error}`)
    }
  }

  /** Install SDK with dialog */
  async installSdkWithDialog(): Promise<boolean> {
    if (!this.sdkManager) {
      vscode.window.showErrorMessage('SDK Manager not initialized')
      return false
    }

    const success = await this.sdkManager.installSdkWithDialog()
    if (success) {
      // 安装成功后，提示更新 local.properties
      const sdkPath = await this.sdkManager.findSdkPath()
      if (sdkPath) {
        const shouldUpdate = await this.promptUpdateLocalProperties(sdkPath)
        if (shouldUpdate) {
          await this.updateLocalPropertiesSdkPath(sdkPath)
        }
      }
    }
    return success
  }

  /** Browse and select SDK path */
  async browseSdkPath(): Promise<string | undefined> {
    const result = await vscode.window.showOpenDialog({
      canSelectFiles: false,
      canSelectFolders: true,
      canSelectMany: false,
      title: 'Select OpenHarmony SDK directory'
    })

    if (result?.[0]) {
      const sdkPath = result[0].fsPath
      
      // 验证选择的路径
      if (this.sdkManager && await this.sdkManager.checkInstallation(sdkPath)) {
        // 更新配置
        const config = vscode.workspace.getConfiguration('ets')
        await config.update('ohos.sdkPath', sdkPath, vscode.ConfigurationTarget.Global)
        
        // 更新 local.properties
        const shouldUpdate = await this.promptUpdateLocalProperties(sdkPath)
        if (shouldUpdate) {
          await this.updateLocalPropertiesSdkPath(sdkPath)
        }
        
        vscode.window.showInformationMessage('SDK path updated. Restarting language server...')
        return sdkPath
      } else {
        vscode.window.showErrorMessage('Selected directory is not a valid OpenHarmony SDK')
      }
    }

    return undefined
  }

  /** Handle SDK not found scenario */
  protected async handleSdkNotFound(): Promise<string | undefined> {
    const action = await vscode.window.showWarningMessage(
      'OpenHarmony SDK not found. Please choose an action:',
      {
        detail: 'The language server requires OpenHarmony SDK to provide proper intellisense and validation.',
        modal: true
      },
      'Install SDK',
      'Browse for SDK',
      'Configure Later'
    )

    switch (action) {
      case 'Install SDK':
        const success = await this.installSdkWithDialog()
        if (success) {
          return this.getOhosSdkPath() // 重新获取安装后的路径
        }
        break

      case 'Browse for SDK':
        const sdkPath = await this.browseSdkPath()
        if (sdkPath) {
          return sdkPath
        }
        break

      case 'Configure Later':
        vscode.window.showInformationMessage(
          'You can install or configure the SDK later using the command palette (Ctrl+Shift+P > "ETS: Install SDK")'
        )
        break
    }

    return undefined
  }

  /** Get SDK installation status */
  async getSdkStatus(): Promise<{
    isInstalled: boolean
    versions: string[]
    currentPath?: string
  }> {
    if (!this.sdkManager) {
      return { isInstalled: false, versions: [] }
    }

    const currentPath = await this.getOhosSdkPath()
    const versions = await this.sdkManager.getInstalledVersions()

    return {
      isInstalled: versions.length > 0,
      versions,
      currentPath
    }
  }
}