import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../views/LoginPage.vue';
import HomePage from '../views/HomePage.vue';
import LivePage from '../views/LivePage.vue';
import UpcomingPage from '../views/UpcomingPage.vue';
import PaymentPage from '../views/PaymentPage.vue';
import NotFoundPage from '../views/NotFoundPage.vue';
import RegisterPage from '../views/RegisterPage.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterPage,
    },
    {
      path: '/live/:channel_id',
      name: 'live',
      component: LivePage,
    },
    {
      path: '/upcoming/:channel_id',
      name: 'upcoming',
      component: UpcomingPage,
    },
    {
      path: '/payment',
      name: 'payment',
      component: PaymentPage,
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundPage },
  ],
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('access_token');
  const accountStatus = localStorage.getItem('accountStatus');

  if ((to.name === 'upcoming' || to.name === 'live' || to.name === 'payment') && !token) {
    next('/login');
  } else if (to.name === 'upcoming' && token && accountStatus === 'Reguler') {
    next('/payment');
  } else if ((to.name === 'login' && token) || (to.name === 'register' && token)) {
    next('/');
  } else {
    next();
  }
});

export default router;
