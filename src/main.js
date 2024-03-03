import './assets/main.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'
import Colada, { PiniaColadaPlugin } from 'colada-plugin'
import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)
pinia.use(PiniaColadaPlugin)
app.use(Colada)

app.mount('#app')
