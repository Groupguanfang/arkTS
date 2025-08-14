import process from 'node:process'
import { SdkArch as SdkArchEnum, SdkOS as SdkOSEnum } from '@arkts/sdk-downloader'
import { AbstractWatcher } from './abstract-watcher'

export abstract class Environment extends AbstractWatcher {
  getArch(): SdkArchEnum {
    const arch = process.arch

    if (arch === 'arm' || arch === 'arm64')
      return SdkArchEnum.ARM
    else if (arch === 'x64')
      return SdkArchEnum.X86
    else
      throw new Error(`Unsupported arch: ${arch}.`)
  }

  getOS(): SdkOSEnum {
    const os = process.platform

    if (os === 'darwin')
      return SdkOSEnum.MacOS
    else if (os === 'win32')
      return SdkOSEnum.Windows
    else if (os === 'linux')
      return SdkOSEnum.Linux
    else
      throw new Error(`Unsupported os: ${os}.`)
  }
}
