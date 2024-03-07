import { defineStore } from 'pinia'

export const useTeamStore = defineStore('team-store', {
  state: () => ({
    name: '',
    spots: 0,
    members: []
  }),

  getters: {
    spotsRemaining(state) {
      return state.spots - state.members.length
    }
  },

  actions: {
    async fill() {
      const r = await import('@/team.json')

      this.$state = r.default
    }
  }
})
