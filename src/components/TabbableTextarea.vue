<script setup>
const emit = defineEmits(['update:modelValue'])

defineProps({
  modelValue: String
})

function onTabPressed(e) {
  const textarea = e.target

  const val = textarea.value,
    start = textarea.selectionStart,
    end = textarea.selectionEnd

  textarea.value = val.substring(0, start) + '\t' + val.substring(end)

  textarea.selectionStart = start + 1
  textarea.selectioEnd = start + 1
}
</script>

<template>
  <textarea
    v-text="modelValue"
    @keydown.tab.prevent="onTabPressed"
    @keyup="emit('update:modelValue', $event.target.value)"
  />
</template>
