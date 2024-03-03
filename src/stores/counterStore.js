import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state() {
    return {
      count: 5
    }
  },

  actions: {
    increment() {
      if (this.remaining === 0) {
        return
      }

      this.count++
    }
  },

  getters: {
    remaining: (state) => 10 - state.count
  }
})
