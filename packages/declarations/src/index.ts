import { mergeApi } from './merge-api'
import { mergeComponent } from './merge-component'
import fs from 'node:fs'

async function main() {
  mergeComponent()
  mergeApi()

  if (!fs.existsSync('dist'))
    fs.mkdirSync('dist')
  fs.writeFileSync('dist/index.d.ts', `
/// <reference types="./component-all.d.ts" />
declare function ___defineStruct___<T>(struct: T): T & {
  (): T extends new (...args: any[]) => infer R ? R & CustomComponent : CustomComponent
}
`)

  fs.writeFileSync('dist/tsconfig.json', JSON.stringify({
    extends: './tsconfig.base.json',
    include: ['./kits/**/*']
  }, null, 2))
}

main()
