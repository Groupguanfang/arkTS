<script setup lang="ts">
import Logview from './components/logview.vue'
</script>

<template>
  <div>
    <Logview />
  </div>
</template>

<style>
select {
  border: 1px solid var(--vscode-editorHoverWidget-border);
  background-color: var(--vscode-editorHoverWidget-background);
  color: var(--vscode-editorHoverWidget-foreground);
  text-align: left;
  padding-right: 10px;
  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 2px;
  border-radius: 4px;
}

select option {
  color: var(--vscode-editorHoverWidget-foreground);
  text-align: left;
}
</style>
