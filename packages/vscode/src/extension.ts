import * as vscode from 'vscode';
import { ETSLanguageServer } from './ets-language-server';
import { CodeLinterExecutor } from './code-linter';

let languageServer: ETSLanguageServer;

export async function activate(context: vscode.ExtensionContext) {
  // Initialize the language server
  languageServer = new ETSLanguageServer(context)
  // Initialize the Code Linter Executor
  CodeLinterExecutor.fromContext(context)

  // Return the language server to support the volar lab
  return await languageServer.start()
}

export function deactivate(): Thenable<any> | undefined {
	return languageServer?.stop();
}
