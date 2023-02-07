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

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.access_token;
  if (!isAuthenticated && to.name === "about") next({ name: "login" });
  else if (!isAuthenticated && to.name === "targetMuscle")
    next({ name: "login" });
  else if (
    (isAuthenticated && to.name === "login") ||
    (isAuthenticated && to.name === "register")
  )
    next({ name: "home" });
  else next();
});
export default router;
