import * as vscode from 'vscode'
import { AbstractContext } from './context'

export abstract class FileSystem extends AbstractContext {
  /**
   * Get workspace root
   *
   * @returns workspace root path. if not found, return `undefined`.
   */
  protected getWorkspaceRoot(): string | undefined {
    const workspaceFolders = vscode.workspace.workspaceFolders
    if (workspaceFolders && workspaceFolders.length > 0) {
      return workspaceFolders[0].uri.fsPath
    }
    return undefined
  }
}
