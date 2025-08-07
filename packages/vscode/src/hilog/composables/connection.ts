import { createConnection } from '@arkts/headless-jsonrpc'
import { createVSCodeBrowserWindowAdapter } from '@arkts/headless-jsonrpc/adapter-vscode-browser-window'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useConnectionStore = defineStore('hilog', () => {
  const connection = createConnection({
    adapter: createVSCodeBrowserWindowAdapter(),
  })
  connection.listen()

  /** -t */
  const type = ref<'app' | 'core' | 'init' | 'kmsg' | undefined>('app')
  /** -L */
  const level = ref<'D' | 'I' | 'W' | 'E' | 'F' | undefined>(undefined)
  /** -D */
  const domain = ref<string | undefined>(undefined)
  /** -T */
  const tag = ref<string | undefined>(undefined)
  /** -P */
  const pid = ref<number | undefined>(undefined)
  /** -e */
  const regex = ref<string | undefined>(undefined)

  const argumentString = computed(() => {
    const args = []
    if (type.value)
      args.push(`-t=${type.value}`)
    if (level.value)
      args.push(`-L=${level.value}`)
    if (domain.value)
      args.push(`-D=${domain.value}`)
    if (tag.value)
      args.push(`-T=${tag.value}`)
    if (pid.value)
      args.push(`-P=${pid.value}`)
    if (regex.value)
      args.push(`-e=${regex.value}`)
    return args.join(' ')
  })

  return {
    connection,
    type,
    level,
    domain,
    tag,
    pid,
    regex,
    argumentString,
  }
})
