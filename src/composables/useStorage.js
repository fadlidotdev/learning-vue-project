import { ref, watch } from 'vue'

export function useStorage(key, initialValue) {
  let storedValue = read()
  let state = ref()

  if (storedValue) {
    state.value = storedValue
  }

  write()

  // Watch effect ini gabungan dari watch dan onMounted
  // and also deep check
  // watchEffect(() => {
  //   write()
  // })

  // onMounted(() => {
  //   write()
  // })

  watch(
    state,
    () => {
      write()
    },
    { deep: true }
  )

  function read() {
    const storedValue = localStorage.getItem(key) || initialValue

    try {
      return JSON.parse(storedValue)
    } catch (err) {
      return storedValue
    }
  }

  function write() {
    if (!state.value) {
      localStorage.removeItem(key)
    } else {
      const parsedValue =
        typeof state.value === 'object' ? JSON.stringify(state.value) : state.value

      localStorage.setItem(key, parsedValue)
    }
  }

  return state
}
