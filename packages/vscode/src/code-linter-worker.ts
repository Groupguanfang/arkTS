import type { MessagePort } from 'node:worker_threads'
import type { CodeLinterResult, CodeLinterWorkerData } from './code-linter'
import child_process from 'node:child_process'
import fs from 'node:fs'
import { parentPort } from 'node:worker_threads'

export interface CodeLinterWorkerTypeMessage {
  type: 'message'
  message: string
}

export interface CodeLinterWorkerErrorMessage {
  type: 'error'
  error: string
}

export interface CodeLinterWorkerCloseMessage {
  type: 'close'
  code: number
}

export interface CodeLinterWorkerSpawnMessage {
  type: 'spawn'
}

export interface CodeLinterWorkerResultMessage {
  type: 'result'
  result: CodeLinterResult[]
}

export type CodeLinterWorkerMessage =
  | CodeLinterWorkerTypeMessage
  | CodeLinterWorkerErrorMessage
  | CodeLinterWorkerCloseMessage
  | CodeLinterWorkerSpawnMessage
  | CodeLinterWorkerResultMessage

function getJSONOutput(codelinterPath: string, workspaceRoot: string, parentPort: MessagePort) {
  return new Promise<CodeLinterResult[]>((resolve, reject) => {
    if (!fs.existsSync(codelinterPath)) {
      reject(new Error(`Code Linter not found at ${codelinterPath}. Please check your configuration.`))
      return resolve([])
    }

    child_process.exec(`${codelinterPath} -f json`, {
      cwd: workspaceRoot,
    }, (error, stdout) => {
      if (error) {
        parentPort.postMessage({
          type: 'error',
          error: error.toString(),
        })
        return reject(error)
      }

      const output = stdout.toString()
      parentPort.postMessage({
        type: 'message',
        message: output,
      })

      // 找最后一行。如果最后一行是空的，那么找倒数第二行，如果倒数第二行也是空的，那么继续找，直到找到一个非空行
      function findLastLine(outputs: string[]) {
        if (outputs.length === 0)
          return ''
        const lastLine = outputs[outputs.length - 1]
        if (lastLine.trim() === '')
          return findLastLine(outputs.slice(0, -1))
        return lastLine
      }

      const outputLines = output.split('\n')
      const jsonOutput = findLastLine(outputLines)
      console.log(`json output: ${jsonOutput}`)

      try {
        const result = JSON.parse(jsonOutput)
        resolve(result)
      }
      catch (error) {
        console.error(error)
        reject(new Error(`Failed to parse Code Linter output, maybe the codelinter no compatible with the current version of Naily's ArkTS Support plugin, please contact the author.`))
      }
    }).addListener('message', (message) => {
      parentPort.postMessage({
        type: 'message',
        message: message.toString(),
      })
    }).addListener('error', (error) => {
      parentPort.postMessage({
        type: 'error',
        error: error.toString(),
      })
    }).addListener('close', (code) => {
      parentPort.postMessage({
        type: 'close',
        code,
      })
    }).addListener('spawn', () => {
      parentPort.postMessage({
        type: 'spawn',
      })
    })
  })
}

parentPort?.on('message', async (data: CodeLinterWorkerData) => {
  try {
    const { codelinterPath, workspaceRoot } = data
    const result = await getJSONOutput(codelinterPath, workspaceRoot, parentPort!)
    parentPort?.postMessage({
      type: 'result',
      result,
    })
  }
  catch (error) {
    parentPort?.postMessage(error)
  }
})
