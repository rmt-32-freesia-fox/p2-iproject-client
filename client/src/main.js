import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import vue3GoogleLogin from "vue3-google-login";

import VueAwesomePaginate from "vue-awesome-paginate";
import "vue-awesome-paginate/dist/style.css";

// import './assets/main.css'

const app = createApp(App);
const pinia = createPinia();
pinia.use(({ store }) => {
  store.router = markRaw(router);
});

app.use(pinia);
app.use(router);
app.use(VueAwesomePaginate);

app.use(vue3GoogleLogin, {
  clientId:
    "824248993740-iqqnftk55hm6putfi5a581186ruv6lo0.apps.googleusercontent.com",
});

app.mount("#app");
