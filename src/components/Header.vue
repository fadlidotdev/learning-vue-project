<script setup>
import { defineProps } from 'vue'
import Profile from './Profile.vue'

const { profile } = defineProps({
  profile: Object
})
</script>

<template>
  <Profile :profile="profile" />
</template>
