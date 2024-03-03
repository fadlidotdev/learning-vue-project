<script setup>
import { defineProps } from 'vue'
const { profile } = defineProps({
  profile: Object
})
</script>

<template>
  <p>Welcome back, {{ profile.name }}</p>
</template>
