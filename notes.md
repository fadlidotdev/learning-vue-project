## State Management

Adalah suatu solusi untuk _props drilling_

### Dependency Injection with Provide and Inject

Opsi pertama adalah dengan menggunakan `provide` dan `inject`.

```
// Parent component
import { provide } from 'vue'

provide('name', 'value')
```

`provide` berfungsi untuk menyediakan data literal ataupun reaktif terhadap _child components_ dari komponen penyedianya.

```
import { inject } from 'vue'

let name = inject('name')
```

`inject` berfungsi untuk mengonsumsi data yang disediakan oleh `provide` barusan.

Untuk menghindari perubahan data reaktif yang menyulitkan untuk dicari, gunakan `provide` bersamaan dengan fungsi untuk mengubah data nya.

```
import { provide } from 'vue'

provide('cart', {
  count: 0,
  updateCount: (value) => count + value
})
```

### Store State in an External File

Opsi kedua adalah dengan meletakkan nya di file terpisah.

```
// stores/cartStore.js

export const quiz = reactive({
  name: 'My First Quiz',
  questions: [],
})
```

Buat terlebih dahulu store untuk menyimpan data kita.

```
import { quiz } from '@/stores/quizStore.js'

console.log(quiz.name)
```

Gunakan store tersebut dimanapun yang kita inginkan dengan meng-_import_ store tersebut.

Sama halnya dengan opsi sebelumnya, Vue tidak menyarankan untuk mengubah atau istilahnya _mutating_ state secara langsung.

````
// stores/counterStore.js

export const counter = reactive({
  count: 0
})

// views/CounterView.vue
<script setup>
import { counter } from '@/stores/counterStore.js'
</script>

<template>
<h1>Counter: {{counter.count}</h1>
<button @click="counter.count++">Increment</button>
</template>
```
Hal ini dapat membuat kita akan kesulitan ketika melakukan _debugging_ atas perubahan yang terjadi pada _state_ karena setiap pengguna _state_ tersebut dapat mengubah nya secara langsung.

Solusinya adalah dengan membuat _action_ atau _method_ yang berguna untuk melakukan perubahan _state_ agar perubahan hanya terjadi di satu tempat.
````

// stores/counterStore.js

export const counter = reactive({
count: 0

increment() {
if (this.count >= 10) {
return
}

    this.count++

}
})

// views/CounterView.vue

<script setup>
import { counter } from '@/stores/counterStore.js'
</script>

<template>
<h1>Counter: {{counter.count}</h1>
<button @click="counter.increment()">Increment</button>
</template>
```

### Pinia

Kedua opsi diatas kurang cocok untuk state management yang kompleks dimana kita ingin tahu:

- Bagaimana jika state berubah namun kita tidak tahu trigger nya ada dimana
- Kita ingin melakukan _side-effects_ ketika state mengalami perubahan seperti memperbarui _localStorage_ ataupun melakukan _fetching_ data ke API

Pinia merupakan dedicated tools _state management_ pada Vue. Berguna untuk mengatasi state management yang kompleks. Pinia juga didukung oleh Vue Devtools.

```
npm install pinia
```

Setelah instalasi, konfigurasikan `Pinia` pada `main.js`.

```
import { createPinia } from 'pinia'

// ...
app.use(createPinia())
// ...
```

Buat store yang diinginkan. Berikut beberapa _best practice_ nya:

- Penamaan `CounterStore.js`
- Penamaan store variable nya mirip seperti composable functions, `useCounterStore`

Pinia terdiri dari:

- State => data
- Actions => methods
- Getters => computed

```
// stores/CounterStore
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
```

Cara Penggunaan:

```
<script setup>
import { useCounterStore } from '@/stores/CounterStore.js'

const counter = useCounterStore()
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold">{{ counter.count }}</h1>
    <button @click="counter.increment()">Increment ({{ counter.remaining }} remainings)</button>
  </div>
</template>
```

Untuk mengaktifkan fitur _Time Travel_ pinia, kita memerlukan _package_ tambahan yakni **colada-plugin**

```
// main.js
import Colada, { PiniaColadaPlugin } from 'colada-plugin'
...

const pinia = createPinia()

app.use(pinia)
pinia.use(PiniaColadaPlugin)
app.use(Colada)

...
```

## Case Study: Team Dashboard

## Build Modal Component

## Transition

## Teleport
