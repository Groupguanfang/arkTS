import { FileSystem } from "./file-system";
import child_process from 'child_process'
import fs from 'node:fs'
import * as vscode from 'vscode'

interface CodeLinterResult {
  filePath: string;
  messages: {
    line: number;
    column: number;
    severity: string;
    message: string;
    rule: string;
  }[];
}

export class CodeLinterExecutor extends FileSystem {
  constructor(private diagnosticCollection: vscode.DiagnosticCollection) {
    super()
  }

  private getDiagnosticSeverity(severity: string): vscode.DiagnosticSeverity {
    switch (severity) {
      case 'error':
        return vscode.DiagnosticSeverity.Error;
      case 'warning':
        return vscode.DiagnosticSeverity.Warning;
      default:
        return vscode.DiagnosticSeverity.Information;
    }
  }

  public async run(): Promise<void> {
    const statusBarMessage = vscode.window.setStatusBarMessage('Running Code Linter...')
    const codelinterBinPath = vscode.workspace.getConfiguration('ets').get('codelinterBinPath') as string
    if (!codelinterBinPath) {
      vscode.window.showInformationMessage('Code Linter is disabled.')
      return
    }
    const result = await this.getJSONOutput(codelinterBinPath)
    this.diagnosticCollection.clear()
    await this.lint(result)
    statusBarMessage.dispose()
    vscode.window.setStatusBarMessage('Code Linter finished.', 1000)
  }

  private async lint(result: CodeLinterResult[]): Promise<void> {
    const diagnostics: vscode.Diagnostic[] = []

    for (const item of result) {
      for (const message of item.messages) {
        const severity = this.getDiagnosticSeverity(message.severity)
        const range = new vscode.Range(
          new vscode.Position(message.line - 1, message.column - 1),
          new vscode.Position(message.line - 1, message.column - 1 + message.message.length)
        )

        const diagnostic = new vscode.Diagnostic(range, message.message, severity)
        diagnostic.code = message.rule
        diagnostic.source = 'codelinter'
        diagnostics.push(diagnostic)
      }

      this.diagnosticCollection.set(vscode.Uri.file(item.filePath), diagnostics)
    }
  }

  getJSONOutput(codelinterPath: string): Promise<CodeLinterResult[]> {
    const workspaceRoot = this.getWorkspaceRoot()
    if (!workspaceRoot) return Promise.resolve([])

    if (!fs.existsSync(codelinterPath)) {
      vscode.window.showErrorMessage(`Code Linter not found at ${codelinterPath}. Please check your configuration.`)
      return Promise.resolve([])
    }

    return new Promise<CodeLinterResult[]>((resolve, reject) => {
      child_process.exec(`${codelinterPath} -f json`, {
        cwd: workspaceRoot,
      }, (error, stdout) => {
        if (error) {
          vscode.window.showErrorMessage(`Failed to execute Code Linter. Please check your configuration.`)
          return reject(error)
        }
  
        const output = stdout.toString()
        console.log('======EXECUTE CODE LINTER OUTPUT START======')
        console.log(output)
        console.log('======EXECUTE CODE LINTER OUTPUT END======')
  
        const jsonOutput = output.split('\n')[3]
        
        try {
          const result = JSON.parse(jsonOutput)
          resolve(result)
        } catch (error) {
          vscode.window.showErrorMessage(`Failed to parse Code Linter output, maybe the codelinter no compatible with the current version of Naily's ArkTS Support plugin, please contact the author.`)
          console.error(error)
        }
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