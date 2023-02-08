import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import vue3GoogleLogin from "vue3-google-login";
// import "./assets/main.css";

const app = createApp(App);
const pinia = createPinia()
app.use(vue3GoogleLogin,{ 
    clientId:
    "287370743821-vi4k7ef09iqli4ktat0rin31q8715g06.apps.googleusercontent.com"
})

pinia.use(({
    store
}) => {
    store.router = markRaw(router)
})

app.use(pinia);
app.use(router);

app.mount("#app");
