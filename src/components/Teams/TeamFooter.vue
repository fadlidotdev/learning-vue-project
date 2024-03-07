<script setup>
import { useTeamStore } from '@/stores/TeamStore'

const team = useTeamStore()
</script>

<template>
  <footer class="p-4 text-center bg-gray-200 mt-4 rounded">
    <span class="font-bold">{{ team.name }} - {{ team.spots }} Member Team</span>
  </footer>
</template>
