import * as vscode from 'vscode'

const outputChannel = vscode.window.createOutputChannel('ETS Support Powered by Naily')

export abstract class AbstractContext {
  protected log(message: string) {
    outputChannel.appendLine(`[${new Date().toLocaleString()}] ${message}`)
  }
}
