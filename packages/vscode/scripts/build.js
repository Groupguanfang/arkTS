const process = require('node:process')

require('esbuild').context({
  entryPoints: {
    client: './src/extension.ts',
    server: '../language-server/src/index.ts',
  },
  sourcemap: true,
  bundle: true,
  metafile: process.argv.includes('--metafile'),
  outdir: './dist',
  external: [
    'vscode',
    // AWS SDK 相关依赖（unzipper 的可选依赖）
    '@aws-sdk/client-s3',
    '@aws-sdk/s3-request-presigner',
    // 其他可能的外部依赖
    'tar',
    'unzipper',
    // Node.js 内置模块（确保不被打包）
    'fs',
    'path',
    'os',
    'crypto',
    'stream',
    'util',
    'events',
    'buffer',
    'url',
    'querystring',
    'child_process',
    // 一些可能存在的可选依赖
    'graceful-fs',
    'yauzl',
    'fstream',
    'node-gyp'
  ],
  format: 'cjs',
  platform: 'node',
  tsconfig: './tsconfig.json',
  define: { 'process.env.NODE_ENV': '"production"' },
  minify: process.argv.includes('--minify'),
  plugins: [
    {
      name: 'umd2esm',
      setup(build) {
        build.onResolve({ filter: /^(vscode-.*-languageservice|jsonc-parser)/ }, (args) => {
          const pathUmdMay = require.resolve(args.path, { paths: [args.resolveDir] })
          // Call twice the replace is to solve the problem of the path in Windows
          const pathEsm = pathUmdMay.replace('/umd/', '/esm/').replace('\\umd\\', '\\esm\\')
          return { path: pathEsm }
        })
      },
    },
    {
      name: 'external-optional-deps',
      setup(build) {
        // 将所有 AWS SDK 相关的模块标记为外部依赖
        build.onResolve({ filter: /^@aws-sdk\// }, () => {
          return { path: '', external: true }
        })
        
        // 处理其他可选依赖
        build.onResolve({ filter: /^(graceful-fs|yauzl|fstream)$/ }, () => {
          return { path: '', external: true }
        })
      },
    },
  ],
}).then(async (ctx) => {
  console.log('building...')
  if (process.argv.includes('--watch')) {
    await ctx.watch()
    console.log('watching...')
  }
  else {
    await ctx.rebuild()
    await ctx.dispose()
    console.log('finished.')
  }
}).catch((error) => {
  console.error('Build failed:', error)
  process.exit(1)
})