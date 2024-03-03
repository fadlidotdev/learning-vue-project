<script setup>
import { onMounted, ref } from 'vue'
import TabbableTextarea from '@/components/TabbableTextarea.vue'

const comment = ref('')
</script>

<template>
  <main>
    <TabbableTextarea v-model="comment" style="width: 100%; height: 400px" />
  </main>
</template>
