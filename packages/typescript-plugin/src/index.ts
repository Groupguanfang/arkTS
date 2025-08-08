import type * as ts from 'typescript'
import process from 'node:process'
import { ETSLanguagePlugin } from '@arkts/language-plugin'
import { createLanguageServicePlugin } from '@volar/typescript/lib/quickstart/createLanguageServicePlugin'

/**
 * 尝试解析环境变量 `__etsTypescriptPluginFeature`是否为JSON，如果解析失败则返回一个空对象。
 *
 * 这适用于在插件加载时获取配置或其他相关信息。
 */
function tryParseEnv(): Record<string, any> {
  try {
    return JSON.parse(process.env.__etsTypescriptPluginFeature || '{}')
  }
  catch (error) {
    console.error('Failed to parse __etsTypescriptPluginFeature:', error)
    return {}
  }
}

/**
 * ### 这个插件做了什么？
 *
 * 将传输过来的ohos SDK路径与当前打开的文件位置进行比对，
 * 如果当前打开的文件位置在ohos SDK路径下，则覆写compilerOptions
 * 让TS服务器将其作为一个`lib`来处理。
 *
 * ---
 *
 * ### 如何查看log？
 *
 * 点开一个`.ts`文件然后按 Ctrl + shift + P 输入`Typescript: Open TS Server Log`
 */
const plugin: ts.server.PluginModuleFactory = createLanguageServicePlugin((ts, info) => {
  const env = tryParseEnv()
  if (env?.lspOptions?.ohos?.sdkPath)
    info.config = env
  const sdkPath = info.config?.lspOptions?.ohos?.sdkPath
  const hmsSdkPath = info.config?.lspOptions?.ohos?.hmsSdkPath

  console.warn(`ETS typescript plugin loaded! sdkPath: ${sdkPath}, hmsSdkPath: ${hmsSdkPath}`)
  console.warn(`Current config: ${JSON.stringify(info.config)}`)

  // 如果没有传递这个配置，则不启用插件
  if (!info.config?.lspOptions?.ohos) {
    return { languagePlugins: [] }
  }

  return {
    languagePlugins: [
      ETSLanguagePlugin(ts, { sdkPaths: [sdkPath, hmsSdkPath].filter(Boolean) as string[], tsdk: info.config?.lspOptions?.typescript?.tsdk }),
    ],
  }
})

// eslint-disable-next-line no-restricted-syntax
export = plugin
