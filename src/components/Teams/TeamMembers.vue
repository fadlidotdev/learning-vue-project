<script setup>
import { useTeamStore } from '@/stores/TeamStore'
import TeamMember from './TeamMember.vue'

const team = useTeamStore()
</script>

<template>
  <div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-6 py-3">Name</th>
          <th scope="col" class="px-6 py-3">Email</th>
          <th scope="col" class="px-6 py-3">Status</th>
        </tr>
      </thead>
      <tbody>
        <TeamMember v-for="member in team.members" :member="member" :key="member.id" />
      </tbody>
    </table>
  </div>

  <p v-if="!team.spotsRemaining" class="text-right italic mt-2">
    There are no remaining team spots. Upgrade to add more.
  </p>
</template>
