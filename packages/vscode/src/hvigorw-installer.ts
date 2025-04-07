import fs from 'node:fs'
import path from 'node:path'
import * as vscode from 'vscode'
import { FileSystem } from './file-system'

export class HvigorwInstaller extends FileSystem {
  private async sync(hvigorwPath: string) {
    const workspaceRoot = this.getWorkspaceRoot()
    if (!workspaceRoot) return
    if (!fs.existsSync(path.join(workspaceRoot, 'hvigorfile.ts'))) return

    const terminal = vscode.window.createTerminal({
      name: 'hvigorw --sync',
    })
    terminal.sendText(`${hvigorwPath} --sync`)
    this.log(`🎆 hvigorw --sync started.`)
  }

  public static fromContext(_context: vscode.ExtensionContext): HvigorwInstaller {
    const hvigorwInstaller = new HvigorwInstaller()
    const hvigorwPath = vscode.workspace.getConfiguration('ets').get('hvigorwPath') as string
    if (!hvigorwPath) return hvigorwInstaller
    if (!fs.existsSync(hvigorwPath)) {
      hvigorwInstaller.log(`❌ hvigorw path is not found, please check the ets.hvigorwPath configuration.`)
      return hvigorwInstaller
    }
    const hvigorwAutoSync = vscode.workspace.getConfiguration('ets').get('hvigorwAutoSync') as boolean
    if (!hvigorwAutoSync) return hvigorwInstaller
    hvigorwInstaller.sync(hvigorwPath)
    return hvigorwInstaller
  }
}
