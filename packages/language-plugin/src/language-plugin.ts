import type { LanguagePlugin } from '@volar/language-core'
import type * as ets from 'ohos-typescript'
import type * as ts from 'typescript'
import type { URI } from 'vscode-uri'
import path from 'node:path'
import { createEmptyVirtualCode, createVirtualCode } from './ets-code'
import { createLazyGetter } from './utils'
import '@volar/typescript'

function isEts(tsOrEts: typeof ets | typeof ts): tsOrEts is typeof ets {
  return 'ETS' in tsOrEts.ScriptKind && tsOrEts.ScriptKind.ETS === 8
}

export interface ETSLanguagePluginOptions {
  sdkPaths?: string[]
  tsdk?: string
}

export function ETSLanguagePlugin(tsOrEts: typeof ts, options?: ETSLanguagePluginOptions): LanguagePlugin<URI | string>
export function ETSLanguagePlugin(tsOrEts: typeof ets, options?: ETSLanguagePluginOptions): LanguagePlugin<URI | string>
export function ETSLanguagePlugin(tsOrEts: typeof ets | typeof ts, { sdkPaths = [], tsdk = '' }: ETSLanguagePluginOptions = {}): LanguagePlugin<URI | string> {
  const isETSServerMode = isEts(tsOrEts)
  const isTSPluginMode = !isETSServerMode

  return {
    getLanguageId(uri) {
      const filePath = typeof uri === 'string' ? uri : uri.fsPath
      if (filePath.endsWith('.ets'))
        return 'ets'
      if (filePath.endsWith('.ts'))
        return 'typescript'
      return undefined
    },
    createVirtualCode(uri, languageId, snapshot) {
      const filePath = path.resolve(typeof uri === 'string' ? uri : uri.fsPath)
      const isInSdkPath = sdkPaths.some(sdkPath => filePath.startsWith(sdkPath))
      const isInTsdkPath = filePath.startsWith(tsdk)
      const isDTS = filePath.endsWith('.d.ts')
      const isDETS = filePath.endsWith('.d.ets')

      const getFullVitrualCode = createLazyGetter(() => (
        createVirtualCode(snapshot, languageId, {
          completion: true,
          format: true,
          navigation: true,
          semantic: true,
          structure: true,
          verification: true,
        })
      ))

      const getDisabledVirtualCode = createLazyGetter(() => (
        createVirtualCode(snapshot, languageId, {
          completion: false,
          format: false,
          navigation: false,
          semantic: false,
          structure: false,
          verification: false,
        })
      ))

      // ets files
      if (languageId === 'ets' && filePath.endsWith('.ets'))
        return getFullVitrualCode()
      // ETS Server mode
      if (isETSServerMode && !(isDTS || isDETS) && !isInSdkPath)
        return getDisabledVirtualCode()
      // TS Plugin mode
      if (isTSPluginMode && (isDTS || isDETS) && isInSdkPath) {
        return createEmptyVirtualCode(snapshot, languageId, {
          completion: false,
          format: false,
          navigation: false,
          semantic: false,
          structure: false,
          verification: false,
        })
      }
      // Proxy ts internal lib files, such as `lib.d.ts`, `lib.es2020.d.ts`, etc.
      if (isETSServerMode && (isDTS || isDETS) && isInTsdkPath)
        return getDisabledVirtualCode()
    },
    typescript: {
      // eslint-disable-next-line ts/ban-ts-comment
      // @ts-expect-error
      extraFileExtensions: isETSServerMode
        ? [
            { extension: 'ets', isMixedContent: false, scriptKind: 8 satisfies ets.ScriptKind.ETS },
            { extension: 'd.ets', isMixedContent: false, scriptKind: 8 satisfies ets.ScriptKind.ETS },
          ]
        : [],
      resolveHiddenExtensions: true,
      getServiceScript(root) {
        return {
          code: root,
          extension: '.ets',
          scriptKind: 3 satisfies typeof ets.ScriptKind.TS,
        }
      },
    },
  }
}
