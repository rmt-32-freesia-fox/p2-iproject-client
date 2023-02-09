import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import Login from '../views/Login.vue'
import Podcast from '../views/Podcast.vue'
import PodcastPlaylist from '../views/Podcast_Playlist.vue'
import PodcastDetail from '../views/Podcast_detail.vue'
import Subscription from '../views/Subscription.vue'
import Games from '../views/Games.vue'

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
      path: '/podcast',
      component: Podcast
    },
    {
      path: '/podcast_playlist',
      component: PodcastPlaylist
    },
    {
      path: '/podcast_detail',
      component: PodcastDetail
    },
    {
      path: '/subscription',
      component: Subscription
    },
    {
      path: '/games',
      component: Games
    },
  ]
})

router.beforeEach((to, from, next) => {
  if (to.fullPath !== '/login' && !localStorage.access_token) next(`/login`)
  if (to.fullPath === '/login' && localStorage.access_token) next(`/`)
  if (to.fullPath === '/podcast_detail' && localStorage.role !== `Premium`) next(`/subscription`)
  if (to.fullPath === '/podcast/playlist' && localStorage.role !== `Premium`) next(`/subscription`)
  if (to.fullPath === '/subscription' && localStorage.role === `Premium`) next(`/`)
  else next()
})

export default router
