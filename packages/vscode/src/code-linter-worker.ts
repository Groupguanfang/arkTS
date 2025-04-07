import type { CodeLinterResult, CodeLinterWorkerData } from './code-linter'
import child_process from 'node:child_process'
import fs from 'node:fs'
import { parentPort } from 'node:worker_threads'

function getJSONOutput(codelinterPath: string, workspaceRoot: string) {
  return new Promise<CodeLinterResult[]>((resolve, reject) => {
    if (!fs.existsSync(codelinterPath)) {
      reject(new Error(`Code Linter not found at ${codelinterPath}. Please check your configuration.`))
      return resolve([])
    }

    child_process.exec(`${codelinterPath} -f json`, {
      cwd: workspaceRoot,
    }, (error, stdout) => {
      if (error) {
        return reject(error)
      }

      const output = stdout.toString()
      console.log('======EXECUTE CODE LINTER OUTPUT START======')
      console.log(output)
      console.log('======EXECUTE CODE LINTER OUTPUT END======')

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
    })
  })
}

parentPort?.on('message', async (data: CodeLinterWorkerData) => {
  try {
    const { codelinterPath, workspaceRoot } = data
    const result = await getJSONOutput(codelinterPath, workspaceRoot)
    parentPort?.postMessage(result)
  }
  catch (error) {
    parentPort?.postMessage(error)
  }
})
