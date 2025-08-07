<script setup lang="ts">
import { NFloatButton, NLog } from 'naive-ui'
import { nextTick, ref } from 'vue'
import { useConnectionStore } from '../composables/connection'

const connectionStore = useConnectionStore()
const lines = ref<string[]>([])

const logRef = ref<{ scrollTo: (options: { top?: number, position?: 'top' | 'bottom', silent?: boolean }) => void }>()
connectionStore.connection.getAdapter().onEvent((e) => {
  if (Array.isArray(e))
    return
  if (e.id === null && 'method' in e && e.method === 'hilog/log' && Array.isArray(e.params) && typeof e.params[0] === 'string') {
    lines.value.push(e.params[0])
    nextTick(() => (
      logRef.value?.scrollTo({
        position: 'bottom',
        silent: true,
      })
    ))
    if (lines.value.length > 1000)
      lines.value.shift()
  }
})
</script>

<template>
  <div :style="{ width: `100%`, height: `100%`, display: 'flex', flexDirection: 'column' }">
    <NFloatButton :right="0" :bottom="0" shape="circle">
      <div i-carbon-locked />
    </NFloatButton>
    <NLog ref="logRef" :lines trim />
  </div>
</template>
