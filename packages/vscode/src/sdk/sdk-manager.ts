import type { SdkVersion } from '@arkts/sdk-downloader'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { Autowired, Service } from 'unioc'
import * as vscode from 'vscode'
import { Environment } from '../environment'
import { Translator } from '../translate'
import { SdkAnalyzer } from './sdk-analyzer'

type IsInstalledVersion = keyof typeof SdkVersion extends `API${infer N}` ? N : never

interface SdkAnalyzerMetadata {
  type: 'local' | 'workspace' | 'global'
}

@Service
export class SdkManager extends Environment {
  @Autowired
  protected readonly translator: Translator

  /**
   * Set the path to the OpenHarmony SDK.
   *
   * @param sdkFolderPath - The path to the OpenHarmony SDK.
   */
  async setOhosSdkPath(sdkFolderPath: string, target: vscode.ConfigurationTarget = vscode.ConfigurationTarget.Global): Promise<void> {
    await vscode.workspace.getConfiguration('ets').update('sdkPath', sdkFolderPath, target)
  }

  /**
   * Get the base path of the OpenHarmony SDK.
   *
   * @returns The base path of the OpenHarmony SDK.
   */
  async getOhosSdkBasePath(): Promise<string> {
    const ignoreWorkspaceLocalPropertiesFile = await this.isIgnoreWorkspaceLocalPropertiesFile()
    if (!ignoreWorkspaceLocalPropertiesFile) {
      const localPropertiesPath = path.join(vscode.workspace.workspaceFolders?.[0]?.uri.fsPath ?? '', 'local.properties')
      if (fs.existsSync(localPropertiesPath)) {
        const localProperties = fs.readFileSync(localPropertiesPath, 'utf-8')
        const sdkDir = localProperties.split('sdk.dir=')[1]?.trim()
        if (sdkDir && typeof sdkDir === 'string' && fs.existsSync(sdkDir) && fs.statSync(sdkDir).isDirectory())
          return sdkDir
      }
    }
    const baseSdkPath = vscode.workspace.getConfiguration('ets').get(
      'baseSdkPath',
      // eslint-disable-next-line no-template-curly-in-string
      '${os.homedir}/OpenHarmony',
    ) as string

    return baseSdkPath.replace(/\$\{os\.homedir\}/g, os.homedir())
  }

  /**
   * Check if the workspace local properties file is ignored.
   *
   * @returns `true` if the workspace local properties file is ignored, `false` if the workspace local properties file is not ignored.
   */
  async isIgnoreWorkspaceLocalPropertiesFile(): Promise<boolean> {
    return vscode.workspace.getConfiguration('ets').get<boolean>('ignoreWorkspaceLocalPropertiesFile', false)
  }

  /**
   * Check if the SDK is installed.
   *
   * @param version - The version of the SDK.
   * @returns `true` if the SDK is installed, `false` if the SDK is not installed, `'incomplete'` if the SDK is installed but is incomplete.
   */
  async isInstalled(version: IsInstalledVersion | (string & {})): Promise<boolean | 'incomplete'> {
    const sdkPath = path.join(await this.getOhosSdkBasePath(), version)
    const haveFolder = fs.existsSync(sdkPath) && fs.statSync(sdkPath).isDirectory()
    if (!haveFolder)
      return false

    const dirs = fs.readdirSync(sdkPath)
    if (
      !dirs.includes('ets')
      || !dirs.includes('js')
      || !dirs.includes('native')
      || !dirs.includes('previewer')
      || !dirs.includes('toolchains')
    ) {
      return 'incomplete'
    }

    return true
  }

  /** Get the path of the Ohos SDK from `local.properties` file. */
  protected async getOhosSdkPathFromLocalProperties(): Promise<string | undefined> {
    try {
      const workspaceDir = this.getCurrentWorkspaceDir()
      if (!workspaceDir)
        return undefined
      const localPropPath = vscode.Uri.joinPath(workspaceDir, 'local.properties')
      const stat = await vscode.workspace.fs.stat(localPropPath)
      if (stat.type !== vscode.FileType.File)
        return

      const content = await vscode.workspace.fs.readFile(localPropPath)
      const lines = content.toString().split('\n')
      const sdkPath = lines.find(line => line.startsWith('sdk.dir'))
      return sdkPath?.split('=')?.[1]?.trim()
    }
    catch {}
  }

  private _analyzedSdkPath: string | undefined
  private _analyzerSdkAnalyzer: SdkAnalyzer<SdkAnalyzerMetadata> | undefined

  public async getAnalyzedHmsSdkPath(): Promise<vscode.Uri | undefined> {
    const hmsSdkPath = vscode.workspace.getConfiguration('ets').get('hmsPath')
    if (!hmsSdkPath || typeof hmsSdkPath !== 'string')
      return undefined
    return vscode.Uri.file(hmsSdkPath)
  }

  /** Get the path of the Ohos SDK from `local.properties` file or configuration. */
  public async getAnalyzedSdkPath(force: boolean = false): Promise<string | undefined> {
    if (!force && this._analyzedSdkPath)
      return this._analyzedSdkPath

    // Check the local.properties file first
    const localSdkPath = await this.getOhosSdkPathFromLocalProperties()
    const localSdkAnalyzer = localSdkPath
      ? new SdkAnalyzer<SdkAnalyzerMetadata>(
        vscode.Uri.file(localSdkPath),
        await this.getAnalyzedHmsSdkPath(),
        this,
        this.translator,
        { type: 'local' },
      )
      : undefined

    // Check the workspace folder configuration
    const inspectedConfiguration = vscode.workspace.getConfiguration('ets').inspect<string>('sdkPath') || {} as ReturnType<ReturnType<typeof vscode.workspace.getConfiguration>['inspect']>
    const workspaceFolderAnalyzer = inspectedConfiguration?.workspaceValue && typeof inspectedConfiguration.workspaceValue === 'string'
      ? new SdkAnalyzer<SdkAnalyzerMetadata>(
        vscode.Uri.file(inspectedConfiguration.workspaceValue),
        await this.getAnalyzedHmsSdkPath(),
        this,
        this.translator,
        { type: 'workspace' },
      )
      : undefined

    // Check the global configuration
    const globalAnalyzer = inspectedConfiguration?.globalValue && typeof inspectedConfiguration.globalValue === 'string'
      ? new SdkAnalyzer<SdkAnalyzerMetadata>(
        vscode.Uri.file(inspectedConfiguration.globalValue),
        await this.getAnalyzedHmsSdkPath(),
        this,
        this.translator,
        { type: 'global' },
      )
      : undefined

    // Choose a valid SDK path
    const { choicedAnalyzer, analyzerStatus } = await SdkAnalyzer.choiceValidSdkPath<SdkAnalyzerMetadata>(
      { analyzer: localSdkAnalyzer, metadata: { type: 'local' } },
      { analyzer: workspaceFolderAnalyzer, metadata: { type: 'workspace' } },
      { analyzer: globalAnalyzer, metadata: { type: 'global' } },
    )
    const sdkPath = await choicedAnalyzer?.getSdkUri(force)
    this.getConsola().info(`Analyzed OHOS SDK path: ${sdkPath}, current using analyzer: ${choicedAnalyzer?.getExtraMetadata()?.type}`)
    for (const status of analyzerStatus)
      this.getConsola().info(`(${status.analyzer?.getExtraMetadata()?.type || status.metadata?.type || 'unknown type'}) Analyzer status: ${status.isValid ? 'available ✅' : 'no available ❌'} ${status.error ? status.error : ''}`)
    this._analyzedSdkPath = sdkPath?.fsPath
    this._analyzerSdkAnalyzer = choicedAnalyzer
    return this._analyzedSdkPath
  }

  public async getAnalyzedSdkAnalyzer(force: boolean = false): Promise<SdkAnalyzer<SdkAnalyzerMetadata> | undefined> {
    if (!force && this._analyzerSdkAnalyzer)
      return this._analyzerSdkAnalyzer
    await this.getAnalyzedSdkPath(force)
    return this._analyzerSdkAnalyzer
  }
}
