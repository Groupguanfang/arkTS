import { VirtualCode } from "@volar/language-core";
import { CodeInformation, TsmVirtualCode } from "ts-macro";

export interface EtsVirtualCodeOptions {
  filePath: string,
  ast: import('typescript').SourceFile,
  languageId?: string, 
  plugins?: import('ts-macro').TsmLanguagePlugin[]
  verification?: boolean
}

export class EtsVirtualCode extends TsmVirtualCode implements VirtualCode {
  constructor(options: EtsVirtualCodeOptions) {
    super(options.filePath, options.ast, options.languageId, options.plugins)

    if (typeof options.verification === 'boolean' && this.codes[0] && this.codes[0][3]) {
      const info = this.codes[0][3]
      if (typeof info === 'string') return
      // @ts-expect-error
      this.codes[0][3] = {
        ...info,
        verification: typeof options.verification === 'boolean' ? options.verification : true
      } as CodeInformation
    }
  }
}
