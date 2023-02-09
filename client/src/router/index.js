import { createRouter, createWebHistory } from "vue-router";
import RegisterView from "../views/RegisterView.vue";
import LoginView from "../views/LoginView.vue";
import HomeView from "../views/HomeView.vue";
import ItemDetailView from "../views/ItemDetailView.vue";
import CartsView from "../views/CartsView.vue";
import CartDetailView from "../views/CartDetailView.vue";
import HistoriesView from "../views/HistoriesView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/detail/:itemId",
      name: "detail",
      component: ItemDetailView,
    },
    {
      path: "/carts",
      name: "carts",
      component: CartsView,
    },
    {
      path: "/carts/:cartId",
      name: "cartsDetail",
      component: CartDetailView,
    },
    {
      path: "/histories",
      name: "histories",
      component: HistoriesView,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.access_token;
  if ((to.name == "login" || to.name == "register") && isAuthenticated) {
    next({ name: "home" });
  } else if (
    (to.name == "carts" || to.name == "histories") &&
    !isAuthenticated
  ) {
    next({ name: "login" });
  } else {
    next();
  }
});

export default router;
