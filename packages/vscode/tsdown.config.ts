import { createRequire } from 'node:module'
import path from 'node:path'
import process from 'node:process'
import { defineConfig, logger } from 'tsdown'

const require = createRequire(import.meta.url)
const isDev = process.env.NODE_ENV === 'development'

logger.info(`Current NODE_ENV: ${process.env.NODE_ENV}`)

export default defineConfig({
  entry: {
    'dist/client': './src/extension.ts',
    'dist/server': '../language-server/src/index.ts',
    'node_modules/ets-typescript-plugin/index': '../typescript-plugin/src/index.ts',
  },
  format: 'cjs',
  sourcemap: isDev,
  external: ['vscode', '@aws-sdk/client-s3'],
  tsconfig: './tsconfig.json',
  platform: 'node',
  clean: false,
  minify: !isDev,
  outDir: '.',
  env: {
    NODE_ENV: 'production',
  },
  inputOptions: {
    checks: {
      eval: false,
    },
  },
  dts: false,
  outputOptions: {
    chunkFileNames: `dist/[name].js`,
  },
  onSuccess: 'vite build',
  alias: {
    '@arkts/shared': path.join(process.cwd(), '../shared/src/index.ts'),
    '@arkts/shared/vscode': path.join(process.cwd(), '../shared/src/vscode.ts'),
    '@arkts/language-plugin': path.join(process.cwd(), '../language-plugin/src/index.ts'),
  },
  watch: isDev
    ? [
        './src',
        '../language-server/src',
        '../typescript-plugin/src',
        '../language-plugin/src',
        '../shared/src',
      ].map(p => path.join(process.cwd(), p))
    : false,
  plugins: [
    {
      name: 'umd2esm',
      resolveId: {
        filter: {
          id: /^(vscode-.*-languageservice|vscode-languageserver-types|jsonc-parser)$/,
        },
        handler(path, importer) {
          const pathUmdMay = require.resolve(path, { paths: [importer!] })
          // Call twice the replace is to solve the problem of the path in Windows
          let pathEsm = pathUmdMay
            .replace('/umd/', '/esm/')
            .replace('\\umd\\', '\\esm\\')

          if (pathEsm.includes('vscode-uri')) {
            pathEsm = pathEsm
              .replace('/esm/index.js', '/esm/index.mjs')
              .replace('\\esm\\index.js', '\\esm\\index.mjs')
          }

          return { id: pathEsm }
        },
      },
    },
  ],
})
