import { defineStore } from 'pinia'
import axios from 'axios'
import { toast } from '../composables'
const baseUrl = import.meta.env.VITE_SERVER_URL

export const useUserStore = defineStore('user', {
  actions: {
    async login(data) {
      try {
        const res = await axios.post(`${baseUrl}/login`, data)
        localStorage.setItem('access_token', res.data.data.access_token)
        localStorage.setItem('role', res.data.data.role)

        this.router.push('/')

        toast('success', res.data.message)
      } catch (error) {
        toast('error', error.response.data.message)
      }
    },
    async register(data) {
      try {
        const res = await axios.post(`${baseUrl}/register`, data)
        
        this.router.push('/login')
        toast('success', res.data.message)
      } catch (error) {
        toast('error', error.response.data.message)
      }
    },
    async googleSign(response) {
      try {
        const res = await axios({
          url: `${baseUrl}/google-sign-in`,
          method: 'POST',
          headers: {
            "google-auth-token": response.credential
          }
        })

        localStorage.setItem('access_token', res.data.access_token)
        localStorage.setItem('id', res.data.id)
        this.isAuth = res.data.access_token
        this.router.push('/')

        toast('success', res.data.message)
      } catch (error) {
        toast('error', error.response.data.message)
      }
    },
  }
})
