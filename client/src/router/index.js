import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue"
import Location from "../views/Location.vue"
import MyPlant from "../views/MyPlant.vue"
import NotFound from "../views/NotFound.vue"
import Home from "../views/Home.vue"
import LoginAdmin from "../views/LoginAdmin.vue"
import Register from "../views/Register.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/loginAdmin",
      name: "loginAdmin",
      component: LoginAdmin,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
    {
      path: "/mycarts",
      name: "mycharts",
      component: MyPlant,
    },
    {
      path: "/location",
      name: "location",
      component: Location,
    },
    {
      path: "/:catchAll(.*)",
      name: "notfound",
      component: NotFound,
    },
    


    
    
  ],
});



router.beforeEach((to, from, next) => {
  if ((!localStorage.access_token && to.name == 'myplant') ||
    (!localStorage.access_token && to.name == 'home')) {
    next({
      name: 'login'
    })

  } else if (
    (localStorage.access_token && to.name == "login") ||
    (localStorage.access_token && to.name == "loginAdmin")
  ) {
    next({
      name: 'home'
    })
  } else {
    next()
  }
})

export default router;
