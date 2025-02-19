import { replaceRange, toString } from 'ts-macro'

function extractStructs(input: string) {
  const structRegex = /(?<![_$[:alnum:]])(?:(?<=\.{3})|(?<!\.))(?:(\bexport)\s+)?(?:(\bdeclare)\s+)?\b(?:(abstract)\s+)?\b(struct)\b\s+\w+\s*{/g;
  const matches = [];

  let match;
  while ((match = structRegex.exec(input)) !== null) {
      const start = match.index;
      const structKeywordStart = match.index + match[0].indexOf('struct');
      const structKeywordEnd = structKeywordStart + 'struct'.length;
      let braceCount = 1;
      let i = structRegex.lastIndex;

      while (braceCount > 0 && i < input.length) {
          if (input[i] === '{') braceCount++;
          if (input[i] === '}') braceCount--;
          i++;
      }

      const end = i;
      const text = input.slice(start, end);
      matches.push({ start, end, text, structKeywordStart, structKeywordEnd });
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

function transformCallExpression(codes: import('ts-macro').Code[], ast: import('typescript').SourceFile, ts: typeof import('typescript')) {
  const fullText = toString(codes)
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
      replaceRange(codes, scopeEnd + 2, scopeEnd + 2, node.getText(ast))
    }
  }
}

export const etsPlugin = (ts: typeof import('typescript')): import('ts-macro').TsmLanguagePlugin => ({
  name: 'ets-plugin',
  enforce: 'pre' as const,
  resolveVirtualCode({ ast, codes }) {
    const structs = extractStructs(toString(codes))
    for (const struct of structs)
      replaceRange(codes, struct.structKeywordStart, struct.structKeywordEnd, 'class')

    transformCallExpression(codes, ast, ts)
  },
})