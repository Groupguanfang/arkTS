import { createConnection, createServer, createTypeScriptProject, loadTsdkByPath } from '@volar/language-server/node';
import { create as createTypeScriptServices } from 'volar-service-typescript';
import { getLanguagePlugins } from './language-plugin';
import path from 'node:path';
import fs from 'node:fs';

let connection: ReturnType<typeof createConnection>
let server: ReturnType<typeof createServer>

function getCompilerOptions(
  ts: typeof import('typescript'),
  configFileName?: string,
) {
  if (configFileName) {
    const parsedCommandLine = ts.parseJsonSourceFileConfigFileContent(
      ts.readJsonConfigFile(configFileName, ts.sys.readFile),
      ts.sys,
      ts.sys.getCurrentDirectory(),
      {},
      configFileName,
    )
    return parsedCommandLine.options
  } else {
    return ts.getDefaultCompilerOptions()
  }
}

function main() {
	connection = createConnection();
	server = createServer(connection);

	connection.listen();

	connection.onInitialize(params => {
		const tsdk = loadTsdkByPath(params.initializationOptions.typescript.tsdk, params.locale);

		return server.initialize(
			params,
			createTypeScriptProject(tsdk.typescript, tsdk.diagnosticMessages, () => {
				const compilerOptions = getCompilerOptions(tsdk.typescript)
				return {
					languagePlugins: [
						...getLanguagePlugins(tsdk.typescript, compilerOptions),
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
							return tsdk.typescript.parseJsonConfigFileContent(JSON.parse(tsConfigRaw), tsdk.typescript.sys, params.rootPath).options || {}
						})();
	
						options.project.typescript.languageServiceHost.getCompilationSettings = () => {
							return {
								...originalSettings,
								...userTsConfig,
							}
						}
					},
				}
			}),
			[
				...createTypeScriptServices(tsdk.typescript),
			],
		)
	});

	connection.onInitialized(server.initialized);
	connection.onShutdown(server.shutdown);

	return { connection, server }
}

main()
