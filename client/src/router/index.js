import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import About from "../views/About.vue";
import Exercise from "../views/Exercise.vue";
import MyExercise from "../views/MyExercise.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";

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
      component: Register,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/exercise",
      name: "exercise",
      component: Exercise,
    },
    {
      path: "/myexercise",
      name: "myexercise",
      component: MyExercise,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.access_token;
  if (!isAuthenticated && to.name === "about") next({ name: "login" });
  else if (
    (!isAuthenticated && to.name === "exercise") ||
    (!isAuthenticated && to.name === "myexercise")
  )
    next({ name: "login" });
  else if (
    (isAuthenticated && to.name === "login") ||
    (isAuthenticated && to.name === "register")
  )
    next({ name: "home" });
  else next();
});
export default router;
