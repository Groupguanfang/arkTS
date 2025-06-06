import type { LabsInfo } from '@volar/vscode'
import * as vscode from 'vscode'
import { EtsLanguageServer } from './language-server'

let lsp: EtsLanguageServer | undefined

export async function activate(context: vscode.ExtensionContext): Promise<LabsInfo> {
  lsp = new EtsLanguageServer()

  // 注册 SDK 管理相关命令
  registerCommands(context)

  // First start it will be return LabsInfo object for volar.js labs extension
  return await lsp.start(context) as LabsInfo
}

export function deactivate(): Promise<void> | undefined {
  return lsp?.stop()
}

function registerCommands(context: vscode.ExtensionContext): void {
  // 安装 OpenHarmony SDK
  context.subscriptions.push(
    vscode.commands.registerCommand('ets.installSdk', async () => {
      if (!lsp) {
        vscode.window.showErrorMessage('ETS Language Server not initialized')
        return
      }

      try {
        const success = await lsp.triggerSdkInstallation()
        if (success) {
          vscode.window.showInformationMessage('OpenHarmony SDK installed successfully!')
        }
      } catch (error) {
        vscode.window.showErrorMessage(`Failed to install SDK: ${error}`)
      }
    })
  )

  // 选择 SDK 路径
  context.subscriptions.push(
    vscode.commands.registerCommand('ets.selectSdkPath', async () => {
      if (!lsp) {
        vscode.window.showErrorMessage('ETS Language Server not initialized')
        return
      }

      try {
        const sdkPath = await lsp.triggerSdkSelection()
        if (sdkPath) {
          vscode.window.showInformationMessage('SDK path updated successfully!')
          await lsp.restart(context)
        }
      } catch (error) {
        vscode.window.showErrorMessage(`Failed to select SDK path: ${error}`)
      }
    })
  )

  // 重启语言服务器
  context.subscriptions.push(
    vscode.commands.registerCommand('ets.restartLanguageServer', async () => {
      if (!lsp) {
        vscode.window.showErrorMessage('ETS Language Server not initialized')
        return
      }

      try {
        await lsp.restart(context)
        vscode.window.showInformationMessage('ETS Language Server restarted successfully!')
      } catch (error) {
        vscode.window.showErrorMessage(`Failed to restart language server: ${error}`)
      }
    })
  )

  // 显示 SDK 状态
  context.subscriptions.push(
    vscode.commands.registerCommand('ets.showSdkStatus', async () => {
      if (!lsp) {
        vscode.window.showErrorMessage('ETS Language Server not initialized')
        return
      }

      try {
        const status = await lsp.getStatus()
        
        const statusMessage = [
          `**Language Server**: ${status.serverRunning ? '✅ Running' : '❌ Stopped'}`,
          `**SDK Status**: ${status.sdkStatus.isInstalled ? '✅ Installed' : '❌ Not Found'}`,
          status.sdkStatus.versions.length > 0 
            ? `**Available Versions**: ${status.sdkStatus.versions.join(', ')}`
            : '',
          status.sdkStatus.currentPath 
            ? `**Current Path**: ${status.sdkStatus.currentPath}`
            : '',
        ].filter(Boolean).join('\n')

        const actions: string[] = []
        if (!status.sdkStatus.isInstalled) {
          actions.push('Install SDK')
        }
        if (!status.sdkStatus.currentPath) {
          actions.push('Select SDK Path')
        }
        if (!status.serverRunning) {
          actions.push('Restart Server')
        }

        vscode.window.showInformationMessage(
          statusMessage,
          { modal: true },
          ...actions
        ).then(action => {
          switch (action) {
            case 'Install SDK':
              vscode.commands.executeCommand('ets.installSdk')
              break
            case 'Select SDK Path':
              vscode.commands.executeCommand('ets.selectSdkPath')
              break
            case 'Restart Server':
              vscode.commands.executeCommand('ets.restartLanguageServer')
              break
          }
        })
      } catch (error) {
        vscode.window.showErrorMessage(`Failed to get status: ${error}`)
      }
    })
  )

  // 重新初始化 SDK
  context.subscriptions.push(
    vscode.commands.registerCommand('ets.reinitializeSdk', async () => {
      if (!lsp) {
        vscode.window.showErrorMessage('ETS Language Server not initialized')
        return
      }

      try {
        await vscode.window.withProgress({
          location: vscode.ProgressLocation.Notification,
          title: 'Reinitializing OpenHarmony SDK...',
          cancellable: false
        }, async () => {
          await lsp!.reinitializeSdk(context)
        })
        
        vscode.window.showInformationMessage('SDK reinitialized successfully!')
      } catch (error) {
        vscode.window.showErrorMessage(`Failed to reinitialize SDK: ${error}`)
      }
    })
  )

  // 配置 SDK 设置
  context.subscriptions.push(
    vscode.commands.registerCommand('ets.configureSdk', async () => {
      const action = await vscode.window.showQuickPick([
        {
          label: '$(download) Install New SDK',
          description: 'Download and install OpenHarmony SDK',
          detail: 'Install SDK from official repository',
          action: 'install'
        },
        {
          label: '$(folder) Select Existing SDK',
          description: 'Browse for existing SDK installation',
          detail: 'Choose SDK from file system',
          action: 'browse'
        },
        {
          label: '$(info) Show SDK Status',
          description: 'Display current SDK information',
          detail: 'View installation status and paths',
          action: 'status'
        },
        {
          label: '$(refresh) Reinitialize SDK',
          description: 'Refresh SDK configuration',
          detail: 'Reload SDK settings and restart server',
          action: 'reinit'
        }
      ], {
        placeHolder: 'Choose an SDK configuration action',
        title: 'OpenHarmony SDK Configuration'
      })

      if (action) {
        switch (action.action) {
          case 'install':
            await vscode.commands.executeCommand('ets.installSdk')
            break
          case 'browse':
            await vscode.commands.executeCommand('ets.selectSdkPath')
            break
          case 'status':
            await vscode.commands.executeCommand('ets.showSdkStatus')
            break
          case 'reinit':
            await vscode.commands.executeCommand('ets.reinitializeSdk')
            break
        }
      }
    })
  )

  // 快速修复 SDK 问题
  context.subscriptions.push(
    vscode.commands.registerCommand('ets.quickFixSdk', async () => {
      if (!lsp) {
        vscode.window.showErrorMessage('ETS Language Server not initialized')
        return
      }

      try {
        const status = await lsp.getStatus()
        
        if (status.sdkStatus.isInstalled && status.serverRunning) {
          vscode.window.showInformationMessage('✅ Everything looks good! No fixes needed.')
          return
        }

        const fixes: string[] = []
        if (!status.sdkStatus.isInstalled) {
          fixes.push('Install SDK')
        }
        if (!status.serverRunning) {
          fixes.push('Restart Server')
        }

        const action = await vscode.window.showQuickPick(fixes, {
          placeHolder: 'Select a fix to apply',
          title: 'Quick Fix SDK Issues'
        })

        switch (action) {
          case 'Install SDK':
            await vscode.commands.executeCommand('ets.installSdk')
            break
          case 'Restart Server':
            await vscode.commands.executeCommand('ets.restartLanguageServer')
            break
        }
      } catch (error) {
        vscode.window.showErrorMessage(`Quick fix failed: ${error}`)
      }
    })
  )

  // 打开 SDK 文档
  context.subscriptions.push(
    vscode.commands.registerCommand('ets.openSdkDocs', () => {
      vscode.env.openExternal(vscode.Uri.parse('https://docs.openharmony.cn/'))
    })
  )
}