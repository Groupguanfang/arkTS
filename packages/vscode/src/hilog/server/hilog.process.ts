import type { Connection } from '@arkts/headless-jsonrpc'
import * as child_process from 'node:child_process'
import path from 'node:path'
import { Autowired, Service } from 'unioc'
import { IOnActivate } from 'unioc/vscode'
import { EtsLanguageServer } from '../../language-server'

@Service
export class HiLogProcessService implements IOnActivate {
  private process: child_process.ChildProcess | undefined
  private stdoutBuffer = ''
  private stderrBuffer = ''

  @Autowired
  private readonly languageServer: EtsLanguageServer

  @Autowired('hilog/connection')
  readonly connection: Connection

  async onActivate(): Promise<void> {
    await this.createProcess()
  }

  async createProcess(): Promise<void> {
    if (this.process && this.process.exitCode)
      return
    const sdkPath = await this.languageServer.getAnalyzedSdkPath()
    if (!sdkPath)
      return
    this.process = child_process.exec(`${path.join(sdkPath, 'toolchains', 'hdc')} hilog`)

    this.process.stdout?.on('data', (chunk) => {
      this.stdoutBuffer += chunk.toString()
      this.processBuffer(this.stdoutBuffer, 'stdout')
    })

    this.process.stderr?.on('data', (chunk) => {
      this.stderrBuffer += chunk.toString()
      this.processBuffer(this.stderrBuffer, 'stderr')
    })

    // 进程结束时处理剩余的缓冲区内容
    this.process.on('exit', (code) => {
      this.flushBuffers()
      if (code !== 0)
        this.createProcess()
    })
  }

  private processBuffer(buffer: string, type: 'stdout' | 'stderr'): void {
    const lines = buffer.split('\n')

    // 保留最后一行（可能不完整）
    const completeLines = lines.slice(0, -1)
    const incompleteLine = lines[lines.length - 1]

    // 发送完整的行
    for (const line of completeLines) {
      if (line.trim()) { // 跳过空行
        this.connection.sendNotification({
          method: 'hilog/log',
          params: [line],
        })
      }
    }

    // 更新缓冲区，保留不完整的行
    if (type === 'stdout') {
      this.stdoutBuffer = incompleteLine
    }
    else {
      this.stderrBuffer = incompleteLine
    }
  }

  private flushBuffers(): void {
    // 发送stdout缓冲区中的剩余内容
    if (this.stdoutBuffer.trim()) {
      this.connection.sendNotification({
        method: 'hilog/log',
        params: [this.stdoutBuffer],
      })
      this.stdoutBuffer = ''
    }

    // 发送stderr缓冲区中的剩余内容
    if (this.stderrBuffer.trim()) {
      this.connection.sendNotification({
        method: 'hilog/log',
        params: [this.stderrBuffer],
      })
      this.stderrBuffer = ''
    }
  }
}
