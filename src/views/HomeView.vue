<script setup>

import { useStorage } from '@/composables/useStorage'

let food = useStorage('food', 'Nasi Goreng')
let age = useStorage('age', 26)
let obj = useStorage('obj', { one: 'one' })

setTimeout(() => {
    obj.value.one = 'CHANGED'
}, 3000)


</script>

<template>
    <main>
        <p>What is your favorite food: </p>
        <input type="text" v-model="food">

        <p>What is your age?</p>
        <input type="text" v-model="age">
    </main>
</template>
