<script setup>
import { useTeamStore } from '@/stores/TeamStore'

const team = useTeamStore()
</script>

<template>
  <header class="flex items-center justify-between mb-4">
    <button
      type="button"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 disabled:bg-gray-400 disabled:cursor-not-allowed"
      :disabled="!team.spotsRemaining"
    >
      Add Member ({{ team.spotsRemaining }} Spots Left)
    </button>

    <div class="relative">
      <h2 class="font-semibold text-xl">{{ team.name }} Team</h2>

      <div
        class="absolute -top-1 -right-3 rounded-full w-5 h-5 opacity-50 text-xs text-white bg-blue-500 flex items-center justify-center"
      >
        {{ team.spots }}
      </div>
    </div>
  </header>
</template>
