import { createRouter, createWebHistory } from "vue-router";
import AnimeFinder from "../views/AnimeFinder.vue";
import HomeView from "../views/HomeView.vue";
import RegisterView from "../views/RegisterView.vue";
import LoginView from "../views/LoginView.vue";
import Playlist from "../views/Playlist.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/animefinder",
      name: "animefinder",
      component: AnimeFinder,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
    {
      path: "/playlist",
      name: "playlist",
      component: Playlist,
    },
  ],
});

export default router;
