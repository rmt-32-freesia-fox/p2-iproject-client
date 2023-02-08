import { defineStore } from 'pinia'
import { api } from '../helpers/axios'
import { useProfileStore } from './profile'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      user: null,
      userToEdit: null,
      showLogin: false,
      baseURL: api.defaults.baseURL,
      usernameStatus: 'none',
    }
  },
  getters: {
    discordUsername() {
      if (!this.user?.Discord) return null
      return `${this.user.Discord.username}#${this.user.Discord.discriminator}`
    },
  },
  actions: {
    toggleLogin() {
      this.showLogin = !this.showLogin
    },
    async login(provider, payload) {
      try {
        let response
        if (!localStorage.access_token) {
          response = await api.post('/auth/' + provider, payload)
          localStorage.setItem('access_token', response.data.access_token)
        } else {
          response = await api.put('/auth/' + provider, payload)
        }

        const { data } = await api.get('/user')

        this.user = data
        this.userToEdit = { ...data }
        this.$router.push(
          response.status === 201 ? `/${data.username}/edit` : '/'
        )
      } catch (error) {
        this.$router.push('/')
        console.log(error)
      }
    },

    async init() {
      try {
        const { data } = await api.get('/user')
        this.userToEdit = { ...data }
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

    async unlink(provider) {
      try {
        if (!this.user[provider]) throw provider + ' is not even linked'
        await api.delete('/auth/' + provider)
        this.init()
      } catch (error) {
        console.log(error)
      }
    },

    async checkUsername() {
      try {
        if (!this.userToEdit.username) {
          this.usernameStatus = 'notok'
          return
        }
        if (this.userToEdit.username === this.user.username) {
          this.usernameStatus = 'none'
          return
        }
        this.usernameStatus = 'loading'

        await api.head('/profile/' + this.userToEdit.username)
        this.usernameStatus = 'notok'
      } catch (error) {
        this.usernameStatus = 'ok'
      }
    },

    async saveEdit() {
      try {
        if (this.usernameStatus === 'notok') return
        await api.put('/user', this.userToEdit)
        this.user = { ...this.userToEdit }
        this.myProfile()
      } catch (error) {
        console.log(error)
      }
    },
  },
})
