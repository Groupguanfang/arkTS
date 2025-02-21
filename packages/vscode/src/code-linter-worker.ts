import { parentPort } from 'node:worker_threads'
import { CodeLinterResult, CodeLinterWorkerData } from './code-linter'
import fs from 'node:fs'
import child_process from 'node:child_process'

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

      const jsonOutput = output.split('\n')[3]
      
      try {
        const result = JSON.parse(jsonOutput)
        resolve(result)
      } catch (error) {
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
  } catch (error) {
    parentPort?.postMessage(error)
  }
})