import * as serverProtocol from '@volar/language-server/protocol';
import { activateAutoInsertion, createLabsInfo, getTsdk } from '@volar/vscode';
import { BaseLanguageClient, LanguageClient, LanguageClientOptions, ServerOptions, TransportKind } from '@volar/vscode/node';
import * as vscode from 'vscode';

let client: BaseLanguageClient;

export async function activate(context: vscode.ExtensionContext) {
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

	// support for https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volarjs-labs
	// ref: https://twitter.com/johnsoncodehk/status/1656126976774791168
	const labsInfo = createLabsInfo(serverProtocol);
	labsInfo.addLanguageClient(client);
	return labsInfo.extensionExports;
}

export function deactivate(): Thenable<any> | undefined {
	return client?.stop();
}
