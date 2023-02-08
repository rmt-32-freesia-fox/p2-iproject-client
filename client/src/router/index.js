import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import Login from '../views/Login.vue'
import Search from '../views/Search.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/search',
      component: Search
    },
  ]
})

router.beforeEach((to, from, next) => {
  if (to.fullPath === '/' && !localStorage.access_token) next(`/login`)
  if (to.fullPath === '/login' && localStorage.access_token) next(`/`)
  else next()
})

export default router
