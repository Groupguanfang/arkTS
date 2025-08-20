import type { LanguagePlugin, VirtualCode } from '@volar/language-core'
import type * as ets from 'ohos-typescript'
import type * as ts from 'typescript'
import type { URI } from 'vscode-uri'
import path from 'node:path'
import { $$thisFixerPlugin } from './$$this-fixer-plugin'
import { createEmptyVirtualCode, createVirtualCode, ETSVitrualCode } from './ets-code'
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

  // const getFullVitrualCode = (snapshot: ts.IScriptSnapshot, languageId: string): VirtualCode => (
  //   createVirtualCode(snapshot, languageId, {
  //     completion: true,
  //     format: true,
  //     navigation: true,
  //     semantic: true,
  //     structure: true,
  //     verification: true,
  //   })
  // )

  const getDisabledVirtualCode = (snapshot: ts.IScriptSnapshot, languageId: string): VirtualCode => (
    createVirtualCode(snapshot, languageId, {
      completion: false,
      format: false,
      navigation: false,
      semantic: false,
      structure: false,
      verification: false,
    })
  )

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

      // ets files
      if (languageId === 'ets' && filePath.endsWith('.ets')) {
        return new ETSVitrualCode(
          filePath,
          tsOrEts.createSourceFile(filePath, snapshot.getText(0, snapshot.getLength()), 99 as any) as ts.SourceFile,
          'typescript',
          [$$thisFixerPlugin()] as any,
        )
      }
      // ETS Server mode
      if (isETSServerMode && !(isDTS || isDETS) && !isInSdkPath)
        return getDisabledVirtualCode(snapshot, languageId)
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
        return getDisabledVirtualCode(snapshot, languageId)
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
