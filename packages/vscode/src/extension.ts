import * as vscode from 'vscode';
import { ETSLanguageServer } from './ets-language-server';
import { CodeLinterExecutor } from './code-linter';
import { OhpmInstaller } from './install';
import { HvigorwInstaller } from './hvigorw-installer';

let languageServer: ETSLanguageServer;

export async function activate(context: vscode.ExtensionContext) {
  // Initialize the volar language server
  languageServer = new ETSLanguageServer(context)
  // Initialize the Code Linter Executor
  CodeLinterExecutor.fromContext(context)
  // Initialize the Ohpm Installer
  OhpmInstaller.fromContext(context)
  // Initialize the Hvigorw Installer
  HvigorwInstaller.fromContext(context)

  // Return the language server to support the volar lab
  return await languageServer.start()
}

export function deactivate(): Thenable<any> | undefined {
	return languageServer?.stop();
}
