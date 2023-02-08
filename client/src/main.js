import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

import vue3GoogleLogin from 'vue3-google-login'
import mdiVue from 'mdi-vue/v3'
import * as mdijs from '@mdi/js'

const app = createApp(App)
const pinia = createPinia()

pinia.use(({ store }) => {
  store.router = markRaw(router)
})

app.use(mdiVue, {
  icons: mdijs
})

app.use(vue3GoogleLogin, {
  clientId: '338857378147-i9iovlptidjlqpfc0pn3cfdg2dnpf6uo.apps.googleusercontent.com'
})

app.use(pinia)
app.use(router)

app.mount('#app')
