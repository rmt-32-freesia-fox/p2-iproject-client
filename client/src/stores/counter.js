import { defineStore } from 'pinia'
import axios from 'axios'

export const useFunctionStore = defineStore('function', {
  state: () => ({
    baseUrl: `https://nusantaralounge-production.up.railway.app`,
    currentUser: "",

    //dashboard data
    heroData: [],
    sideData: [],
    gamesData: [],
    podcastData: [],
    gamesData: [],

    //podcast detail data
    podcastAllData: [],
    podcastDetailData: [],

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
        localStorage.access_token = data.access_token
        localStorage.currentUser = data.email
        this.router.push('/')
      } catch (error) {
        console.log(error.response.data.message);
      }
    },

    handleLogout() {
      localStorage.clear()
      this.currentUser = ""
      this.isLogin = false
      this.router.push('/login')
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

    async handlePodcastDetail(url) {
      try {
        const { data } = await axios({
          url: url,
        })
        this.router.push(`/podcast_detail`)
        this.podcastDetailData = data.detail_podcast
        localStorage.url = url
        console.log(this.podcastDetailData);
      } catch (error) {
        console.log(error);
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
        this.sideData = data.articles.slice(6, 16)
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
        this.podcastAllData = data.podcast
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
      } catch (error) {
        console.log(error);
      }
    },


  },
})
