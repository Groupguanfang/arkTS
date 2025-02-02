import { LanguageServicePlugin } from '@volar/language-service'

export function createEtsService(): LanguageServicePlugin {
  return {
    name: 'ets',
    capabilities: {
      hoverProvider: true
    },
    create() {
      return {
        provideCompletionItems() {
          return {
            isIncomplete: true,
            items: []
          }
        }
      }
    },
  }
}