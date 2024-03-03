<script setup>
import { counter } from '@/stores/counterStore.js'
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold">{{ counter.count }}</h1>
    <button @click="counter.increment()">Increment</button>
  </div>
</template>
