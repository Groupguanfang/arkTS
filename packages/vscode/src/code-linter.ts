import path from 'node:path'
import { Worker } from 'node:worker_threads'
import * as vscode from 'vscode'
import { FileSystem } from './file-system'

export interface CodeLinterResult {
  filePath: string
  messages: {
    line: number
    column: number
    severity: string
    message: string
    rule: string
  }[]
}

export interface CodeLinterWorkerData {
  codelinterPath: string
  workspaceRoot: string
}

export class CodeLinterExecutor extends FileSystem {
  constructor(private diagnosticCollection: vscode.DiagnosticCollection) {
    super()
  }

  private getDiagnosticSeverity(severity: string): vscode.DiagnosticSeverity {
    switch (severity) {
      case 'error':
        return vscode.DiagnosticSeverity.Error
      case 'warning':
        return vscode.DiagnosticSeverity.Warning
      default:
        return vscode.DiagnosticSeverity.Information
    }
  }

  public async run(): Promise<void> {
    const codelinterBinPath = vscode.workspace.getConfiguration('ets').get('codelinterBinPath') as string
    if (!codelinterBinPath) {
      vscode.window.showInformationMessage('Code Linter is disabled.')
      return
    }
    const statusBarMessage = vscode.window.setStatusBarMessage('Running Code Linter...')

    try {
      const result = await this.getJSONOutput(codelinterBinPath)
      this.diagnosticCollection.clear()
      await this.lint(result)
      vscode.window.setStatusBarMessage('Code Linter finished.', 1000)
    }
    catch (error) {
      vscode.window.showErrorMessage(`Failed to run Code Linter. Please check your configuration.`)
      console.error(error)
    }
    finally {
      statusBarMessage.dispose()
    }
  }

  private async lint(result: CodeLinterResult[]): Promise<void> {
    const diagnostics: vscode.Diagnostic[] = []

    for (const item of result) {
      for (const message of item.messages) {
        const severity = this.getDiagnosticSeverity(message.severity)
        const range = new vscode.Range(
          new vscode.Position(message.line - 1, message.column - 1),
          new vscode.Position(message.line - 1, message.column - 1 + message.message.length),
        )

        const diagnostic = new vscode.Diagnostic(range, message.message, severity)
        diagnostic.code = message.rule
        diagnostic.source = 'codelinter'
        diagnostics.push(diagnostic)
      }

      this.diagnosticCollection.set(vscode.Uri.file(item.filePath), diagnostics)
    }
  }

  private _worker = new Worker(path.resolve(__dirname, 'code-linter-worker.js'))

  getJSONOutput(codelinterPath: string): Promise<CodeLinterResult[]> {
    const workspaceRoot = this.getWorkspaceRoot()
    if (!workspaceRoot) return Promise.resolve([])

    this._worker.postMessage({ codelinterPath, workspaceRoot } as CodeLinterWorkerData)
    return new Promise<CodeLinterResult[]>((resolve, reject) => {
      this._worker.on('message', (result: CodeLinterResult[]) => resolve(result))
        .on('error', error => reject(error))
        .on('exit', (code) => {
          if (code !== 0) reject(new Error(`Code Linter exited with code ${code}`))
          else resolve([])
        })
    })
  }

  /**
   * Initialize the Code Linter Executor and start the linter when the extension is activated.
   *
   * @param context The extension context
   * @returns The Code Linter Executor
   */
  public static fromContext(context: vscode.ExtensionContext): CodeLinterExecutor {
    const codelinterDiagnosticCollection = vscode.languages.createDiagnosticCollection('codelinter')
    const codelinterExecutor = new CodeLinterExecutor(codelinterDiagnosticCollection)
    context.subscriptions.push(codelinterDiagnosticCollection)

    codelinterExecutor.run()
    vscode.workspace.onDidSaveTextDocument(async (document) => {
      if (document.languageId !== 'ets') return
      codelinterExecutor.run()
    })

    return codelinterExecutor
  }
}
