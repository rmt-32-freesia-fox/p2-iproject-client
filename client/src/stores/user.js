import { defineStore } from 'pinia'
import { api } from '../helpers/axios'
import { useProfileStore } from './profile'


export const useUserStore = defineStore('user', {
  state: () => {
    return { user: null, showLogin: false, baseURL: api.defaults.baseURL }
  },
  actions: {
    toggleLogin() {
      this.showLogin = !this.showLogin
    },
    async login(provider, payload) {
      try {
        const response = await api.post('/auth/' + provider, payload)
        localStorage.setItem('access_token', response.data.access_token)

        const { data } = await api.get('/user')

        this.user = data
      } catch (error) {
        console.log(error)
      }
    },

    async init() {
      try {
        const { data } = await api.get('/user')
        this.user = data
      } catch (error) {
        console.log(error)
      }
    },

    logout() {
      const profile = useProfileStore()
      this.$reset()
      localStorage.clear()
      profile.reload()
    },


    myProfile() {
      if (this.user) this.$router.push('/' + this.user.username)
    },
  },
})
