import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginPage from "../views/LoginPage.vue";
import RegisterPage from "../views/RegisterPage.vue";
import CourseView from "../views/CourseView.vue";
import DetailPage from "../views/DetailPage.vue";
import Favorite from "../views/favorite.vue";

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
    (token && to.name == "home")
  ) {
    next({ name: "courses" });
  } else {
    next();
  }
});
export default router;
