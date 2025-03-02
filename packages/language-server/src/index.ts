import { createConnection, createServer, createTypeScriptProject, loadTsdkByPath } from '@volar/language-server/node';
import { create as createTypeScriptServices } from 'volar-service-typescript';
import { getLanguagePlugins } from './language-plugin';
import { getCompilerOptions } from './ts-config';

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
			createTypeScriptProject(tsdk.typescript, tsdk.diagnosticMessages, () => {
				const compilerOptions = getCompilerOptions(tsdk, params)

				return {
					languagePlugins: [
						...getLanguagePlugins(tsdk.typescript, compilerOptions),
					],

					setup(options) {
						if (!options.project || !options.project.typescript || !options.project.typescript.languageServiceHost) return
						const originalSettings = options.project.typescript?.languageServiceHost.getCompilationSettings() || {}
	
						options.project.typescript.languageServiceHost.getCompilationSettings = () => {
							return {
								...originalSettings,
								...compilerOptions,
							}
						}
					},
				}
			}),
			[
				...createTypeScriptServices(tsdk.typescript, {
					disableAutoImportCache: true,
				}),
			],
		)
	});

	connection.onInitialized(server.initialized);
	connection.onShutdown(server.shutdown);

	return { connection, server }
}

main()
