import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import Auth from "../views/AuthView.vue";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/auth",
      name: "auth", 
      component: Auth, 
    },
  ],
});

export default router;
