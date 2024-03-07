<script setup>
import Modal from '@/components/Modal.vue'
import { useTeamStore } from '@/stores/TeamStore'

const team = useTeamStore()
</script>

<template>
  <header class="flex items-center justify-between mb-4">
    <Modal>
      <template #trigger="{ open }">
        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 disabled:bg-gray-400 disabled:cursor-not-allowed"
          :disabled="!team.spotsRemaining"
          @click="open"
        >
          Add Member ({{ team.spotsRemaining }} Spots Left)
        </button>
      </template>

      <template #header> Add Member </template>

      <template #content>
        <p class="mb-2">Input new member here</p>
        <input class="border rounded p-1 px-2 w-full text-sm" placeholder="Full Name" />
      </template>

      <template #footer="{ close }">
        <button class="bg-gray-200 text-xs rounded-lg py-1.5 px-3 ml-auto block" @click="close">
          Close
        </button>
      </template>
    </Modal>

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
