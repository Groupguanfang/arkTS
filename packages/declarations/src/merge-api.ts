import fg from 'fast-glob'
import fs from 'node:fs'
import path from 'node:path'
export function mergeApi() {
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
