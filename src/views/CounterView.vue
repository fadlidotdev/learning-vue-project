<script setup>
import { useCounterStore } from '@/stores/CounterStore.js'

const counter = useCounterStore()
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold">{{ counter.count }}</h1>
    <button @click="counter.increment()">Increment ({{ counter.remaining }} remainings)</button>
  </div>
</template>
