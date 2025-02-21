import { replaceRange, toString } from 'ts-macro'
import { nanoid } from 'nanoid';

function extractStructs(input: string) {
  const structRegex = /(?<![_$[:alnum:]])(?:(?<=\.{3})|(?<!\.))(?:(\bexport)\s+)?(?:(\bdeclare)\s+)?\b(?:(abstract)\s+)?\b(struct)\b\s+(\w+)\s*{/g;
  const matches = [];

  let match;
  while ((match = structRegex.exec(input)) !== null) {
      const start = match.index;
      const structKeywordStart = match.index + match[0].indexOf('struct');
      const structKeywordEnd = structKeywordStart + 'struct'.length;
      
      const structNameStart = match.index + match[0].indexOf(match[5]);
      const structNameEnd = structNameStart + match[5].length;

      let braceCount = 1;
      let i = structRegex.lastIndex;
      const structBodyStart = i - 1; // Adjust to include the '{'

      while (braceCount > 0 && i < input.length) {
          if (input[i] === '{') braceCount++;
          if (input[i] === '}') braceCount--;
          i++;
      }

      const structBodyEnd = i; // The position after '}'
      const end = i;
      const text = input.slice(start, end);
      matches.push({ start, end, text, structKeywordStart, structKeywordEnd, structNameStart, structNameEnd, structBodyStart, structBodyEnd });
  }

  return matches;
}

function findClosestScopeEnd(fullText: string, blockStart: number): number {
  let braceCount = 1
  let i = 0
  let blockBraceCount: number | null = null
  while (braceCount > 0 && i < fullText.length) {
    if (i === blockStart) {
      blockBraceCount = braceCount
    }

    if (fullText[i] === '{') braceCount++
    if (fullText[i] === '}') {
      braceCount--
      if (blockBraceCount === braceCount) return i
    }
    i++
  }
  return i
}

function findNextCharExcludeWrapAndSpace(fullText: string, index: number): string {
  for (let i = index; i < fullText.length; i++) {
    if (fullText[i] === '\n' || fullText[i] === ' ') continue
    return fullText[i]
  }
  return ''
}

function transform(fullText: string, codes: import('ts-macro').Code[], ast: import('typescript').SourceFile, ts: typeof import('typescript')) {
  ts.forEachChild(ast, (node) => walk(node, []))
  function walk(node: import('typescript').Node, parents: import('typescript').Node[]) {
    ts.forEachChild(node, (child) => walk(child, [...parents, node]))

    if (ts.isCallExpression(node)) {
      const nextChar = findNextCharExcludeWrapAndSpace(fullText, node.getEnd())
      if (nextChar !== '{') return
      replaceRange(codes, node.getEnd(), node.getEnd(), '\n')
      const scopeEnd = findClosestScopeEnd(fullText, node.getEnd())
      const nextScopeEndChar = findNextCharExcludeWrapAndSpace(fullText, scopeEnd + 1)
      if (nextScopeEndChar !== '.') return
      replaceRange(codes, scopeEnd + 1, scopeEnd + 1, node.getText(ast))
    }

    if (ts.isFunctionDeclaration(node)) {
      if (!node.body) return
      const nextChar = findNextCharExcludeWrapAndSpace(fullText, node.body.getStart(ast) + 1)
      if (nextChar !== '.') return
      replaceRange(codes, node.body.getStart(ast) + 1, node.body.getStart(ast) + 1, `new CustomComponent()`)
    }
  }
}

export const etsPlugin = ({ ts }: { ts: typeof import('typescript'), compilerOptions: import('typescript').CompilerOptions }): import('ts-macro').TsmLanguagePlugin => {
  return {
    name: 'ets-plugin',
    enforce: 'pre' as const,
    resolveVirtualCode({ ast, codes }) {
      // codes.push([
      //   `\nimport '@arkts/declarations';`,
      //   `\nimport '@arkts/declarations';`,
      //   0,
      //   {
      //     completion: true,
      //     format: true,
      //     navigation: true,
      //     semantic: true,
      //     structure: true,
      //     verification: true
      //   },
      // ])
      // Add a placeholder to the end of the file
      codes.push('\n\n\n/** placeholder end */\n')
      // 获取完整的文本
      const text = toString(codes)
      // 转换
      transform(text, codes, ast, ts)
      // 提取结构体
      const structs = extractStructs(text)


      // 替换结构体名称
      for (const struct of structs) {
        // replaceRange(codes, struct.start, struct.structNameEnd, `const ${toString(codes).slice(struct.structNameStart - 1, struct.structNameEnd)} = ___defineStruct___(class `)
        // replaceRange(codes, struct.structBodyEnd, struct.structBodyEnd, ')\n')

        // get the raw struct name
        const structName = toString(codes).slice(struct.structNameStart - 1, struct.structNameEnd).trim()
        // generate a unique id for the struct
        const structNameId = nanoid().replace(/-/g, '_')
        // implements Partial<CustomComponent> to support custom component chain call
        replaceRange(codes, struct.structNameStart, struct.structNameEnd, `_${structNameId}_${structName} implements Partial<CustomComponent>`)
        // Replace the struct keyword to class
        replaceRange(codes, struct.structKeywordStart, struct.structKeywordEnd, `class`)
        // Add to the end of the struct
        replaceRange(codes, struct.end, struct.end, `export var ${structName} = ___defineStruct___(_${structNameId}_${structName});`)
      }
    },
  }
}
