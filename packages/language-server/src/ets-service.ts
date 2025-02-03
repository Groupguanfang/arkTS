import { LanguageServicePlugin } from '@volar/language-service'
import path from 'node:path'
import fs from 'node:fs'
import { URI } from 'vscode-uri'
import { CompletionItemKind } from 'vscode-languageserver-types'

export function createEtsService(): LanguageServicePlugin {
  return {
    name: 'ets',
    capabilities: {
      hoverProvider: true,
      completionProvider: {
        triggerCharacters: ['/']
      },
      semanticTokensProvider: {
        legend: {
          tokenModifiers: [],
          tokenTypes: ['struct']
        }
      },
    },
    create(context) {
      return {
        provideCompletionItems(document, position) {
          const text = document.getText({ start: { line: position.line, character: 0 }, end: { line: position.line, character: position.character } })
          const matchImport = text.match(/import\s+(.*)\s+from\s+['"`](.*)/)
          if (!matchImport) return null
          const [, _importName, importPath] = matchImport
          const decodedURI = context.decodeEmbeddedDocumentUri(URI.parse(document.uri))
          if (!decodedURI) return null
          const [uri] = decodedURI
          const filePath = path.resolve(path.dirname(uri.path), importPath)
          if (!fs.existsSync(filePath)) return null
          const fileStat = fs.statSync(filePath)
          if (fileStat.isFile()) return null
          if (fileStat.isDirectory()) {
            return {
              isIncomplete: true,
              items: fs.readdirSync(filePath)
              .filter(filePath => filePath.endsWith('.ets') || filePath.endsWith('.ts'))
              .map(filePath => {
                return {
                  label: filePath.replace(/.ets|.ts$/, ''),
                  kind: CompletionItemKind.File,
                  insertText: filePath.replace(/.ets|.ts$/, ''),
                }
              })
            }
          }

          return {
            isIncomplete: true,
            items: [],
          }
        }
      }
    },
  }
}