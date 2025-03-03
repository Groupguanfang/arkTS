import type { InitializeParams, loadTsdkByPath } from '@volar/language-server/node'
import fs from 'node:fs'
import path from 'node:path'
import defu from 'defu'
import { resolveJsonModule } from './resolve-json-module'

interface ResolveExtendsCompilerOptionsOptions {
  /** 根路径 */
  rootPath: string
  /** 继承的tsconfig.json路径 */
  extendsTsConfigPath: string
  /** 项目tsconfig.json路径 */
  projectTsConfigPath: string
  /** tsdk */
  tsdk: ReturnType<typeof loadTsdkByPath>
}

/**
 * 解析单个tsconfig.json `extends` 配置字段, 如果有多个, 会递归解析并按顺序合并（using {@linkcode defu}）
 *
 * @param options - 解析选项
 * @returns 合并后的compilerOptions
 */
function resolveExtendsCompilerOptions(options: ResolveExtendsCompilerOptionsOptions): import('typescript').CompilerOptions {
  // Resolve the extendsTsConfigPath
  const resolvedExtendsTsConfig = resolveJsonModule({
    path: options.extendsTsConfigPath,
    containingFilePath: options.projectTsConfigPath,
    tsdk: options.tsdk,
  })

  // If the extendsTsConfigPath is not found, return an empty object
  if (!resolvedExtendsTsConfig.resolvedModule?.resolvedFileName)
    return {}
  if (!fs.existsSync(resolvedExtendsTsConfig.resolvedModule.resolvedFileName))
    return {}

  const extendsTsConfigRaw = fs.readFileSync(resolvedExtendsTsConfig.resolvedModule.resolvedFileName, 'utf-8')
  const extendsTsConfigDir = path.dirname(resolvedExtendsTsConfig.resolvedModule.resolvedFileName)
  const parsedExtendsTsConfig = options.tsdk.typescript.parseConfigFileTextToJson(resolvedExtendsTsConfig.resolvedModule.resolvedFileName, extendsTsConfigRaw).config || {}
  const extendsCompilerOptions = options.tsdk.typescript.parseJsonConfigFileContent(parsedExtendsTsConfig, options.tsdk.typescript.sys, options.rootPath).options || {}
  for (const key in extendsCompilerOptions.paths || {}) {
    for (const i in extendsCompilerOptions.paths![key] || []) {
      // 使用rootPath为
      const resolvedAliasPath = path.relative(
        options.rootPath,
        path.resolve(extendsTsConfigDir, extendsCompilerOptions.paths![key]![i]),
      )
      extendsCompilerOptions.paths![key]![i] = resolvedAliasPath
    }
  }
  return extendsCompilerOptions
}

/**
 * 解析tsconfig.json，合并 extends 和项目下的compilerOptions，**包括`paths`**
 *
 * @param tsdk - tsdk
 * @param params - 语言服务器初始化参数
 * @returns 解析后的compilerOptions
 */
export function getCompilerOptions(tsdk: ReturnType<typeof loadTsdkByPath>, params: InitializeParams): import('typescript').CompilerOptions {
  try {
    if (!params.rootPath) return {}
    const projectTsConfigPath = path.resolve(params.rootPath, 'tsconfig.json')
    if (!fs.existsSync(projectTsConfigPath)) {
      console.warn('tsconfig.json not found in', params.rootPath)
      return {}
    }

    const tsConfigRaw = fs.readFileSync(projectTsConfigPath, 'utf-8')
    const parsedTsConfig = tsdk.typescript.parseConfigFileTextToJson(projectTsConfigPath, tsConfigRaw).config || {}

    let extendsCompilerOptions: import('typescript').CompilerOptions = {}

    // 解析 extends 配置字段: 单个extends直接解析; 多个extends按顺序递归解析并合并
    if (typeof parsedTsConfig.extends === 'string') {
      extendsCompilerOptions = resolveExtendsCompilerOptions({
        rootPath: params.rootPath,
        extendsTsConfigPath: parsedTsConfig.extends,
        projectTsConfigPath,
        tsdk,
      })
    }
    else if (Array.isArray(parsedTsConfig.extends)) {
      for (const extendsTsConfigPath of parsedTsConfig.extends) {
        extendsCompilerOptions = defu(
          resolveExtendsCompilerOptions({
            rootPath: params.rootPath,
            extendsTsConfigPath,
            projectTsConfigPath,
            tsdk,
          }),
          extendsCompilerOptions,
        )
      }
    }

    // 解析项目下的tsconfig.json
    const projectCompilerOptions = tsdk.typescript.parseJsonConfigFileContent(parsedTsConfig, tsdk.typescript.sys, params.rootPath).options || {}
    // 合并 extends 和项目下的compilerOptions
    return defu(projectCompilerOptions, extendsCompilerOptions)
  }
  catch (error) {
    console.error(error)
    return {}
  }
}
