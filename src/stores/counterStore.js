import { reactive } from 'vue'

export const counter = reactive({
  count: 5,

  increment() {
    if (this.count >= 10) {
      return
    }

    this.count++
  }
})
