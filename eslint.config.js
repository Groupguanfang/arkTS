// @ts-check
import antfu from '@antfu/eslint-config'

export default antfu({
  rules: {
    'antfu/if-newline': 'off',
    'no-async-promise-executor': 'off',
    'jsonc/no-useless-escape': 'off',
    'no-console': 'off',
    'no-cond-assign': 'off',
  },
  ignores: [
    'sample/**/*',
    'packages/declarations/ets/**/*',
  ],
})
