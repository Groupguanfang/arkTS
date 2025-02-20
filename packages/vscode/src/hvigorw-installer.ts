import { FileSystem } from "./file-system";
import * as vscode from 'vscode';

export class HvigorwInstaller extends FileSystem {
  private async sync(hvigorwPath: string) {
    const workspaceRoot = this.getWorkspaceRoot()
    if (!workspaceRoot) return

    const terminal = vscode.window.createTerminal({
      name: 'hvigorw --sync'
    })
    terminal.sendText(`${hvigorwPath} --sync`)
  }

  public static fromContext(_context: vscode.ExtensionContext): HvigorwInstaller {
    const hvigorwInstaller = new HvigorwInstaller()
    const hvigorwPath = vscode.workspace.getConfiguration('ets').get('hvigorwPath') as string
    if (!hvigorwPath) return hvigorwInstaller
    const hvigorwAutoSync = vscode.workspace.getConfiguration('ets').get('hvigorwAutoSync') as boolean
    if (!hvigorwAutoSync) return hvigorwInstaller
    hvigorwInstaller.sync(hvigorwPath)
    return hvigorwInstaller
  }
}