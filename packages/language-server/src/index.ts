import { createConnection, createServer, createTypeScriptProject, loadTsdkByPath } from '@volar/language-server/node';
import { create as createTypeScriptServices } from 'volar-service-typescript';
import ts from 'typescript';
import { EtsVirtualCode } from './ets-virtual-code';
import { createEtsService } from './ets-service';
import fs from 'node:fs'
import path from 'node:path';

let connection: ReturnType<typeof createConnection>
let server: ReturnType<typeof createServer>

function main() {
	connection = createConnection();
	server = createServer(connection);

	connection.listen();

	connection.onInitialize(params => {
		const tsdk = loadTsdkByPath(params.initializationOptions.typescript.tsdk, params.locale);

		return server.initialize(
			params,
			createTypeScriptProject(tsdk.typescript, tsdk.diagnosticMessages, () => ({
				languagePlugins: [
					{
						typescript: {
							extraFileExtensions: [
								{ extension: '.ets', isMixedContent: true, scriptKind: ts.ScriptKind.TS, }
							],
							resolveHiddenExtensions: true,
							getServiceScript(root) {
								return {
									code: root,
									extension: '.ets',
									scriptKind: ts.ScriptKind.TS,
								}
							},
						},
						getLanguageId(uri) {
							return uri.path.endsWith('.ets') ? 'ets' : undefined
						},
						createVirtualCode(_uri, languageId, snapshot) {
							if (languageId !== 'ets')
								return undefined
							return new EtsVirtualCode(snapshot)
						},
						updateVirtualCode(_uri, _virtualCode: EtsVirtualCode, newSnapshot) {
							return new EtsVirtualCode(newSnapshot)
						}
					}
				],
				setup(options) {
					if (!options.project || !options.project.typescript || !options.project.typescript.languageServiceHost) return
					const originalSettings = options.project.typescript?.languageServiceHost.getCompilationSettings()
					const userTsConfig = (() => {
						if (!params.rootPath) return
						const tsConfigPath = path.resolve(params.rootPath, 'tsconfig.json')
						if (!fs.existsSync(tsConfigPath)) return console.warn('tsconfig.json not found in', params.rootPath)
						
						const tsConfigRaw = fs.readFileSync(tsConfigPath, 'utf-8')
						console.log('Try to read tsconfig.json:', tsConfigPath, tsConfigRaw)
						return ts.parseJsonConfigFileContent(JSON.parse(tsConfigRaw), ts.sys, params.rootPath).options || {}
					})();

					options.project.typescript.languageServiceHost.getCompilationSettings = () => {
						return {
							...originalSettings,
							...userTsConfig,
							lib: ['ES6'],
						}
					}
				},
			})),
			[
				...createTypeScriptServices(tsdk.typescript),
				createEtsService(),
			],
		)
	});

	connection.onInitialized(server.initialized);
	connection.onShutdown(server.shutdown);

	return { connection, server }
}

main()