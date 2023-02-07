import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import About from "../views/About.vue";
import TargetMuscle from "../views/TargetMuscle.vue";
import SignUp from "../views/SignUp.vue";
import SignIn from "../views/SignIn.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/register",
      name: "register",
      component: SignUp,
    },
    {
      path: "/login",
      name: "login",
      component: SignIn,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/targetMuscle",
      name: "targetMuscle",
      component: TargetMuscle,
    },
  ],
});

export default router;
