import { defineStore } from 'pinia'
import { api } from '../helpers/axios'
import jwtDecode from 'jwt-decode'

export const useUserStore = defineStore('user', {
  state: () => {
    return { user: null }
  },
  actions: {
    async login(provider, payload) {
      try {
        const response = await api.post('/auth/' + provider, payload)
        localStorage.setItem('access_token', response.data.access_token)

        const { data } = await api.get('/user' )

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
    }
  },
})
