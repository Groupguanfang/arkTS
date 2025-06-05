import fs from 'node:fs'

export function mergeComponent(): void {
  const components = fs.readdirSync('ets/component').filter(file => file.endsWith('.d.ts') || file.endsWith('.d.ets'))

  const content = components.map((filename) => {
    return `/// <reference path="./component/${filename}" />`
  })

  if (!fs.existsSync('dist/component'))
    fs.mkdirSync('dist/component', { recursive: true })
  fs.writeFileSync('dist/component-all.d.ts', content.join('\n'))

  for (const component of components) {
    const content = fs.readFileSync(`ets/component/${component}`, 'utf-8')
    const commonDTSRef = component === 'common.d.ts' ? '' : '/// <reference path="./common.d.ts" />'
    const enumsDTSRef = component === 'enums.d.ts' ? '' : '/// <reference path="./enums.d.ts" />'
    const unitsDTSRef = component === 'units.d.ts' ? '' : '/// <reference path="./units.d.ts" />'
    const common_ts_ets_apiDTSRef = component === 'common_ts_ets_api.d.ts' ? '' : '/// <reference path="./common_ts_ets_api.d.ts" />'
    const matrix2dDTSRef = component === 'matrix2d.d.ts' ? '' : '/// <reference path="./matrix2d.d.ts" />'
    fs.writeFileSync(`dist/component/${component}`, `// @ts-nocheck\n${commonDTSRef}\n${enumsDTSRef}\n${unitsDTSRef}\n${common_ts_ets_apiDTSRef}\n${matrix2dDTSRef}\n${content}`)
  }
}
