import * as vscode from 'vscode'
import * as path from 'path'
import { OhosSdkInstaller, SdkInstallOptions } from './sdk-installer'

export class OhosSdkManager {
  private installer: OhosSdkInstaller

  constructor(_context: vscode.ExtensionContext) {
    this.installer = new OhosSdkInstaller()
  }

  async installSdkWithDialog(): Promise<boolean> {
    try {
      // 1. 选择API版本
      const apiVersion = await vscode.window.showQuickPick(
        this.installer.getSupportedVersions().map(version => ({
          label: `API ${version}`,
          description: `OpenHarmony API Level ${version}`,
          detail: this.getVersionDescription(version),
          version
        })),
        {
          placeHolder: 'Select OpenHarmony API version to install',
          canPickMany: false
        }
      )

      if (!apiVersion) return false

      // 2. 选择安装路径
      const installOption = await vscode.window.showQuickPick([
        {
          label: 'Use default path',
          description: '/opt/ohsdk',
          detail: 'Install to the default system location',
          isDefault: true
        },
        {
          label: 'Choose custom path',
          description: 'Select a custom installation directory',
          detail: 'Browse for a different location',
          isDefault: false
        }
      ], {
        placeHolder: 'Choose installation directory'
      })

      if (!installOption) return false

      let customPath: string | undefined
      if (!installOption.isDefault) {
        const result = await vscode.window.showOpenDialog({
          canSelectFiles: false,
          canSelectFolders: true,
          canSelectMany: false,
          title: 'Select SDK installation directory'
        })
        customPath = result?.[0]?.fsPath
        if (!customPath) return false
      }

      // 3. 执行安装
      return await this.executeInstallation({
        apiVersion: apiVersion.version,
        sdkDir: customPath,
        onProgress: (_progress, _message) => {
          // 进度会在 withProgress 中处理
        }
      })

    } catch (error) {
      vscode.window.showErrorMessage(`Installation failed: ${error}`)
      return false
    }
  }

  private async executeInstallation(options: SdkInstallOptions): Promise<boolean> {
    return vscode.window.withProgress({
      location: vscode.ProgressLocation.Notification,
      title: `Installing OpenHarmony SDK API ${options.apiVersion}`,
      cancellable: true
    }, async (progress, token) => {
      
      return new Promise<boolean>((resolve) => {
        // 检查取消
        if (token.isCancellationRequested) {
          resolve(false)
          return
        }

        // 设置进度回调
        const progressCallback = (percent: number, message: string) => {
          progress.report({ 
            increment: percent - (progress as any).lastReported || 0,
            message 
          })
          ;(progress as any).lastReported = percent
        }

        // 执行安装
        this.installer.installSdk({
          ...options,
          onProgress: progressCallback
        }).then((success) => {
          if (success) {
            vscode.window.showInformationMessage(
              `OpenHarmony SDK API ${options.apiVersion} installed successfully!`,
              'Restart Language Server'
            ).then((action) => {
              if (action === 'Restart Language Server') {
                vscode.commands.executeCommand('ets.restartLanguageServer')
              }
            })
          }
          resolve(success)
        }).catch((error) => {
          vscode.window.showErrorMessage(`Installation failed: ${error.message}`)
          resolve(false)
        })

        // 处理取消
        token.onCancellationRequested(() => {
          // SDK安装器应该支持取消操作
          resolve(false)
        })
      })
    })
  }

  async findSdkPath(): Promise<string | undefined> {
    // 1. 检查配置
    const configPath = vscode.workspace.getConfiguration('ets').get<string>('ohos.sdkPath')
    if (configPath && await this.installer.checkSdkInstallation(configPath)) {
      return configPath
    }

    // 2. 检查默认路径
    const defaultPaths = ['/opt/ohsdk', '~/ohos-sdk', '/usr/local/ohos-sdk']
    for (const basePath of defaultPaths) {
      const versions = await this.installer.getInstalledVersions(basePath)
      if (versions.length > 0) {
        return path.join(basePath, versions[0]) // 返回最新版本
      }
    }

    // 3. 提示用户
    const action = await vscode.window.showWarningMessage(
      'OpenHarmony SDK not found. Would you like to install it?',
      'Install SDK',
      'Browse for SDK',
      'Cancel'
    )

    if (action === 'Install SDK') {
      const success = await this.installSdkWithDialog()
      if (success) {
        return this.findSdkPath() // 递归查找新安装的SDK
      }
    } else if (action === 'Browse for SDK') {
      return this.browseSdkPath()
    }

    return undefined
  }

  private async browseSdkPath(): Promise<string | undefined> {
    const result = await vscode.window.showOpenDialog({
      canSelectFiles: false,
      canSelectFolders: true,
      canSelectMany: false,
      title: 'Select OpenHarmony SDK directory'
    })

    if (result?.[0]) {
      const config = vscode.workspace.getConfiguration('ets')
      await config.update('ohos.sdkPath', result[0].fsPath, vscode.ConfigurationTarget.Global)
      return result[0].fsPath
    }

    return undefined
  }

  private getVersionDescription(version: string): string {
    const descriptions: Record<string, string> = {
      '10': 'OpenHarmony 4.0 Release',
      '11': 'OpenHarmony 4.1 Release', 
      '12': 'OpenHarmony 5.0.0 Release',
      '13': 'OpenHarmony 5.0.1 Release',
      '14': 'OpenHarmony 5.0.2 Release',
      '15': 'OpenHarmony 5.0.3 Release',
      '18': 'OpenHarmony 5.1.0 Release'
    }
    return descriptions[version] || `API Level ${version}`
  }

  async getInstalledVersions(): Promise<string[]> {
    return this.installer.getInstalledVersions()
  }

  async checkInstallation(sdkPath: string): Promise<boolean> {
    return this.installer.checkSdkInstallation(sdkPath)
  }
}