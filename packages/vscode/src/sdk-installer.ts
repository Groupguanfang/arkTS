import * as fs from 'fs/promises'
import * as path from 'path'
import * as https from 'https'
import * as http from 'http'
import * as tar from 'tar'
import * as unzipper from 'unzipper'
import { createWriteStream, createReadStream } from 'fs'

export interface SdkInstallOptions {
  apiVersion: string
  sdkDir?: string
  tempDir?: string
  onProgress?: (progress: number, message: string) => void
}

export interface SdkComponent {
  name: string
  filename: string
  installed: boolean
}

export class OhosSdkInstaller {
  private readonly SDK_URLS: Record<string, string> = {
    '10': 'https://repo.huaweicloud.com/openharmony/os/4.0-Release/ohos-sdk-windows_linux-public.tar.gz',
    '11': 'https://repo.huaweicloud.com/openharmony/os/4.1-Release/ohos-sdk-windows_linux-public.tar.gz',
    '12': 'https://repo.huaweicloud.com/openharmony/os/5.0.0-Release/ohos-sdk-windows_linux-public.tar.gz',
    '13': 'https://repo.huaweicloud.com/openharmony/os/5.0.1-Release/ohos-sdk-windows_linux-public.tar.gz',
    '14': 'https://repo.huaweicloud.com/openharmony/os/5.0.2-Release/ohos-sdk-windows_linux-public.tar.gz',
    '15': 'https://repo.huaweicloud.com/openharmony/os/5.0.3-Release/ohos-sdk-windows_linux-public.tar.gz',
    '18': 'https://repo.huaweicloud.com/openharmony/os/5.1.0-Release/ohos-sdk-windows_linux-public.tar.gz'
  }

  private readonly COMPONENTS = ['ets', 'js', 'native', 'previewer', 'toolchains']
  private readonly DEFAULT_SDK_DIR = '/opt/ohsdk'
  private readonly DEFAULT_TEMP_DIR = '/tmp/openharmony-sdk'

  async installSdk(options: SdkInstallOptions): Promise<boolean> {
    const { apiVersion, onProgress } = options
    const sdkDir = options.sdkDir || this.DEFAULT_SDK_DIR
    const tempDir = options.tempDir || this.DEFAULT_TEMP_DIR
    const actualSdkDir = path.join(sdkDir, apiVersion)

    try {
      // 1. 验证API版本
      onProgress?.(5, 'Validating API version...')
      if (!this.validateApiVersion(apiVersion)) {
        throw new Error(`Unsupported API version: ${apiVersion}`)
      }

      // 2. 检查依赖
      onProgress?.(10, 'Checking dependencies...')
      await this.checkDependencies()

      // 3. 创建目录
      onProgress?.(15, 'Creating directories...')
      await this.ensureDirectories([actualSdkDir, tempDir])

      // 4. 下载SDK
      onProgress?.(20, 'Downloading SDK...')
      const sdkFile = await this.downloadSdk(apiVersion, tempDir, (progress) => {
        onProgress?.(20 + progress * 0.4, `Downloading... ${progress.toFixed(1)}%`)
      })

      // 5. 解压主SDK包
      onProgress?.(60, 'Extracting main SDK package...')
      const extractDir = path.join(tempDir, 'temp_ohos_sdk')
      await this.extractMainSdk(sdkFile, extractDir)

      // 6. 处理组件
      onProgress?.(70, 'Processing components...')
      const components = await this.getAvailableComponents(path.join(extractDir, 'linux'))
      await this.processAllComponents(components, extractDir, actualSdkDir, (progress) => {
        onProgress?.(70 + progress * 0.25, `Installing components... ${progress.toFixed(1)}%`)
      })

      // 7. 清理临时文件
      onProgress?.(95, 'Cleaning up...')
      await this.cleanup(tempDir)

      onProgress?.(100, 'Installation completed!')
      return true

    } catch (error) {
      await this.cleanup(tempDir)
      throw error
    }
  }

  private validateApiVersion(apiVersion: string): boolean {
    return apiVersion in this.SDK_URLS
  }

  private async checkDependencies(): Promise<void> {
    // Node.js 内置了解压功能，不需要外部依赖
    // 但我们可以检查一些基本权限
    try {
      await fs.access('/usr/bin', fs.constants.R_OK)
    } catch {
      throw new Error('Insufficient system permissions')
    }
  }

  private async ensureDirectories(dirs: string[]): Promise<void> {
    for (const dir of dirs) {
      try {
        await fs.mkdir(dir, { recursive: true })
        await fs.access(dir, fs.constants.W_OK)
      } catch (error) {
        throw new Error(`Cannot create or write to directory: ${dir}`)
      }
    }
  }

  private async downloadSdk(
    apiVersion: string, 
    tempDir: string, 
    onProgress?: (progress: number) => void
  ): Promise<string> {
    const url = this.SDK_URLS[apiVersion]
    const filename = `ohos-sdk-${apiVersion}.tar.gz`
    const filepath = path.join(tempDir, filename)

    // 检查文件是否已存在
    try {
      await fs.access(filepath)
      onProgress?.(100)
      return filepath
    } catch {
      // 文件不存在，需要下载
    }

    return new Promise<string>((resolve, reject) => {
      const client = url.startsWith('https') ? https : http
      
      client.get(url, (response) => {
        if (response.statusCode !== 200) {
          reject(new Error(`Download failed: ${response.statusCode}`))
          return
        }

        const totalSize = parseInt(response.headers['content-length'] || '0', 10)
        let downloadedSize = 0

        const fileStream = createWriteStream(filepath)
        
        response.on('data', (chunk) => {
          downloadedSize += chunk.length
          if (totalSize > 0) {
            const progress = (downloadedSize / totalSize) * 100
            onProgress?.(progress)
          }
        })

        response.pipe(fileStream)

        fileStream.on('finish', () => {
          fileStream.close()
          resolve(filepath)
        })

        fileStream.on('error', (err) => {
          fs.unlink(filepath).catch(() => {}) // 清理失败的文件
          reject(err)
        })

      }).on('error', (err) => {
        reject(new Error(`Download failed: ${err.message}`))
      })
    })
  }

  private async extractMainSdk(sdkFile: string, extractDir: string): Promise<void> {
    await fs.mkdir(extractDir, { recursive: true })
    
    return new Promise<void>((resolve, reject) => {
      createReadStream(sdkFile)
        .pipe(tar.extract({ 
          cwd: extractDir,
          strip: 0
        }))
        .on('error', reject)
        .on('end', resolve)
    })
  }

  private async getAvailableComponents(linuxDir: string): Promise<SdkComponent[]> {
    try {
      const files = await fs.readdir(linuxDir)
      const components: SdkComponent[] = []

      for (const component of this.COMPONENTS) {
        const componentFile = files.find(file => 
          file.startsWith(`${component}-linux`) && file.endsWith('.zip')
        )
        
        if (componentFile) {
          components.push({
            name: component,
            filename: componentFile,
            installed: false
          })
        }
      }

      return components
    } catch (error) {
      throw new Error(`Failed to scan components: ${error}`)
    }
  }

  private async processAllComponents(
    components: SdkComponent[],
    extractDir: string,
    targetDir: string,
    onProgress?: (progress: number) => void
  ): Promise<void> {
    const total = components.length
    let completed = 0

    for (const component of components) {
      await this.processComponent(component, extractDir, targetDir)
      completed++
      onProgress?.((completed / total) * 100)
    }
  }

  private async processComponent(
    component: SdkComponent,
    extractDir: string,
    targetDir: string
  ): Promise<void> {
    const linuxDir = path.join(extractDir, 'linux')
    const componentFile = path.join(linuxDir, component.filename)
    const componentTempDir = path.join(linuxDir, component.name)
    const targetComponentDir = path.join(targetDir, component.name)

    // 创建临时目录
    await fs.mkdir(componentTempDir, { recursive: true })

    // 解压组件
    await this.extractZip(componentFile, componentTempDir)

    // 检查解压后的结构
    const extractedPath = path.join(componentTempDir, component.name)
    try {
      await fs.access(extractedPath)
      
      // 如果目标目录存在，先删除
      try {
        await fs.rm(targetComponentDir, { recursive: true, force: true })
      } catch {
        // 忽略删除错误
      }

      // 移动到目标目录
      await fs.rename(extractedPath, targetComponentDir)
      component.installed = true

    } catch (error) {
      throw new Error(`Component ${component.name} has unexpected structure`)
    }
  }

  private async extractZip(zipFile: string, targetDir: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      createReadStream(zipFile)
        .pipe(unzipper.Extract({ path: targetDir }))
        .on('error', reject)
        .on('close', resolve)
    })
  }

  private async cleanup(tempDir: string): Promise<void> {
    try {
      await fs.rm(tempDir, { recursive: true, force: true })
    } catch {
      // 忽略清理错误
    }
  }

  async checkSdkInstallation(sdkPath: string): Promise<boolean> {
    try {
      const stat = await fs.stat(sdkPath)
      return stat.isDirectory()
    } catch {
      return false
    }
  }

  async getInstalledVersions(sdkDir: string = this.DEFAULT_SDK_DIR): Promise<string[]> {
    try {
      const entries = await fs.readdir(sdkDir, { withFileTypes: true })
      return entries
        .filter(entry => entry.isDirectory())
        .map(entry => entry.name)
        .filter(name => /^\d+$/.test(name))
        .sort((a, b) => parseInt(b) - parseInt(a))
    } catch {
      return []
    }
  }

  async getComponentsStatus(sdkPath: string): Promise<SdkComponent[]> {
    const components: SdkComponent[] = []
    
    for (const component of this.COMPONENTS) {
      const componentPath = path.join(sdkPath, component)
      const installed = await this.checkSdkInstallation(componentPath)
      
      components.push({
        name: component,
        filename: '',
        installed
      })
    }

    return components
  }

  getSupportedVersions(): string[] {
    return Object.keys(this.SDK_URLS)
  }
}