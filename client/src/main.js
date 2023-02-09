import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { markRaw } from 'vue'

import App from './App.vue'
import router from './router'
import vue3GoogleLogin from 'vue3-google-login'


const app = createApp(App)
const pinia = createPinia()
// adapt this based on where your router is

pinia.use(({ store }) => {
  store.router = markRaw(router)
})


app.use(vue3GoogleLogin, {
  clientId: '219172839308-mpralbo1hujse11314h6mthuvnvgt3k1.apps.googleusercontent.com'
})

app.use(pinia)
app.use(router)

app.mount('#app')
