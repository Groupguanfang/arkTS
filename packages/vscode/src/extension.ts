import * as serverProtocol from '@volar/language-server/protocol';
import { activateAutoInsertion, createLabsInfo, getTsdk } from '@volar/vscode';
import { BaseLanguageClient, LanguageClient, LanguageClientOptions, ServerOptions, TransportKind } from '@volar/vscode/node';
import * as vscode from 'vscode';
import { watch } from 'chokidar';
import path from 'node:path';

let client: BaseLanguageClient;

export async function activate(context: vscode.ExtensionContext) {
  const statusBarMessage = vscode.window.setStatusBarMessage('ArkTS server is starting...')
	const serverModule = vscode.Uri.joinPath(context.extensionUri, 'dist', 'server.js');
	const runOptions = { execArgv: <string[]>[] };
	const debugOptions = { execArgv: ['--nolazy', '--inspect=' + 6009] };
	const serverOptions: ServerOptions = {
		run: {
			module: serverModule.fsPath,
			transport: TransportKind.ipc,
			options: runOptions
		},
		debug: {
			module: serverModule.fsPath,
			transport: TransportKind.ipc,
			options: debugOptions
		},
	};
	const clientOptions: LanguageClientOptions = {
		documentSelector: [{ language: 'ets' }],
		initializationOptions: {
			typescript: {
				tsdk: (await getTsdk(context))!.tsdk,
			},
		},
	};
	client = new LanguageClient(
		'ets-language-server',
		'ETS Language Server',
		serverOptions,
		clientOptions,
	);
	await client.start();

	// support for auto close tag
	activateAutoInsertion('ets', client);
	context.subscriptions.push(
		vscode.commands.registerCommand('ets.restartServer', async () => {
			if (client) {
				await client.stop()
			}
			client = new LanguageClient(
				'ets-language-server',
				'ETS Language Server',
				serverOptions,
				clientOptions,
			);
			await client.start();
		})
	)

	const root = getWorkspaceRoot()
	if (root) {
		watch(path.resolve(root, 'tsconfig.json')).on('all', (e) => {
			if (e === 'error' || e === 'ready' || e === 'raw' || e === 'addDir' || e === 'unlinkDir') return
			vscode.window.setStatusBarMessage('tsconfig.json changed, restart ArkTS server...', 3000)
			client.stop().then(() => client.start()).then(() => {
				vscode.window.setStatusBarMessage('ArkTS server restarted!', 3000)
			})
		})
	} else {
		vscode.window.setStatusBarMessage('ArkTS server is ready, but no workspace found!', 3000)
	}

	// support for https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volarjs-labs
	// ref: https://twitter.com/johnsoncodehk/status/1656126976774791168
	const labsInfo = createLabsInfo(serverProtocol);
	labsInfo.addLanguageClient(client);
	statusBarMessage.dispose()
	return labsInfo.extensionExports;
}

export function deactivate(): Thenable<any> | undefined {
	return client?.stop();
}

function getWorkspaceRoot(): string | undefined {
  const workspaceFolders = vscode.workspace.workspaceFolders;
  if (workspaceFolders && workspaceFolders.length > 0) {
    return workspaceFolders[0].uri.fsPath;
  }
  return undefined;
}