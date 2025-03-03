#!/usr/bin/env node
// eslint-disable-next-line node/prefer-global/process
if (process.argv.includes('--version')) {
  const pkgJSON = require('../package.json')
  console.log(`${pkgJSON.version}`)
}
else {
  require('../out/index.js')
}
