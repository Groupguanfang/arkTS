import { mergeApi } from './merge-api'
import { mergeComponent } from './merge-component'
import fs from 'node:fs'

function main() {
  mergeComponent()
  mergeApi()

  if (!fs.existsSync('dist'))
    fs.mkdirSync('dist')
  fs.writeFileSync('dist/index.d.ts', `
/// <reference types="./component.d.ts" />
`)
}

main()
