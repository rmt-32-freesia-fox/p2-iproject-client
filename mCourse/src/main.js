import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import VueSplide from "@splidejs/vue-splide";
const app = createApp(App);
const pinia = createPinia();

app.use(VueSplide);
pinia.use(({ store }) => {
  store.router = markRaw(router);
});
app.use(pinia);
app.use(router);
app.mount("#app");
