import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import Notifications, { notify } from 'notiwind'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)
const pinia = createPinia()

pinia.use(({ store }) => {
  store.$router = markRaw(router)
  store.$notify = notify
})

app.use(createPinia())
app.use(Notifications)
app.use(router)

app.mount('#app')
