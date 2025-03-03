import type { loadTsdkByPath } from '@volar/language-server/node'

export interface ResolvedJsonModuleOptions {
  path: string
  containingFilePath: string
  tsdk: ReturnType<typeof loadTsdkByPath>
}

export function resolveJsonModule(options: ResolvedJsonModuleOptions): import('typescript').ResolvedModuleWithFailedLookupLocations {
  return options.tsdk.typescript.resolveModuleName(
    options.path,
    options.containingFilePath,
    {
      target: options.tsdk.typescript.ScriptTarget.Latest,
      module: options.tsdk.typescript.ModuleKind.ESNext,
      moduleResolution: options.tsdk.typescript.ModuleResolutionKind.Bundler,
      resolveJsonModule: true,
    },
    options.tsdk.typescript.sys,
  )
}
