import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['./src/index.ts'],
  outDir: './out',
  format: ['cjs', 'esm'],
  sourcemap: true,
  dts: true,
  clean: true,
  minify: true,
  external: [],
})