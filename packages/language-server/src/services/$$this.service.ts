import type { LanguageServicePlugin } from '@volar/language-server'
import { ETSVirtualCode } from '@arkts/language-plugin'
import { MarkupKind, Range } from '@volar/language-server'
import { URI } from 'vscode-uri'

const $$thisHoverText = {
  zh: `$$运算符为系统组件提供TS变量的引用, 使得TS变量和系统组件的内部状态保持同步。详见: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-two-way-sync`,
  default: `$$ operator provides a reference to the TS variable for system components, keeping the TS variable synchronized with the internal state of the system component. See: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-two-way-sync`,
}

function matchLocaleText<TStorage extends Record<'default' | (string & {}), string>, TKey extends keyof TStorage>(locale: string, storage: TStorage): TStorage[TKey] {
  for (const [key, value] of Object.entries(storage)) {
    if (locale.toLowerCase().includes(key.toLowerCase()))
      return value as TStorage[TKey]
  }
  return storage.default as TStorage[TKey]
}

/** 给 $$this 提供注释，说明$$this语法是用来干啥的，提供markdown文档悬浮到hover处 */
export function create$$ThisService(locale: string): LanguageServicePlugin {
  const $$thisRegex = /\$\$this/g

  return {
    name: 'ets:$$this',
    capabilities: {
      hoverProvider: true,
    },
    create(context) {
      return {
        provideHover(document, position, token) {
          if (token.isCancellationRequested)
            return null
          let isCanceled = false
          const cancelToken = token.onCancellationRequested(() => isCanceled = true)
          const decoded = context.decodeEmbeddedDocumentUri(URI.parse(document.uri))
          if (!decoded || isCanceled) {
            cancelToken.dispose()
            return null
          }
          const [decodedDocumentUri, embeddedCodeId] = decoded
          const virtualCode = context.language.scripts.get(decodedDocumentUri)?.generated?.embeddedCodes.get(embeddedCodeId)
          if (!virtualCode || !(virtualCode instanceof ETSVirtualCode) || isCanceled) {
            cancelToken.dispose()
            return null
          }
          const text = virtualCode.ast.getText()
          const matches = text.matchAll($$thisRegex)
          for (const match of matches) {
            if (isCanceled) {
              cancelToken.dispose()
              return null
            }

            const start = match.index
            const end = start + match[0].length

            // 如果当前的position位于start和end的范围内，则直接返回
            const positionOffset = document.offsetAt(position)
            if (positionOffset >= start && positionOffset <= end) {
              cancelToken.dispose()
              return {
                contents: {
                  kind: MarkupKind.Markdown,
                  value: matchLocaleText(locale, $$thisHoverText),
                },
                range: Range.create(
                  document.positionAt(start),
                  document.positionAt(end),
                ),
              }
            }
          }

          return null
        },
      }
    },
  }
}
