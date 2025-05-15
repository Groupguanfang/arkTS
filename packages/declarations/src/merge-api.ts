import fs from 'node:fs'
import path from 'node:path'
import fg from 'fast-glob'

function mergeAllApi() {
  const apis = fg.sync(['ets/api/**/*.d.ts', 'ets/api/**/*.d.ets'])

  if (!fs.existsSync('dist'))
    fs.mkdirSync('dist')
  if (!fs.existsSync('dist/api'))
    fs.mkdirSync('dist/api')

  for (const api of apis) {
    const content = fs.readFileSync(api, 'utf-8')
    const distContentPath = path.resolve('dist/api', api.replace('ets/api/', ''))
    if (!fs.existsSync(path.dirname(distContentPath)))
      fs.mkdirSync(path.dirname(distContentPath), { recursive: true })
    fs.writeFileSync(distContentPath, `// @ts-nocheck\n${content}`)
  }
}

function mergeAllKits() {
  const kits = fg.sync(['ets/kits/**/*.d.ts', 'ets/kits/**/*.d.ets'])
  for (const kit of kits) {
    const content = fs.readFileSync(kit, 'utf-8')
    const distContentPath = path.resolve('dist/kits', kit.replace('ets/kits/', '')).replace('.d.ts', '.d.ets')
    if (!fs.existsSync(path.dirname(distContentPath)))
      fs.mkdirSync(path.dirname(distContentPath), { recursive: true })
    fs.writeFileSync(distContentPath, `// @ts-nocheck\n${content}`)
  }
}

function mergeAllArkTS() {
  const arkTSes = fg.sync(['ets/arkts/**/*.d.ts', 'ets/arkts/**/*.d.ets'])
  for (const arkTS of arkTSes) {
    const content = fs.readFileSync(arkTS, 'utf-8')
    const distContentPath = path.resolve('dist/arkts', arkTS.replace('ets/arkts/', ''))
    if (!fs.existsSync(path.dirname(distContentPath)))
      fs.mkdirSync(path.dirname(distContentPath), { recursive: true })
    fs.writeFileSync(distContentPath, `// @ts-nocheck\n${content}`)
  }
}

function generateModuleDeclaration() {
  const apis = fs.readdirSync('ets/api')
    .filter(api => api.endsWith('.d.ts') || api.endsWith('.d.ets'))

  const paths: Record<string, string[]> = {}
  for (const api of apis) {
    const content = fs.readFileSync(path.resolve('ets/api', api), 'utf-8')
    if (!content.includes('export')) return
    paths[api.replace(/\.d\.ts|\.d\.ets$/, '')] = [`./api/${api}`]
  }

  const kits = fs.readdirSync('ets/kits').filter(file => file.endsWith('.d.ts') || file.endsWith('.d.ets'))
  for (const kit of kits) {
    const content = fs.readFileSync(path.resolve('ets/kits', kit), 'utf-8')
    if (!content.includes('export')) return
    paths[kit.replace(/\.d\.ts|\.d\.ets$/, '')] = [`./kits/${kit.replace(/\.d\.ts/, '.d.ets')}`]
  }

  const arkTSes = fs.readdirSync('ets/arkts').filter(file => file.endsWith('.d.ts') || file.endsWith('.d.ets'))
  for (const arkTS of arkTSes) {
    const content = fs.readFileSync(path.resolve('ets/arkts', arkTS), 'utf-8')
    if (!content.includes('export')) return
    paths[arkTS.replace(/\.d\.ts|\.d\.ets$/, '')] = [`./arkts/${arkTS}`]
  }

  fs.writeFileSync(path.resolve('dist/tsconfig.base.json'), JSON.stringify({
    compilerOptions: {
      paths,
      allowArbitraryExtensions: true,
    },
  }, null, 2))
}

export function mergeApi() {
  mergeAllApi()
  mergeAllKits()
  mergeAllArkTS()
  generateModuleDeclaration()
}
