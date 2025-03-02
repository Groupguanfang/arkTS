import { createConnection, createServer, createTypeScriptProject, loadTsdkByPath } from '@volar/language-server/node';
import { create as createTypeScriptServices } from 'volar-service-typescript';
import { getLanguagePlugins } from './language-plugin';
import path from 'node:path';
import fs from 'node:fs';
import defu from 'defu'

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
							try {
								if (!params.rootPath) return
								const tsConfigPath = path.resolve(params.rootPath, 'tsconfig.json')
								if (!fs.existsSync(tsConfigPath)) return console.warn('tsconfig.json not found in', params.rootPath)
								
								const tsConfigRaw = fs.readFileSync(tsConfigPath, 'utf-8')
								const parsedTsConfig = JSON.parse(tsConfigRaw)

								function resolveExtendsCompilerOptions(rootPath: string, extendsTsConfigPath: string, projectTsConfigPath: string): import('typescript').CompilerOptions {
									const resolvedExtendsTsConfig = tsdk.typescript.resolveModuleName(
										extendsTsConfigPath,
										projectTsConfigPath,
										{ 
											target: tsdk.typescript.ScriptTarget.Latest,
											module: tsdk.typescript.ModuleKind.ESNext,
											moduleResolution: tsdk.typescript.ModuleResolutionKind.Bundler,
											resolveJsonModule: true
										},
										tsdk.typescript.sys,
									)
									if (resolvedExtendsTsConfig.resolvedModule?.resolvedFileName) {
										const extendsTsConfigRaw = fs.readFileSync(resolvedExtendsTsConfig.resolvedModule.resolvedFileName, 'utf-8')
										const extendsTsConfigDir = path.dirname(resolvedExtendsTsConfig.resolvedModule.resolvedFileName)
										const parsedExtendsTsConfig = JSON.parse(extendsTsConfigRaw)
										const extendsCompilerOptions = tsdk.typescript.parseJsonConfigFileContent(parsedExtendsTsConfig, tsdk.typescript.sys, rootPath).options || {}
										for (const key in extendsCompilerOptions.paths || {}) {
											for (const i in extendsCompilerOptions.paths![key] || []) {
												const resolvedAliasPath = path.relative(
													rootPath,
													path.resolve(extendsTsConfigDir, extendsCompilerOptions.paths![key]![i])
												)
												extendsCompilerOptions.paths![key]![i] = resolvedAliasPath
											}
										}
										return extendsCompilerOptions
									} else {
										return {}
									}
								}

								let extendsCompilerOptions: import('typescript').CompilerOptions = {}
								if (typeof parsedTsConfig.extends === 'string') {
									extendsCompilerOptions = resolveExtendsCompilerOptions(params.rootPath, parsedTsConfig.extends, tsConfigPath)
								} else if (Array.isArray(parsedTsConfig.extends)) {
									for (const extendsTsConfigPath of parsedTsConfig.extends) {
										extendsCompilerOptions = defu(
											resolveExtendsCompilerOptions(params.rootPath, extendsTsConfigPath, tsConfigPath),
											extendsCompilerOptions,
										)
									}
								}
								const projectCompilerOptions = tsdk.typescript.parseJsonConfigFileContent(parsedTsConfig, tsdk.typescript.sys, params.rootPath).options || {}
								return defu(projectCompilerOptions, extendsCompilerOptions)
							} catch (error) {
								console.error(error)
								return {}
							}
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
