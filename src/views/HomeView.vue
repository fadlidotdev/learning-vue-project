<script>
import TheWelcome from '../components/TheWelcome.vue'
import flash from '@/mixins/flash'

export default {
    components: {
        TheWelcome
    },
    mixins: [flash]
}
</script>

<template>
    <main>
        <TheWelcome />

        <button @click="flash('Flash from homepage!')">Click me!</button>
    </main>
</template>
