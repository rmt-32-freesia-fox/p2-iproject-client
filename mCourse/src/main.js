import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import VueSplide from "@splidejs/vue-splide";
import Vue3Toasity from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import vue3GoogleLogin from "vue3-google-login";

const app = createApp(App);
const pinia = createPinia();

app.use(Vue3Toasity, {
  autoClose: 3000,
  theme: "dark",
  transition: "slide",
});

app.use(vue3GoogleLogin, {
  clientId:
    "971340816434-rlr42ei4toibtrpjfjrp3r55km3asmde.apps.googleusercontent.com",
});

app.use(VueSplide);
pinia.use(({ store }) => {
  store.router = markRaw(router);
});
app.use(pinia);
app.use(router);
app.mount("#app");
