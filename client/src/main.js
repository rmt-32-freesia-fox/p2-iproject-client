import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";

import VueSocketIO from "vue-3-socket.io";
import SocketIO from "socket.io-client";
import App from "./App.vue";
import router from "./router";

import VueAwesomePaginate from "vue-awesome-paginate";
import "vue-awesome-paginate/dist/style.css";

import "./assets/main.css";

const app = createApp(App);
const pinia = createPinia();

// const options = { path: "/" }; //Options object to pass into SocketIO

pinia.use(({ store }) => {
  store.router = markRaw(router);
});

app.use(VueAwesomePaginate);

app.use(
  new VueSocketIO({
    debug: true,
    connection: SocketIO("https://hlr-auction.up.railway.app"), //options object is Optional
  })
);

app.use(pinia);
app.use(router);
app.mount("#app");
