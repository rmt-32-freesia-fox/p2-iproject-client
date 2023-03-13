import { createRouter, createWebHistory } from 'vue-router';
import RegisterPage from '../views/RegisterPage.vue';
import LoginPage from '../views/LoginPage.vue';
import HomePage from '../views/HomePage.vue';
import MyHeroes from '../views/MyHeroes.vue';
import WinRate from '../components/WinRate.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/register',
      name: 'register',
      component: RegisterPage,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
    },
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/heroes',
      name: 'heroes',
      component: MyHeroes,
    },
    {
      path: '/winRate',
      name: 'winRate',
      component: WinRate,
    },
  ],
});

router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  const access_token = localStorage.access_token;

  if (!access_token && to.name === 'heroes') {
    next({ name: 'login' });
  } else if (!access_token && to.name === 'winRate') {
    next({ name: 'login' });
  } else {
    next();
  }
});

export default router;
