<script setup>
import { inject } from 'vue'

const profile = inject('profile')

setTimeout(() => {
  profile.name = 'Nova Julita'
}, 3000)
</script>

<template>
  <p>Welcome back, {{ profile.name }}</p>
</template>
