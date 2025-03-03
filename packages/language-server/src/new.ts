import { nanoid } from 'nanoid'
import { replaceRange, toString } from 'ts-macro'

function extractStructs(input: string) {
  /**
   * From `typescript.tmLanguage.json` - `ClassDeclaration` - `begin`
   * @see https://github.com/microsoft/vscode/blob/e8c27bc34442a660e50e97331ef7ace6bc9fa9be/extensions/typescript-basics/syntaxes/TypeScript.tmLanguage.json#L1701
   */
  // eslint-disable-next-line regexp/no-unused-capturing-group, regexp/no-useless-assertions
  const structRegex = /(?<![_$[:alnum]\])(?:(?<=\.{3})|(?<!\.))(?:(\bexport)\s+)?(?:(\bdeclare)\s+)?\b(?:(abstract)\s+)?\b(struct)\b\s+(\w+)\s*\{/g
  const matches = []

  let match
  while ((match = structRegex.exec(input)) !== null) {
    const start = match.index
    const structKeywordStart = match.index + match[0].indexOf('struct')
    const structKeywordEnd = structKeywordStart + 'struct'.length

    const structNameStart = match.index + match[0].indexOf(match[5])
    const structNameEnd = structNameStart + match[5].length

    let braceCount = 1
    let i = structRegex.lastIndex
    const structBodyStart = i - 1 // Adjust to include the '{'

    while (braceCount > 0 && i < input.length) {
      if (input[i] === '{') braceCount++
      if (input[i] === '}') braceCount--
      i++
    }

    const structBodyEnd = i // The position after '}'
    const end = i
    const text = input.slice(start, end)

    // Determine if the struct is exported
    const isExport = !!match[1]

    matches.push({ start, end, text, structKeywordStart, structKeywordEnd, structNameStart, structNameEnd, structBodyStart, structBodyEnd, isExport })
  }

  return matches
}

function findClosestScopeEnd(leftBraceStartingPoint: number, sourceFile: import('typescript').SourceFile, ts: typeof import('typescript')): number {
  // 遍历 AST 节点
  let result: number | null = null
  ts.forEachChild(sourceFile, function visit(node) {
    if (node.kind === ts.SyntaxKind.Block) {
      // 如果节点是块级作用域（即大括号包裹的区域）
      const { pos, end } = node

      // 如果 leftBraceStartingPoint 位于这个块的范围内
      if (pos <= leftBraceStartingPoint && leftBraceStartingPoint < end) {
        result = end - 1 // 返回匹配的右大括号位置
      }
    }
    ts.forEachChild(node, visit) // 递归遍历 AST 的子节点
  })

  return result ?? -1 // 如果没有找到匹配的右大括号，返回 -1
}

function findNextCharExcludeWrapAndSpace(fullText: string, startIndex: number): [string, number] {
  for (let i = startIndex; i < fullText.length; i++) {
    if (fullText[i] === '\n' || fullText[i] === ' ') continue
    return [fullText[i], i]
  }
  return ['', startIndex]
}

function addLineBreakAfterCallExpression(fullText: string, codes: import('ts-macro').Code[]) {
  const matchesParentheses = fullText.matchAll(/\(([^)]*)\)/g)
  for (const match of matchesParentheses) {
    const index = match.index + match[0].length
    const [nextChar] = findNextCharExcludeWrapAndSpace(fullText, index)
    if (nextChar !== '{') continue
    replaceRange(codes, index, index, '\n')
  }
}

function transform(fullText: string, codes: import('ts-macro').Code[], ts: typeof import('typescript')) {
  const ast = ts.createSourceFile(`index.ts`, fullText, 99 satisfies typeof ts.ScriptTarget.Latest)
  ts.forEachChild(ast, node => walk(node, []))

  function walk(node: import('typescript').Node, parents: import('typescript').Node[]) {
    ts.forEachChild(node, child => walk(child, [...parents, node]))

    if (ts.isCallExpression(node)) {
      transformCallExpression(node)
    }
    else if (ts.isFunctionDeclaration(node)) {
      transformFunctionDeclaration(node)
    }
  }

  function transformFunctionDeclaration(node: import('typescript').FunctionDeclaration) {
    if (!node.body) return
    const [nextChar] = findNextCharExcludeWrapAndSpace(fullText, node.body.getStart(ast) + 1)
    if (nextChar !== '.') return
    replaceRange(codes, node.body.getStart(ast) + 1, node.body.getStart(ast) + 1, `new CustomComponent()`)
  }

  function transformCallExpression(callExpression: import('typescript').CallExpression) {
    // 首先，判断一个Call Expression后面是否跟着一个左大括号，如果不是，则不进行转换
    const [nextChar, nextCharIndex] = findNextCharExcludeWrapAndSpace(fullText, callExpression.getEnd())
    if (nextChar !== '{') return

    // 然后，找到这个左大括号对应的右大括号
    const scopeEnd = findClosestScopeEnd(nextCharIndex, ast, ts)
    const [nextScopeEndChar, nextScopeEndIndex] = findNextCharExcludeWrapAndSpace(fullText, scopeEnd + 1)
    if (nextScopeEndChar !== '.') return
    replaceRange(codes, nextScopeEndIndex, nextScopeEndIndex, callExpression.getText(ast))
  }
}

export function etsPlugin({ ts }: { ts: typeof import('typescript'), compilerOptions: import('typescript').CompilerOptions }): import('ts-macro').TsmLanguagePlugin {
  return {
    name: 'ets-plugin',
    enforce: 'pre' as const,
    resolveVirtualCode({ codes }) {
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
      // 修复js中`()`后不能有`{`的问题，解决方法很简单：在每个`()`后添加一个换行符
      addLineBreakAfterCallExpression(text, codes)
      // 提取结构体
      const structs = extractStructs(text)

      // 替换结构体名称
      for (const struct of structs) {
        // replaceRange(codes, struct.start, struct.structNameEnd, `const ${toString(codes).slice(struct.structNameStart - 1, struct.structNameEnd)} = ___defineStruct___(class `)
        // replaceRange(codes, struct.structBodyEnd, struct.structBodyEnd, ')\n')

        // get the raw struct name
        const structName = toString(codes).slice(struct.structNameStart - 1, struct.structNameEnd).trim()
        // generate a unique id for the struct
        const structNameId = nanoid(5).replace(/-/g, '_')
        // implements Partial<CustomComponent> to support custom component chain call
        replaceRange(codes, struct.structNameStart, struct.structNameEnd, `_${structNameId}_${structName} implements Partial<CustomComponent>`)
        // Replace the struct keyword to class
        replaceRange(codes, struct.structKeywordStart, struct.structKeywordEnd, `class`)
        // Add to the end of the struct
        replaceRange(codes, struct.end, struct.end, `${struct.isExport ? 'export' : ''} const ${structName} = ___defineStruct___(_${structNameId}_${structName});`)
      }

      // 转换
      transform(text, codes, ts)
    },
  }
}
