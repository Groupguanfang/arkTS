/**
 * 判断当前位置是否在字符串或注释中
 * @param text 完整文本
 * @param index 当前位置
 * @returns 标记当前位置的状态：字符串、行注释、块注释或普通代码
 */
function getPositionContext(text: string, index: number):
{ inString: boolean, inLineComment: boolean, inBlockComment: boolean } {
  let inSingleQuote = false
  let inDoubleQuote = false
  let inTemplateLiteral = false
  let inLineComment = false
  let inBlockComment = false

  let backslashCount = 0
  let i = 0

  while (i < index) {
    const char = text[i]
    const nextChar = i < text.length - 1 ? text[i + 1] : ''

    // 如果在行注释中，只有换行才能结束
    if (inLineComment) {
      if (char === '\n') {
        inLineComment = false
      }
      i++
      continue
    }

    // 如果在块注释中，只有 */ 才能结束
    if (inBlockComment) {
      if (char === '*' && nextChar === '/') {
        inBlockComment = false
        i += 2
        continue
      }
      i++
      continue
    }

    // 处理转义字符
    if (char === '\\') {
      backslashCount++
      i++
      continue
    }

    // 如果前一个字符是转义符，且转义符数量是奇数，则跳过当前字符的处理
    if (backslashCount % 2 === 1) {
      backslashCount = 0
      i++
      continue
    }
    backslashCount = 0

    // 检测注释的开始
    if (!inSingleQuote && !inDoubleQuote && !inTemplateLiteral) {
      if (char === '/' && nextChar === '/') {
        inLineComment = true
        i += 2
        continue
      }
      if (char === '/' && nextChar === '*') {
        inBlockComment = true
        i += 2
        continue
      }
    }

    // 处理字符串的开始和结束
    if (char === '\'' && !inDoubleQuote && !inTemplateLiteral && !inLineComment && !inBlockComment) {
      inSingleQuote = !inSingleQuote
    }
    else if (char === '"' && !inSingleQuote && !inTemplateLiteral && !inLineComment && !inBlockComment) {
      inDoubleQuote = !inDoubleQuote
    }
    else if (char === '`' && !inSingleQuote && !inDoubleQuote && !inLineComment && !inBlockComment) {
      inTemplateLiteral = !inTemplateLiteral
    }

    i++
  }

  return {
    inString: inSingleQuote || inDoubleQuote || inTemplateLiteral,
    inLineComment,
    inBlockComment,
  }
}

/**
 * 判断当前行是否是注释行或位于注释中
 * @param index 当前位置
 * @param fullText 完整文本
 * @returns 是否是注释行
 */
export function isCommentLine(index: number, fullText: string): boolean {
  // 找到当前行的开始位置
  let lineStart = index
  while (lineStart > 0 && fullText[lineStart - 1] !== '\n') {
    lineStart--
  }

  // 获取从行首到当前位置的内容
  const lineContent = fullText.slice(lineStart, index)

  // 检查当前位置是否在块注释中
  const context = getPositionContext(fullText, lineStart)
  if (context.inBlockComment) {
    return true
  }

  // 检查是否有//注释
  const commentIndex = lineContent.indexOf('//')
  if (commentIndex === -1) return false

  // 检查//是否在字符串中或块注释中
  const commentContext = getPositionContext(fullText, lineStart + commentIndex)
  return !commentContext.inString && !commentContext.inBlockComment
}
