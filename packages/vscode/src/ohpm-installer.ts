import fs from 'node:fs'
import path from 'node:path'
import * as vscode from 'vscode'
import { FileSystem } from './file-system'

export class OhpmInstaller extends FileSystem {
  private async install(ohpmPath: string) {
    const workspaceRoot = this.getWorkspaceRoot()
    if (!workspaceRoot) return
    if (!fs.existsSync(path.join(workspaceRoot, 'oh-package.json5'))) return

    const terminal = vscode.window.createTerminal({
      name: 'ohpm install',
    })

    terminal.sendText(`${ohpmPath} install`)
    terminal.show()
    this.log(`✅ ohpm install started.`)
  }

  public static fromContext(_context: vscode.ExtensionContext): OhpmInstaller {
    const ohpmInstaller = new OhpmInstaller()
    const ohpmPath = vscode.workspace.getConfiguration('ets').get('ohpmPath') as string
    if (!ohpmPath) return ohpmInstaller
    if (!fs.existsSync(ohpmPath)) {
      vscode.window.showErrorMessage('ohpm path is not found, please check the ets.ohpmPath configuration.')
      ohpmInstaller.log(`❌ ohpm path is not found, please check the ets.ohpmPath configuration.`)
      return ohpmInstaller
    }

    // Auto install dependencies when the project is opened & setting is enabled
    const ohpmAutoInstall = vscode.workspace.getConfiguration('ets').get('ohpmAutoInstall') as boolean
    if (!ohpmAutoInstall) return ohpmInstaller
    ohpmInstaller.install(ohpmPath)
    return ohpmInstaller
  }
}
