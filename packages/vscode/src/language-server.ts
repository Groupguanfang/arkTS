import type * as vscode from 'vscode'
import fs from 'node:fs'
import path from 'node:path'
import { parseJsonConfigFileContent, sys } from 'typescript'
import { Watcher } from './abstract-watcher'

export abstract class LanguageServer extends Watcher {
  constructor(protected readonly context: vscode.ExtensionContext) {
    super()
  }

  public abstract start(): Promise<any>
  public abstract stop(): Promise<void>
  public abstract restart(): Promise<void>

  /**
   * Get tsconfig.json & referenced、related tsconfig.json files
   *
   * @returns tsconfig.json file paths
   */
  protected getTsConfigPaths(configPath: string = 'tsconfig.json'): string[] {
    const workspaceRoot = this.getWorkspaceRoot()
    if (!workspaceRoot) return []
    const fullConfigPath = path.resolve(workspaceRoot, configPath)
    if (!fs.existsSync(fullConfigPath)) return []

    // 解析 tsconfig.json 文件
    const configFile = fs.readFileSync(fullConfigPath, 'utf-8')
    const parsedConfig = parseJsonConfigFileContent(JSON.parse(configFile), sys, workspaceRoot)
    const referencedConfigPaths: string[] = [fullConfigPath] // 当前配置文件

    // 如果 tsconfig 中存在 extends 字段，解析它
    if (parsedConfig.raw && parsedConfig.raw.extends) {
      if (typeof parsedConfig.raw.extends === 'string') {
        const extendsPath = path.resolve(path.dirname(fullConfigPath), parsedConfig.raw.extends)
        referencedConfigPaths.push(...this.getTsConfigPaths(extendsPath))
      }
      else if (Array.isArray(parsedConfig.raw.extends)) {
        for (const extendsPath of parsedConfig.raw.extends) {
          referencedConfigPaths.push(...this.getTsConfigPaths(extendsPath))
        }
      }
    }

    // 如果 tsconfig 中存在 references 字段，递归解析每个引用的配置文件
    if (parsedConfig.projectReferences) {
      for (const ref of parsedConfig.projectReferences) {
        const refPath = path.resolve(path.dirname(fullConfigPath), ref.path)
        referencedConfigPaths.push(...this.getTsConfigPaths(refPath))
      }
    }

    return referencedConfigPaths
  }
}
