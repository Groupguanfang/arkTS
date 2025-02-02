import { createConnection, createServer, createTypeScriptProject, loadTsdkByPath } from '@volar/language-server/node';
import { create as createTypeScriptServices } from 'volar-service-typescript';
import ts from 'typescript';
import { EtsVirtualCode } from './ets-virtual-code';
import { createEtsService } from './ets-service';

const connection = createConnection();
const server = createServer(connection);

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
				const originalSettings = options.project.typescript?.languageServiceHost.getCompilationSettings;

				options.project.typescript.languageServiceHost.getCompilationSettings = () => {
					return {
						...originalSettings?.(),
						lib: ['ES6'],
						target: ts.ScriptTarget.ES2015,
						types: [],
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
