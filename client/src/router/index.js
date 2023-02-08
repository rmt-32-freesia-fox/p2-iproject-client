import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import Auth from "../views/AuthView.vue";
import HomeView from "../views/HomeView.vue";

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
      component: LoginView,
    },
    {
      path: "/auth",
      name: "auth", 
      component: Auth, 
    },
  ],
});


router.beforeEach((to, from, next) => {
  
  
  var expiration = new Date(localStorage.getItem("expiration"));  
  var currentTime = new Date().getTime();  
  if (currentTime > expiration) { 
    localStorage.removeItem("token"); // token will only available within 30 minutes
    localStorage.removeItem("expiration");
  }
  
  if(to.fullPath =='/' && !localStorage.getItem('token')){ 
    return next('/login')
  } 
  // if(to.fullPath =='/login' && localStorage.getItem('token') || to.fullPath =='/register' && localStorage.getItem('token')  ){ 
  //   return next('/')
  // }  
   
  next() 
})


export default router;
