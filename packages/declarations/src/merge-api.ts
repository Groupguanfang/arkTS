import fg from 'fast-glob'
import fs from 'node:fs'
import path from 'node:path'

function mergeAllApi() {
  const apis = fg.sync('ets/api/**/*.d.ts')

  if (!fs.existsSync('dist'))
    fs.mkdirSync('dist')
  if (!fs.existsSync('dist/api'))
    fs.mkdirSync('dist/api')

  for (const api of apis) {
    const content = fs.readFileSync(api, 'utf-8')
    const distContentPath = path.resolve('dist/api', api.replace('ets/api/', ''))
    if (!fs.existsSync(path.dirname(distContentPath)))
      fs.mkdirSync(path.dirname(distContentPath), { recursive: true })
    fs.writeFileSync(distContentPath, content)
  }
}

function mergeAllKits() {
  const kits = fg.sync('ets/kits/**/*.d.ts')
  for (const kit of kits) {
    const content = fs.readFileSync(kit, 'utf-8')
    const distContentPath = path.resolve('dist/kits', kit.replace('ets/kits/', ''))
    if (!fs.existsSync(path.dirname(distContentPath)))
      fs.mkdirSync(path.dirname(distContentPath), { recursive: true })
    fs.writeFileSync(distContentPath, content)
  }
}

function generateModuleDeclaration() {
  const apis = fs.readdirSync('ets/api')
    .filter(api => api.endsWith('.d.ts'))

  const paths: Record<string, string[]> = {}
  for (const api of apis) {
    const content = fs.readFileSync(path.resolve('ets/api', api), 'utf-8')
    if (!content.includes('export')) return
    paths[api.replace('.d.ts', '')] = [`./api/${api}`]
  }

  const kits = fs.readdirSync('ets/kits').filter(file => file.endsWith('.d.ts'))
  for (const kit of kits) {
    const content = fs.readFileSync(path.resolve('ets/kits', kit), 'utf-8')
    if (!content.includes('export')) return
    paths[kit.replace('.d.ts', '')] = [`./kits/${kit}`]
  }

  fs.writeFileSync(path.resolve('dist/tsconfig.base.json'), JSON.stringify({
    compilerOptions: {
      paths: paths,
      allowArbitraryExtensions: true
    }
  }, null, 2))
}

export function mergeApi() {
  mergeAllApi()
  mergeAllKits()
  generateModuleDeclaration()
}
