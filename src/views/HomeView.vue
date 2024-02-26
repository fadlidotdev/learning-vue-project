<script>
import TheWelcome from '../components/TheWelcome.vue'
import { useFlash } from '@/composables/useFlash'
export default {
    components: {
        TheWelcome
    },
    setup() {
        const { flash } = useFlash()

        return { flash }
    }
}
</script>

<template>
    <main>
        <TheWelcome />

        <button @click="flash('Info', 'Flash from homepage!', 'info')">Click me!</button>
    </main>
</template>
