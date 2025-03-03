import type { LanguagePlugin } from '@volar/language-core'
import type { TsmLanguagePlugin } from 'ts-macro'
import type { URI } from 'vscode-uri'
import { EtsVirtualCode } from './ets-virtual-code'
import { etsPlugin } from './new'

export function getLanguagePlugins(ts: typeof import('typescript'), compilerOptions: import('typescript').CompilerOptions): LanguagePlugin<string | URI>[] {
  return [
    {
      typescript: {
        extraFileExtensions: [
          { extension: 'ets', isMixedContent: false, scriptKind: ts.ScriptKind.TS },
        ],
        resolveHiddenExtensions: true,
        getServiceScript(root) {
          return {
            code: root,
            extension: '.ets',
            scriptKind: 3 satisfies typeof ts.ScriptKind.TS,
          }
        },
      },
      getLanguageId(uri) {
        return typeof uri === 'string'
          ? uri.endsWith('.ets')
            ? 'ets'
            : undefined
          : uri.path.endsWith('.ets')
            ? 'ets'
            : undefined
      },
      createVirtualCode(uri, _languageId, snapshot) {
        return new EtsVirtualCode({
          filePath: typeof uri === 'string' ? uri : uri.path,
          ast: ts.createSourceFile(
            `index.ts`,
            snapshot.getText(0, snapshot.getLength()).toString(),
            99 satisfies typeof ts.ScriptTarget.Latest,
          ),
          languageId: 'ets',
          plugins: resolvePlugins([etsPlugin({ ts, compilerOptions })]),
        })
      },
    },
  ]
}

function resolvePlugins(
  plugins: (TsmLanguagePlugin | undefined)[],
): TsmLanguagePlugin[] {
  const prePlugins: TsmLanguagePlugin[] = []
  const postPlugins: TsmLanguagePlugin[] = []
  const normalPlugins: TsmLanguagePlugin[] = []

  if (plugins) {
    plugins.flat().forEach((p) => {
      if (!p) return
      if (p.enforce === 'pre') prePlugins.push(p)
      else if (p.enforce === 'post') postPlugins.push(p)
      else normalPlugins.push(p)
    })
  }
  const result = [...prePlugins, ...normalPlugins, ...postPlugins]

  // unique
  const map = new Map()
  for (const [index, plugin] of result.entries()) {
    map.set(plugin.name || `plugin-${index}`, plugin)
  }
  return [...map.values()]
}
