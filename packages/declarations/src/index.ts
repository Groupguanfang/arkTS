import fs from 'node:fs'
import path from 'node:path'
import { mergeApi } from './merge-api'
import { mergeComponent } from './merge-component'

async function main(): Promise<void> {
  mergeComponent()
  mergeApi()

  if (!fs.existsSync('dist'))
    fs.mkdirSync('dist')

  fs.copyFileSync('src/extra/global.d.ts', 'dist/global.d.ts')

  fs.writeFileSync('dist/index.d.ts', `
/// <reference path="./component-all.d.ts" />
/// <reference path="./global.d.ts" />
/** @deprecated in 0.0.16 is deprecated by naily's arkts extension. */
declare function ___defineStruct___<T>(struct: T): T & {
  (props?: T extends new (...args: any[]) => infer R ? Omit<Partial<R>, 'build'> : Record<string | number | symbol, any>): T extends new (...args: any[]) => infer R ? R & CustomComponent : CustomComponent
}
declare interface DetectedResource {
  readonly app: unique symbol
  readonly sys: unique symbol
}
/**
 * global $r function
 *
 * @param { string } value
 * @param { any[] } params
 * @returns { Resource }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * global $r function
 *
 * @param { string } value
 * @param { any[] } params
 * @returns { Resource }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * global $r function
 *
 * @param { string } value
 * @param { any[] } params
 * @returns { Resource }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * global $r function
 *
 * @param { string } value
 * @param { any[] } params
 * @returns { Resource }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare function $r(value: keyof DetectedResource | (string & {}), ...params: any[]): Resource;
`)

  fs.writeFileSync('dist/tsconfig.json', JSON.stringify({
    extends: './tsconfig.base.json',
    include: ['./kits/**/*'],
    compilerOptions: {
      allowArbitraryExtensions: true,
    },
  }, null, 2))

  copyDistFiles(path.resolve('dist'), path.resolve('../vscode/dist/types'))
  copyDistFiles(path.resolve('dist'), path.resolve('../language-server/out/types'))
}

function copyDistFiles(distPath: string, destDistPath: string): void {
  // 确保目标目录存在
  if (!fs.existsSync(path.dirname(destDistPath)))
    fs.mkdirSync(path.dirname(destDistPath), { recursive: true })

  // 使用 cpSync 复制整个目录
  fs.cpSync(distPath, destDistPath, { recursive: true })
}

main()
