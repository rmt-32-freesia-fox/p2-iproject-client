import { createRouter, createWebHistory } from "vue-router";
import HomePage from '../views/HomePage.vue'
import LoginPage from '../views/LoginPage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import MyBook from '../views/MyBook.vue'
import DetailPage from '../views/DetailPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
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
      path: "/mybook",
      name: "mybook",
      component: MyBook,
    },
    {
      path: "/detail/:id",
      name: "detail",
      component: DetailPage,
    },
  ],
});

//! Navigation Guards
router.beforeEach((to, from, next) => {
  if (localStorage.access_token && (to.name == "login" || to.name == "register")) {
    next('/');
  } else if (!localStorage.access_token && (to.name == "mybook")) {
    next('/login');
  } else {
    next();
  }
});

export default router;
