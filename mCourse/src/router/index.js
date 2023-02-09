import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginPage from "../views/LoginPage.vue";
import RegisterPage from "../views/RegisterPage.vue";
import CourseView from "../views/CourseView.vue";
import DetailPage from "../views/DetailPage.vue";
import Favorite from "../views/favorite.vue";
import errorPage from "../components/404.vue";
import watch from "../components/watch.vue";
import git from "../components/git.vue";
import forgot from "../components/password.vue";

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
      component: LoginPage,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterPage,
    },
    {
      path: "/courses",
      name: "courses",
      component: CourseView,
    },
    {
      path: "/courses/:id",
      name: "DetailPage",
      component: DetailPage,
    },
    {
      path: "/favorites",
      name: "favorite",
      component: Favorite,
    },
    {
      path: "/watch",
      name: "watch",
      component: watch,
    },
    {
      path: "/githublogin",
      name: "githublogin",
      component: git,
    },
    {
      path: "/forgot",
      name: "forgot",
      component: forgot,
    },
    {
      path: "/:catchAll(.*)",
      name: "404page",
      component: errorPage,
    },
  ],
});
router.beforeEach((to, from, next) => {
  let token = localStorage.access_token;
  if (
    (!token && to.name == "courses") ||
    (!token && to.name == "favorite") ||
    (!token && to.name == "DetailPage")
  ) {
    next({ name: "login" });
  } else if (
    (token && to.name == "login") ||
    (token && to.name == "register") ||
    (token && to.name == "home") ||
    (token && to.name == "forgot")
  ) {
    next({ name: "courses" });
  } else {
    next();
  }
});
export default router;
