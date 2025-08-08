/* eslint-disable node/prefer-global/process */
import type { ETSPluginOptions, TypescriptLanguageFeatures } from '@arkts/shared'
import type { LabsInfo } from '@volar/vscode'
import type { LanguageClient, LanguageClientOptions } from '@volar/vscode/node'
import type { Translator } from '../translate'
import { executeCommand } from 'reactive-vscode'
import * as vscode from 'vscode'
import { AbstractWatcher } from '../abstract-watcher'
import { SdkAnalyzer } from '../sdk/sdk-analyzer'

interface SdkAnalyzerMetadata {
  type: 'local' | 'workspaceFolder' | 'global'
}

export abstract class LanguageServerContext extends AbstractWatcher {
  /** Start the language server. */
  abstract start(overrideClientOptions: LanguageClientOptions): Promise<[LabsInfo | undefined, LanguageClientOptions]>
  /** Stop the language server. */
  abstract stop(): Promise<void>
  /** Restart the language server. */
  abstract restart(): Promise<void>
  /** Get the current language client. */
  abstract getCurrentLanguageClient(): LanguageClient | undefined
  /** Current translator. */
  protected readonly translator: Translator

  private debounce<Fn extends (...args: any[]) => any>(func: Fn, delay: number): (...args: Parameters<Fn>) => void {
    let timer: ReturnType<typeof setTimeout> | undefined
    return function (...args) {
      clearTimeout(timer)
      timer = setTimeout(() => {
        // eslint-disable-next-line ts/ban-ts-comment
        // @ts-ignore
        func.apply(this, args)
      }, delay)
    }
  }

  /** Listen to all local.properties files in the workspace. */
  protected listenAllLocalPropertiesFile(): void {
    const workspaceFolders = vscode.workspace.workspaceFolders ?? []

    for (const workspaceFolder of workspaceFolders) {
      this.watcher.add(vscode.Uri.joinPath(workspaceFolder.uri, 'local.properties').fsPath)
      this.getConsola().info(`Listening ${vscode.Uri.joinPath(workspaceFolder.uri, 'local.properties').fsPath}`)
      this.watcher.add(vscode.Uri.joinPath(workspaceFolder.uri, 'build-profile.json5').fsPath)
      this.getConsola().info(`Listening ${vscode.Uri.joinPath(workspaceFolder.uri, 'build-profile.json5').fsPath}`)
    }

    const debouncedOnLocalPropertiesChanged = this.debounce(this.onLocalPropertiesChanged.bind(this), 1000)
    this.watcher.on('change', path => debouncedOnLocalPropertiesChanged('change', path))
    this.watcher.on('unlink', path => debouncedOnLocalPropertiesChanged('unlink', path))
  }

  private isFirstStart: boolean = true
  private async onLocalPropertiesChanged(event: string, path: string): Promise<void> {
    if (this.isFirstStart) {
      this.isFirstStart = false
      return
    }
    this.getConsola().warn(`${path} is ${event.toUpperCase()}, restarting ETS Language Server...`)
    this.restart()
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
    const localSdkAnalyzer = localSdkPath ? new SdkAnalyzer<SdkAnalyzerMetadata>(
      vscode.Uri.file(localSdkPath),
      await this.getAnalyzedHmsSdkPath(),
      this,
      this.translator,
      { type: 'local' },
    ) : undefined

    // Check the workspace folder configuration
    const inspectedConfiguration = vscode.workspace.getConfiguration('ets').inspect<string>('sdkPath') || {} as ReturnType<ReturnType<typeof vscode.workspace.getConfiguration>['inspect']>
    const workspaceFolderAnalyzer = inspectedConfiguration?.workspaceFolderValue && typeof inspectedConfiguration.workspaceFolderValue === 'string'
      ? new SdkAnalyzer<SdkAnalyzerMetadata>(
        vscode.Uri.file(inspectedConfiguration.workspaceFolderValue),
        await this.getAnalyzedHmsSdkPath(),
        this,
        this.translator,
        { type: 'workspaceFolder' },
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
    const sdkAnalyzer = await SdkAnalyzer.choiceValidSdkPath<SdkAnalyzerMetadata>(
      { analyzer: localSdkAnalyzer, metadata: { type: 'global' } },
      { analyzer: workspaceFolderAnalyzer, metadata: { type: 'workspaceFolder' } },
      { analyzer: globalAnalyzer, metadata: { type: 'global' } },
    )
    const sdkPath = await sdkAnalyzer.choicedAnalyzer?.getSdkUri(force)
    this.getConsola().info(`Analyzed OHOS SDK path: ${sdkPath}, current using analyzer: ${sdkAnalyzer.choicedAnalyzer?.getExtraMetadata()?.type}`)
    for (const status of sdkAnalyzer.analyzerStatus)
      this.getConsola().info(`(${status.analyzer?.getExtraMetadata()?.type || status.metadata?.type || 'unknown type'}) Analyzer status: ${status.isValid ? 'available ✅' : 'no available ❌'} ${status.error ? status.error : ''}`)
    this._analyzedSdkPath = sdkPath?.fsPath
    this._analyzerSdkAnalyzer = sdkAnalyzer.choicedAnalyzer
    return this._analyzedSdkPath
  }

  protected async getAnalyzedSdkAnalyzer(force: boolean = false): Promise<SdkAnalyzer<SdkAnalyzerMetadata> | undefined> {
    if (!force && this._analyzerSdkAnalyzer)
      return this._analyzerSdkAnalyzer
    await this.getAnalyzedSdkPath(force)
    return this._analyzerSdkAnalyzer
  }

  /** Configure the volar typescript plugin by `ClientOptions`. */
  protected async configureTypeScriptPlugin(clientOptions: LanguageClientOptions): Promise<void> {
    const typescriptPluginConfig: ETSPluginOptions = {
      workspaceFolder: this.getCurrentWorkspaceDir()?.fsPath,
      lspOptions: clientOptions.initializationOptions,
    }
    process.env.__etsTypescriptPluginFeature = JSON.stringify(typescriptPluginConfig)
    const typescriptLanguageFeatures = vscode.extensions.getExtension<TypescriptLanguageFeatures>('vscode.typescript-language-features')
    if (typescriptLanguageFeatures?.isActive) {
      executeCommand('typescript.restartTsServer')
    }
    await typescriptLanguageFeatures?.activate()
    typescriptLanguageFeatures?.exports.getAPI?.(0)?.configurePlugin?.('ets-typescript-plugin', typescriptPluginConfig)
  }
}
