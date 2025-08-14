import { execSync } from 'node:child_process'
import path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'
import { logger } from 'tsdown'

const dirname = fileURLToPath(new URL('.', import.meta.url))

function publishNpmPackages() {
  try {
    logger.info(`Publishing @arkts/* packages...`)
    const command = `pnpm -F "@arkts/*" publish --publish-branch=next`
    logger.info(`Executing command: ${command}`)
    execSync(command, { cwd: path.resolve(dirname, '..'), stdio: 'inherit' })
    return true
  }
  catch (error) {
    logger.error(`Failed to publish @arkts/* packages: ${error instanceof Error ? error.message : String(error)}`)
    console.error(error)
    return false
  }
}

function publishToVsce() {
  try {
    logger.info(`Publishing to VSCE...`)
    const command = `pnpm -F vscode-naily-ets vsce ${process.argv.slice(2).includes('--dry-run') ? 'package' : 'publish'} ${process.argv.slice(2).filter(v => v !== '--dry-run').join(' ')}`
    logger.info(`Executing command: ${command}`)
    execSync(command, { cwd: path.resolve(dirname, '..'), stdio: 'inherit' })
    return true
  }
  catch (error) {
    logger.error(`Failed to publish to VSCE: ${error instanceof Error ? error.message : String(error)}`)
    console.error(error)
    return false
  }
}

function publishToOvsce() {
  try {
    if (process.argv.includes('--dry-run')) {
      logger.warn(`Skipping OVSCE package in dry-run mode.`)
      return true
    }
    logger.info(`Publishing to OVSCE...`)
    const command = `pnpm -F vscode-naily-ets ovsx publish ${process.argv.slice(2).filter(v => v !== '--dry-run').join(' ')}`
    logger.info(`Executing command: ${command}`)
    execSync(command, { cwd: path.resolve(dirname, '..'), stdio: 'inherit' })
    return true
  }
  catch (error) {
    logger.error(`Failed to publish to OVSCE: ${error instanceof Error ? error.message : String(error)}`)
    console.error(error)
    return false
  }
}

;(async () => {
  publishNpmPackages()
  publishToVsce()
  publishToOvsce()
})()
