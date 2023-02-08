import { defineStore } from 'pinia'
import axios from 'axios'

export const useFunctionStore = defineStore('function', {
  state: () => ({
    baseUrl: `https://nusantaralounge-production.up.railway.app`,
    currentUser: "",
    heroData: [],
    sideData: [],
    podcastData: [],
    gamesData: [],
    isLogin: localStorage.access_token
  }),


  getters: {
    doubleCount: (state) => state.count * 2,
  },


  actions: {

    async handleLogin(dataLogin) {
      try {
        const { data } = await axios({
          url: this.baseUrl + `/user/login`,
          method: `POST`,
          data: {
            email: dataLogin.email,
            password: dataLogin.password
          }
        })
        this.isLogin = localStorage.access_token
        localStorage.access_token = data.access_token
        localStorage.currentUser = data.email
        this.currentUser = data.email
        this.router.push('/')
      } catch (error) {
        console.log(error.response.data.message);
      }
    },

    handleLogout() {
      localStorage.clear()
      this.currentUser = ""
      this.isLogin = false
    },

    async handleRegister(dataLogin) {
      console.log(dataLogin);
      try {
        const { data } = await axios({
          url: this.baseUrl + `/user/register`,
          method: `POST`,
          data: {
            email: dataLogin.email,
            password: dataLogin.password
          }
        })
        console.log(data);
      } catch (error) {
        console.log(error.response.data.message);
      }
    },

    async fetchAll() {
      this.currentUser = localStorage.currentUserx
      this.fetchHeroData()
      this.fetchPodcast()
      this.fetchGames()
    },

    async fetchHeroData() {
      try {
        const { data } = await axios({
          url: this.baseUrl + `/news`,
        })
        this.heroData = { big: data.articles[0], small: data.articles.slice(1, 5) }
        this.sideData = data.articles.slice(6, 13)
        console.log(this.sideData);
      } catch (error) {
        console.log(error);
      }
    },

    async fetchPodcast() {
      try {
        const { data } = await axios({
          url: this.baseUrl + `/news/podcast`,
        })
        this.podcastData = data.podcast.slice(0, 6)
        console.log(this.podcastData);
      } catch (error) {
        console.log(error);
      }
    },

    async fetchGames() {
      try {
        const { data } = await axios({
          url: this.baseUrl + `/news/games`,
        })
        this.gamesData = data.slice(0, 9)
        console.log(this.gamesData);
      } catch (error) {
        console.log(error);
      }
    },


  },
})
