<script setup>
import { ref } from 'vue';

let food = ref(localStorage.getItem('food'))
let age = ref(localStorage.getItem('age'))

function write(key, value) {
    if (!value) {
        localStorage.removeItem(key)
    } else {
        localStorage.setItem(key, value)
    }
}
</script>

<template>
    <main>
        <p>What is your favorite food: </p>
        <input type="text" v-model="food" @input="write('food', food)">

        <p>What is your age?</p>
        <input type="text" v-model="age" @input="write('age', age)">
    </main>
</template>
