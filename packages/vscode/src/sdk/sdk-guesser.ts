import type { SdkVersion } from '@arkts/sdk-downloader'
import fs from 'node:fs'
import path from 'node:path'
import { Autowired, Service } from 'unioc'
import { IOnActivate } from 'unioc/vscode'
import * as vscode from 'vscode'
import { Environment } from '../environment'
import { Translator } from '../translate'
import { SdkInstaller } from './sdk-installer'
import { SdkManager } from './sdk-manager'

@Service
export class SdkVersionGuesser extends Environment implements IOnActivate {
  @Autowired
  protected readonly sdkManager: SdkManager

  @Autowired
  protected readonly sdkInstaller: SdkInstaller

  @Autowired
  protected readonly translator: Translator

  onActivate(): void {
    this.guessOhosSdkVersion()
  }

  async guessOhosSdkVersion(): Promise<keyof typeof SdkVersion | undefined> {
    const guessedOhosSdkVersion = this.getGuessedOhosSdkVersion()
    this.getConsola().info(`Guessed OpenHarmony SDK version: ${guessedOhosSdkVersion}`)
    if (!guessedOhosSdkVersion)
      return
    const [sdkStringVersion, sdkNumberVersion] = guessedOhosSdkVersion
    const currentSdkPath = await this.sdkManager.getOhosSdkPath()

    // Check if the current SDK is the same as the guessed SDK.
    if (currentSdkPath) {
      const ohUniPackageJsonPath = path.resolve(currentSdkPath, 'js', 'oh-uni-package.json')
      if (fs.existsSync(ohUniPackageJsonPath)) {
        const ohUniPackageJson = JSON.parse(fs.readFileSync(ohUniPackageJsonPath, 'utf-8'))
        const compileSdkVersion: string = ohUniPackageJson?.apiVersion || ''
        if (compileSdkVersion === String(sdkNumberVersion))
          return
      }
    }

    // Check if the guessed SDK is installed.
    const isInstalled = await this.sdkManager.isInstalled(sdkNumberVersion.toString())
    if (isInstalled) {
      const choiceYes = this.translator.t('sdk.guess.switch.yes')
      const choiceNo = this.translator.t('sdk.guess.switch.no')
      const choiceResult = await vscode.window.showInformationMessage(
        this.translator.t('sdk.guess.switch.title', { args: [sdkStringVersion] }),
        choiceYes,
        choiceNo,
      )
      if (choiceResult === choiceYes) {
        await this.sdkManager.setOhosSdkPath(path.join(await this.sdkManager.getOhosSdkBasePath(), sdkNumberVersion.toString()))
        vscode.window.showInformationMessage(this.translator.t('sdk.guess.switch.success', { args: [sdkStringVersion] }))
      }
    }
    else {
      const choiceYes = this.translator.t('sdk.guess.install.yes')
      const choiceNo = this.translator.t('sdk.guess.install.no')
      const choiceResult = await vscode.window.showInformationMessage(
        this.translator.t('sdk.guess.install.title', { args: [sdkStringVersion] }),
        choiceYes,
        choiceNo,
      )
      if (choiceResult === choiceYes)
        await this.sdkInstaller.installSdk(sdkStringVersion)
    }
  }

  /** Guess the OpenHarmony SDK version from the current workspace's build-profile.json5 file. */
  getGuessedOhosSdkVersion(): [keyof typeof SdkVersion, number] | undefined {
    const currentWorkspaceDir = this.getCurrentWorkspaceDir()
    if (!currentWorkspaceDir)
      return

    const buildProfileJson5 = this.readBuildProfileJson5()
    if (!buildProfileJson5)
      return
    const [buildProfileFilePath, buildProfile] = buildProfileJson5 || []

    try {
      let sdkVersion: string | number | undefined = buildProfile?.app?.products?.[0]?.compileSdkVersion
      if (typeof sdkVersion === 'string')
        sdkVersion = Number(sdkVersion)
      if (!sdkVersion || typeof sdkVersion !== 'number' || Number.isNaN(sdkVersion))
        return

      if (sdkVersion === 10)
        return ['API10', 10]
      else if (sdkVersion === 11)
        return ['API11', 11]
      else if (sdkVersion === 12)
        return ['API12', 12]
      else if (sdkVersion === 13)
        return ['API13', 13]
      else if (sdkVersion === 14)
        return ['API14', 14]
      else if (sdkVersion === 15)
        return ['API15', 15]
      else if (sdkVersion === 18)
        return ['API18', 18]
    }
    catch (error) {
      this.getConsola().error(error)
      this.getConsola().error(`Failed to parse build-profile.json5: ${buildProfileFilePath.fsPath}`)
    }
  }
}
