import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../views/LoginPage.vue";
import RegisterPage from "../views/RegisterPage.vue";
import HomePage from "../views/HomePage.vue";
import Dashboard from "../views/Dashboard.vue";
import MyAuction from "../views/MyAuction.vue";
import FormAddAuction from "../views/FormAddAuction.vue";
import AuctionDetail from "../views/AuctionDetail.vue";
import loginGithubLoading from "../components/loginGithubLoading.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: HomePage,
    },
    {
      path: "/login",
      name: "LoginPage",
      component: LoginPage,
      children: [
        {
          path: "github",
          component: loginGithubLoading,
        },
      ],
    },
    {
      path: "/register",
      name: "RegisterPage",
      component: RegisterPage,
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard,
    },
    {
      path: "/myauction",
      name: "MyAuction",
      component: MyAuction,
    },
    {
      path: "/addauction",
      name: "FormAddAuction",
      component: FormAddAuction,
    },
    {
      path: "/auctions/:id",
      name: "AuctionDetail",
      component: AuctionDetail,
    },
  ],
});

export default router;
