import { nanoid } from 'nanoid'
import { replaceRange, toString } from 'ts-macro'
import { isCommentLine } from './comment'

interface Position {
  start: number
  end: number
}

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
    if (fullText[i] === '\r' || fullText[i] === '\n' || fullText[i] === ' ') continue
    return [fullText[i], i]
  }
  return ['', startIndex]
}

function addLineBreakAfterCallExpression(fullText: string, codes: import('ts-macro').Code[], positions: Position[]) {
  const matchesParentheses = fullText.matchAll(/\(([^)]*)\)/g)
  for (const match of matchesParentheses) {
    const index = match.index + match[0].length
    const [nextChar] = findNextCharExcludeWrapAndSpace(fullText, index)
    if (nextChar !== '{') continue
    // 如果这个当前位置在结构体中，而且当前行开头不是`//`，则添加换行符
    if (positions.some(s => s.start <= index && s.end >= index) && !isCommentLine(index, fullText)) {
      replaceRange(codes, index, index, '\n')
    }
  }
}

function transformCallExpressionWithBlock(fullText: string, codes: import('ts-macro').Code[], ts: typeof import('typescript'), ast: import('typescript').SourceFile) {
  ts.forEachChild(ast, node => walk(node, []))

  function walk(node: import('typescript').Node, parents: import('typescript').Node[]) {
    ts.forEachChild(node, child => walk(child, [...parents, node]))

    if (ts.isCallExpression(node)) {
      transformCallExpression(node)
    }
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

interface FirstLevelFunctionDeclarationInfo {
  position: Position
  decoratorPosition: Position
  decoratorText: string
}

// 提取一层的所有函数声明的开始和结束位置
function getFirstLevelFunctionDeclarationPositions(node: import('typescript').FunctionDeclaration, ast: import('typescript').SourceFile): FirstLevelFunctionDeclarationInfo[] {
  const infos: FirstLevelFunctionDeclarationInfo[] = []

  const currentNodeStart = node.getStart(ast)
  const fnDeclarationText = ast.getFullText(ast).slice(currentNodeStart, node.getEnd())
  const functionKeywordStart = currentNodeStart + fnDeclarationText.indexOf('function')

  infos.push({
    position: {
      start: currentNodeStart,
      end: node.getEnd(),
    },
    decoratorPosition: {
      start: currentNodeStart,
      end: functionKeywordStart,
    },
    decoratorText: ast.getFullText(ast).slice(currentNodeStart, functionKeywordStart),
  })
  return infos
}

// 处理装饰器的替换
function replaceDecoratorAtSymbol(codes: import('ts-macro').Code[], positions: FirstLevelFunctionDeclarationInfo[]) {
  for (const info of positions) {
    const decoratorRegex = /@[\w$]+\s*(?:\([^)]*\))?/g
    let match
    while ((match = decoratorRegex.exec(info.decoratorText)) !== null) {
      // 如果匹配到装饰器，则将`@`替换为空格
      replaceRange(
        codes,
        info.decoratorPosition.start + match.index,
        info.decoratorPosition.start + match.index + 1,
        '',
      )
      replaceRange(
        codes,
        info.decoratorPosition.start + match.index + match[0].length,
        info.decoratorPosition.start + match.index + match[0].length,
        '\n',
      )
    }
  }
}

function transformFunctionDeclaration(node: import('typescript').FunctionDeclaration, fullText: string, codes: import('ts-macro').Code[], ast: import('typescript').SourceFile, mixedType?: string) {
  if (!node.body) return
  const start = node.body.getStart(ast) + 1
  const [nextChar] = findNextCharExcludeWrapAndSpace(fullText, start)
  if (nextChar !== '.') return
  replaceRange(codes, start, start, `((new CustomComponent()) as ${mixedType ? `(CustomComponent & ${mixedType})` : 'CustomComponent'})`)
}

function find$$thisMatches(str: string): Position[] {
  const regex = /\$\$this/g // 正则表达式匹配$$this，注意转义$
  const matches = []
  let match

  while ((match = regex.exec(str)) !== null) {
    const start = match.index
    const end = start + match[0].length - 1 // 计算结束索引
    matches.push({ start, end })
  }

  return matches
}

export function etsPlugin({ ts }: { ts: typeof import('typescript'), compilerOptions: import('typescript').CompilerOptions }): import('ts-macro').TsmLanguagePlugin {
  return {
    name: 'ets-plugin',
    enforce: 'pre' as const,
    resolveVirtualCode({ ast, codes, filePath }) {
      // Add a placeholder to the end of the file
      codes.push('\n\n\n/** placeholder end */\n')
      // 获取完整的文本
      const text = toString(codes)
      // 提取结构体
      const structs = extractStructs(text)
      // 查找所有的$$this
      const $$thisItems = find$$thisMatches(text)

      const fullFnDeclarationInfo: FirstLevelFunctionDeclarationInfo[] = []
      ts.forEachChild(ast, (node) => {
        if (!ts.isFunctionDeclaration(node)) return
        // 提取一层的所有函数声明的开始和结束位置
        const firstLevelFunctionDeclarationPositions = getFirstLevelFunctionDeclarationPositions(node, ast)
        fullFnDeclarationInfo.push(...firstLevelFunctionDeclarationPositions)

        // 替换函数装饰器：
        // 遍历每个装饰器，将开头的`@`删掉，并在后方插入一个换行符
        // 这样简单改一下range，就能完美实现函数装饰器
        replaceDecoratorAtSymbol(codes, firstLevelFunctionDeclarationPositions)
        // 处理@Extend装饰器，提取出第一个参数, 并调用transformFunctionDeclaration
        const extendRegex = /@Extend\(([^)]*)\)/g
        for (const info of firstLevelFunctionDeclarationPositions) {
          const matchResult = extendRegex.exec(info.decoratorText)
          if (matchResult) {
            const firstArgument = matchResult[1]
            transformFunctionDeclaration(node, text, codes, ast, `ReturnType<typeof ${firstArgument}>`)
          }
          else {
            transformFunctionDeclaration(node, text, codes, ast)
          }
        }
      })

      // 替换结构体名称
      for (const struct of structs) {
        // replaceRange(codes, struct.start, struct.structNameEnd, `const ${toString(codes).slice(struct.structNameStart - 1, struct.structNameEnd)} = ___defineStruct___(class `)
        // replaceRange(codes, struct.structBodyEnd, struct.structBodyEnd, ')\n')

        // get the raw struct name
        const originalStructName = text.slice(struct.structNameStart - 1, struct.structNameEnd).trim()
        // generate a unique id for the struct
        const structNameId = nanoid(5).replace(/-/g, '_')
        const transformStructName = `_${structNameId}_${originalStructName}`
        // implements Partial<CustomComponent> to support custom component chain call
        replaceRange(codes, struct.structNameStart, struct.structNameEnd, `${transformStructName} extends CustomComponent`)
        // Replace the struct keyword to class
        replaceRange(codes, struct.structKeywordStart, struct.structKeywordEnd, `class`)
        // Add to the end of the struct
        replaceRange(codes, struct.end, struct.end, `\n/** Go to this \`${originalStructName}\` component definition: {@linkcode ${transformStructName}} */\n${struct.isExport ? 'export' : ''} declare var ${originalStructName}: typeof ${transformStructName} & { (props?: Omit<Partial<${transformStructName}>, keyof CustomComponent>): ${transformStructName}; new (props?: Omit<Partial<${transformStructName}>, keyof CustomComponent>): ${transformStructName}; };\n${struct.isExport ? 'export' : ''} interface ${originalStructName} extends ${transformStructName} {}\n`)
      }

      // 替换所有的`$$this`为`  this` （两个空格子 + this）
      for (const $$thisItem of $$thisItems) {
        replaceRange(codes, $$thisItem.start, $$thisItem.start + 2, '  ')
      }

      // 转换
      transformCallExpressionWithBlock(text, codes, ts, ast)

      // 修复js中`()`后不能有`{`的问题，解决方法很简单：在每个`()`后添加一个换行符
      // 而限制是，必须保证是在一级函数声明 和 结构体 的范围内，其他地方的不受影响
      addLineBreakAfterCallExpression(text, codes, [
        ...structs,
        ...fullFnDeclarationInfo.map(info => info.position),
      ])

      if (filePath.endsWith('.d.ets'))
        codes.unshift(`\n// @ts-nocheck\n`)
    },
  }
}
