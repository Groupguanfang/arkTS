import { FileSystem } from "./file-system";
import * as vscode from 'vscode';
import fs from 'node:fs';

export class OhpmInstaller extends FileSystem {
  private async install(ohpmPath: string) {
    const workspaceRoot = this.getWorkspaceRoot()
    if (!workspaceRoot) return

    const terminal = vscode.window.createTerminal({
      name: 'ohpm install'
    })

    terminal.sendText(`${ohpmPath} install`)
    terminal.show()
  }

  public static fromContext(_context: vscode.ExtensionContext): OhpmInstaller {
    const ohpmInstaller = new OhpmInstaller()
    const ohpmPath = vscode.workspace.getConfiguration('ets').get('ohpmPath') as string
    if (!ohpmPath) return ohpmInstaller
    if (!fs.existsSync(ohpmPath)) {
      vscode.window.showErrorMessage('ohpm path is not found, please check the ets.ohpmPath configuration.')
      return ohpmInstaller
    }

    // Auto install dependencies when the project is opened & setting is enabled
    const ohpmAutoInstall = vscode.workspace.getConfiguration('ets').get('ohpmAutoInstall') as boolean
    if (!ohpmAutoInstall) return ohpmInstaller
    ohpmInstaller.install(ohpmPath)
    return ohpmInstaller
  }
}