import path from 'node:path'
import { createConnection, createServer, createTypeScriptProject, loadTsdkByPath } from '@volar/language-server/node'
import ts, * as ets from 'ohos-typescript'
import { create as createEmmetService } from 'volar-service-emmet'
import { create as createTypeScriptServices } from 'volar-service-typescript'
import { getEtsOptions } from './config/ets-options'
import { etsLanguagePlugin } from './languagePlugin'
import { Logger } from './log/logger'
import fs from 'node:fs'
// 添加 JSON5 导入
import JSON5 from 'json5'

const connection = createConnection()
const server = createServer(connection)

connection.listen()

// 添加辅助函数：读取项目配置
function loadProjectConfig(rootPath: string, logger: Logger) {
  const config = {
    sdkDir: '',
    apiLevel: '',  // 确保始终返回字符串类型
    scripts: new Set<string>()
  }

  try {
    // 读取 local.properties
    const localPropsPath = path.join(rootPath, 'local.properties')
    if (fs.existsSync(localPropsPath)) {
      const content = fs.readFileSync(localPropsPath, 'utf-8')
      const lines = content.split('\n')
      
      lines.forEach(line => {
        const text = line.trim()
        if (text.startsWith('#') || !text) return
        
        const details = text.split('=')
        if (details.length === 2 && details[0] === 'sdk.dir') {
          config.sdkDir = details[1]
          logger.getConsola().info(`SDK dir from local.properties: ${config.sdkDir}`)
        }
      })
    }

    // 读取 build-profile.json5
    const buildProfilePath = path.join(rootPath, 'build-profile.json5')
    if (fs.existsSync(buildProfilePath)) {
      const content = fs.readFileSync(buildProfilePath, 'utf-8')
      const parsedData = JSON5.parse(content)
      // 确保 apiLevel 是字符串类型
      config.apiLevel = String(parsedData.app.products[0].compileSdkVersion)
      logger.getConsola().info(`API Level from build-profile: ${config.apiLevel}`)
    }

    // 扫描项目脚本文件
    if (ets.sys && ets.sys.readDirectory) {
      const files = ets.sys.readDirectory(
        rootPath,
        ['.ts', '.ets'],
        ['node_modules', 'oh_modules', 'ohpm-1.4.0', '.vscode']
      )
      
      files.forEach(file => {
        config.scripts.add(path.normalize(file))
        logger.getConsola().debug(`Found script: ${file}`)
      })
    }
  } catch (error) {
    logger.getConsola().warn(`Failed to load project config: ${error}`)
  }

  return config
}

// 添加辅助函数：解析 ETS 配置
function parseEtsConfig(etsPath: string, logger: Logger) {
  try {
    const etsLoaderPath = path.join(etsPath, 'build-tools', 'ets-loader')
    const tsConfigPath = path.join(etsLoaderPath, 'tsconfig.json')
    
    if (!fs.existsSync(tsConfigPath)) {
      logger.getConsola().warn(`ETS tsconfig.json not found at: ${tsConfigPath}`)
      return {}
    }

    const configFileText = fs.readFileSync(tsConfigPath, 'utf-8')
    const { config } = ets.parseConfigFileTextToJson(tsConfigPath, configFileText)
    const parsedConfig = ets.parseJsonConfigFileContent(
      config,
      ets.sys,
      path.dirname(tsConfigPath),
      undefined,
      tsConfigPath
    )
    
    logger.getConsola().info(`Loaded ETS config from: ${tsConfigPath}`)
    return parsedConfig.options
  } catch (error) {
    logger.getConsola().warn(`Failed to parse ETS config: ${error}`)
    return {}
  }
}

connection.onInitialize((params) => {
  const logger = new Logger()
  const tsdk = loadTsdkByPath(params.initializationOptions.typescript.tsdk, params.locale)
  
  // 获取基础 SDK 路径
  let sdkPath = params.initializationOptions.ohos.sdkPath
  let apiLevel = ''  // 确保是字符串类型
  let projectScripts = new Set<string>()

  // 如果有项目根路径，尝试读取项目配置
  if (params.rootPath) {
    const projectConfig = loadProjectConfig(params.rootPath, logger)
    
    // 优先使用项目配置中的 SDK 路径
    if (projectConfig.sdkDir) {
      sdkPath = projectConfig.sdkDir
    }
    
    apiLevel = projectConfig.apiLevel
    projectScripts = projectConfig.scripts
  }

  logger.getConsola().info(`TSDK path: ${params.initializationOptions.typescript.tsdk}`)
  logger.getConsola().info(`OHOS SDK path: ${sdkPath}`)
  logger.getConsola().info(`API Level: ${apiLevel}`)
  logger.getConsola().info(`Project scripts count: ${projectScripts.size}`)

  return server.initialize(
    params,
    createTypeScriptProject(ets as any, tsdk.diagnosticMessages, () => ({
      languagePlugins: [etsLanguagePlugin],
      setup(options) {
        if (!options.project || !options.project.typescript || !options.project.typescript.languageServiceHost)
          return
        
        const originalSettings = options.project.typescript?.languageServiceHost.getCompilationSettings() || {}
        
        // 构建 ETS 路径（确保 apiLevel 是字符串）
        const etsPath = apiLevel && apiLevel.trim()
          ? path.resolve(sdkPath, apiLevel.toString(), 'ets')  // 明确转换为字符串
          : path.resolve(sdkPath, 'ets')
        
        logger.getConsola().info(`Constructed ETS path: ${etsPath}`)
        
        // 解析 ETS SDK 中的 tsconfig.json
        const etsConfigOptions = parseEtsConfig(etsPath, logger)
        
        const baseLibFolderPath = path.resolve(etsPath, 'component')
        
        // 安全地读取组件库文件
        let lib: string[] = []
        try {
          if (fs.existsSync(baseLibFolderPath)) {
            lib = fs.readdirSync(baseLibFolderPath)
              .filter(file => file.endsWith('.d.ts') || file.endsWith('.d.ets'))
              .map(file => path.resolve(baseLibFolderPath, file))
            logger.getConsola().info(`Found ${lib.length} component library files`)
          } else {
            logger.getConsola().warn(`Component library folder not found: ${baseLibFolderPath}`)
          }
        } catch (error) {
          logger.getConsola().warn(`Failed to read component lib: ${error}`)
          
          // 尝试使用 ets.sys.readDirectory
          if (ets.sys && ets.sys.readDirectory) {
            try {
              lib = ets.sys.readDirectory(baseLibFolderPath, ['.d.ts', '.d.ets'])
                .map(f => path.normalize(f))
            } catch (sysError) {
              logger.getConsola().warn(`Failed to read with ets.sys: ${sysError}`)
            }
          }
        }

        // 构建 typeRoots，检查路径存在性
        const typeRoots: string[] = []
        if (params.rootPath) {
          const possibleTypeRoots = [
            path.resolve(params.rootPath, './node_modules/@types'),
            path.resolve(params.rootPath, './oh_modules/@types'),
          ]
          
          possibleTypeRoots.forEach(root => {
            if (fs.existsSync(root)) {
              typeRoots.push(root)
              logger.getConsola().info(`Added typeRoot: ${root}`)
            }
          })
        }
        
        // 添加 SDK 内部类型
        const sdkInternalTypes = path.resolve(etsPath, 'api', '@internal')
        if (fs.existsSync(sdkInternalTypes)) {
          typeRoots.push(sdkInternalTypes)
          logger.getConsola().info(`Added SDK internal types: ${sdkInternalTypes}`)
        }
        
        const etsLoaderPath = path.resolve(etsPath, 'build-tools/ets-loader')
        
        // 构建路径映射（相对于 ETS 路径）
        const paths: Record<string, string[]> = {
          '*': ['./api/*', './kits/*'],
          '@internal/full/*': ['./api/@internal/full/*'],
        }
        
        // 如果有项目根路径，添加 oh_modules 路径
        if (params.rootPath) {
          paths['*'].push(path.resolve(params.rootPath, './oh_modules/*'))
        }
        
        const baseUrl = etsPath

        options.project.typescript.languageServiceHost.getCompilationSettings = (): any => {
          const settings = {
            // 首先应用原始设置
            ...originalSettings as ets.CompilerOptions,
            // 然后应用 ETS SDK 中的配置
            ...etsConfigOptions,
            // 最后应用我们的自定义配置
            ets: getEtsOptions(),
            etsLoaderPath,
            target: ts.ScriptTarget.ESNext,
            module: ts.ModuleKind.ESNext,
            moduleResolution: ts.ModuleResolutionKind.NodeNext,
            moduleDetection: ts.ModuleDetectionKind.Force,
            typeRoots: typeRoots.length > 0 ? typeRoots : undefined,
            baseUrl,
            strict: true,
            lib: lib.length > 0 ? lib : undefined,
            experimentalDecorators: true,
            allowArbitraryExtensions: true,
            allowImportingTsExtensions: true,
            emitDeclarationOnly: true,
            strictPropertyInitialization: false,
            declaration: true,
            paths,
          } satisfies ets.CompilerOptions

          logger.getConsola().info(`Compiler options configured successfully`)
          return settings
        }
        
        // 如果有项目脚本，可以在这里进一步处理
        if (projectScripts.size > 0) {
          logger.getConsola().info(`Project includes ${projectScripts.size} script files`)
        }
      },
    })),
    [
      createEmmetService(),
      ...createTypeScriptServices(ets as any),
    ],
  )
})

connection.onInitialized(server.initialized)
connection.onShutdown(server.shutdown)