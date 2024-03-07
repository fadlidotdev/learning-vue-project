<script setup>
import { ref, Teleport, Transition } from 'vue'

const show = ref(false)

function open() {
  show.value = true
}

function close() {
  show.value = false
}
</script>

<template>
  <slot name="trigger" :open="open"><button @click="show = true">Open</button></slot>

  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-300"
      enter-from-class="opacity-0 scale-125"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0 scale-105"
    >
      <div v-if="show" class="fixed inset-0 bg-black/50 grid place-items-center">
        <div class="bg-white rounded p-4 pb-2 w-full max-w-sm">
          <div class="mb-2 font-medium text-sm">
            <slot name="header">default header</slot>
          </div>

          <div>
            <slot name="content">default content</slot>
          </div>

          <div class="border-t mt-4 pt-2 -mx-4 px-4">
            <slot name="footer" :close="close">
              <button @click="show = false">Close</button>
            </slot>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
