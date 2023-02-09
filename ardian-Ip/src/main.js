import { createApp, markRaw } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import vue3GoogleLogin from 'vue3-google-login';
import VueSocialSharing from 'vue-social-sharing'


const app = createApp(App);
const pinia = createPinia();

app.use(vue3GoogleLogin, {
  clientId: '196539681699-np7qgpa85gl5u87qikcn2pu31vs1ulgt.apps.googleusercontent.com',
});

pinia.use(({ store }) => {
  store.router = markRaw(router);
});

app.use(VueSocialSharing);
app.use(pinia);
app.use(router);

app.mount('#app');
