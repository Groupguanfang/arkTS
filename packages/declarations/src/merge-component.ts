import fs from 'node:fs'

export function mergeComponent() {
  const components = fs.readdirSync('ets/component').filter(file => file.endsWith('.d.ts'))

  const content = components.map((filename) => {
    return `/// <reference types="./component/${filename}" />`
  })

  if (!fs.existsSync('dist'))
    fs.mkdirSync('dist')
  fs.writeFileSync('dist/component-all.d.ts', content.join('\n'))

  for (const component of components) {
    const content = fs.readFileSync(`ets/component/${component}`, 'utf-8')
    const commonDTSRef = component === 'common.d.ts' ? '' : '/// <reference types="./common.d.ts" />'
    const enumsDTSRef = component === 'enums.d.ts' ? '' : '/// <reference types="./enums.d.ts" />'
    const unitsDTSRef = component === 'units.d.ts' ? '' : '/// <reference types="./units.d.ts" />'
    const common_ts_ets_apiDTSRef = component === 'common_ts_ets_api.d.ts' ? '' : '/// <reference types="./common_ts_ets_api.d.ts" />'
    const matrix2dDTSRef = component === 'matrix2d.d.ts' ? '' : '/// <reference types="./matrix2d.d.ts" />'
    fs.writeFileSync(`dist/component/${component}`, `// @ts-nocheck\n${commonDTSRef}\n${enumsDTSRef}\n${unitsDTSRef}\n${common_ts_ets_apiDTSRef}\n${matrix2dDTSRef}\n${content}`)
  }
}
