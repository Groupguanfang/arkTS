import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import MagicString from 'magic-string'
import { parseAndWalk } from 'oxc-walker'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const distFilePath = path.join(__dirname, '../dist/client.js')
const content = fs.readFileSync(distFilePath, 'utf-8')

// Check if the fix already exists to avoid duplicate additions
if (content.includes('require_chunk.__toESM(require_Reflect());')) {
  console.log('Reflect fix already applied, skipping...')
  process.exit(0)
}

const ms = new MagicString(content, {
  filename: distFilePath,
})

parseAndWalk(content, distFilePath, {
  enter: (node) => {
    if (node.type !== 'VariableDeclarator')
      return
    if (node.id.type !== 'Identifier')
      return
    if (node.id.name !== 'require_Reflect')
      return

    ms.appendRight(node.end, `\n;require_chunk.__toESM(require_Reflect());`)
  },
})

fs.writeFileSync(distFilePath, ms.toString())
