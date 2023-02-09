import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Home from '../views/Home.vue'
import Events from '../views/Events.vue'
import Recipes from '../views/Recipes.vue'
import DetailEvent from '../views/DetailEvent.vue'
import Detail from '../views/Detail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/recipes',
      name: 'recipes',
      component: Recipes
    },
    {
      path: '/events',
      name: 'events',
      component: Events
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/events/:id',
      name: 'detailEvent',
      component: DetailEvent
    }
  ]
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.access_token
  const isRouteAuth = ['login', 'register'].includes(to.name)

  if (isRouteAuth && isAuthenticated) next({ name: 'home' })
  else next()
})

router.beforeEach

export default router
