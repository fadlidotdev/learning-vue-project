<script setup>
import TeamHeader from '@/components/Teams/TeamHeader.vue'
import TeamMembers from '@/components/Teams/TeamMembers.vue'
import TeamFooter from '@/components/Teams/TeamFooter.vue'
import { useTeamStore } from '@/stores/TeamStore'

const team = useTeamStore()

team.fill()

setTimeout(() => {
  team.spots = 10
}, 3000)
</script>

<template>
  <TeamHeader />

  <main>
    <TeamMembers />
  </main>

  <TeamFooter />
</template>
