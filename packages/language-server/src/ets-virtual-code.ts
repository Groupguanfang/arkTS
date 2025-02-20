import { VirtualCode } from "@volar/language-core";
import { TsmVirtualCode } from "ts-macro";

export class EtsVirtualCode extends TsmVirtualCode implements VirtualCode {
  constructor(filePath: string, ast: import('typescript').SourceFile, languageId?: string, plugins?: import('ts-macro').TsmLanguagePlugin[]) {
    super(filePath, ast, languageId, plugins)

    this.mappings[0].data = {
      ...(this.mappings[0].data || {}),
      verification: false,
    }
  }
}
