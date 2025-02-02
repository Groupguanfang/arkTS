import { CodeMapping, VirtualCode } from "@volar/language-core";
import MagicString from "magic-string";
import ts from "typescript";

export class EtsVirtualCode implements VirtualCode {
  id = "ets";
  mappings: CodeMapping[] = [];
  languageId = "ets";

  constructor(public snapshot: ts.IScriptSnapshot) {
    this.update(snapshot, this)
  }

  update(newSnapshot: ts.IScriptSnapshot, newCode: EtsVirtualCode) {
    const text = newSnapshot.getText(0, newSnapshot.getLength());
    const ms = new MagicString(text);
    const structs = extractStructs(text);
    for (const struct of structs) {
      const replacedText = replaceStructWithClass(struct.text)
      ms.overwrite(struct.start, struct.end, replacedText)
    }

    ms.append('\nimport {} from \'@arkts/declarations\'\n')
    const newMs = new MagicString(ms.toString())
    newCode.mappings = [
      {
        sourceOffsets: [0],
        generatedOffsets: [0],
        lengths: [newMs.length()],
        data: {
          completion: true,
          format: true,
          navigation: true,
          semantic: true,
          structure: true,
          // verification: true
        }
      }
    ]
    newCode.snapshot.getText = (start, end) => newMs.slice(start, end);
    newCode.snapshot.getLength = () => newMs.length();
    return newCode;
  }
}

function replaceStructWithClass(input: string): string {
  const structRegex = /(?<![_$[:alnum:]])(?:(?<=\.{3})|(?<!\.))(?:(\bexport)\s+)?(?:(\bdeclare)\s+)?\b(?:(abstract)\s+)?\b(struct)\b(?=\s+|\/[/*])/g;

  return input.replace(structRegex, (_match, exportKeyword, declareKeyword, abstractKeyword) => {
      const keywords = [exportKeyword, declareKeyword, abstractKeyword].filter(Boolean).join(' ');
      return `${keywords} class`;
  });
}

function extractStructs(input: string) {
  const structRegex = /(?<![_$[:alnum:]])(?:(?<=\.{3})|(?<!\.))(?:(\bexport)\s+)?(?:(\bdeclare)\s+)?\b(?:(abstract)\s+)?\b(struct)\b\s+\w+\s*{/g;
  const matches = [];

  let match;
  while ((match = structRegex.exec(input)) !== null) {
      const start = match.index;
      let braceCount = 1;
      let i = structRegex.lastIndex;

      while (braceCount > 0 && i < input.length) {
          if (input[i] === '{') braceCount++;
          if (input[i] === '}') braceCount--;
          i++;
      }

      const end = i;
      const text = input.slice(start, end);
      matches.push({ start, end, text });
  }

  return matches;
}