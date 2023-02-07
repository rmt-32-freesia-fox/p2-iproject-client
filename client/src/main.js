import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { markRaw } from 'vue'

import App from './App.vue'
import router from './router'


const app = createApp(App)
const pinia = createPinia()
// adapt this based on where your router is

pinia.use(({ store }) => {
  store.router = markRaw(router)
})


app.use(pinia)
app.use(router)

app.mount('#app')
