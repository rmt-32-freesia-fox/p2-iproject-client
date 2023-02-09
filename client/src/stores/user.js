import { defineStore } from 'pinia'
import { api } from '../helpers/axios'
import { notif } from '../helpers/notif'
import { useProfileStore } from './profile'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      user: null,
      userToEdit: null,
      showLogin: false,
      baseURL: api.defaults.baseURL,
      usernameStatus: 'none',
      loading: true,
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
      this.loading = true
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
        notif('error', error.response?.data?.message)
        console.log(error)
      } finally {
        this.loading = false
      }
    },

    async init() {
      this.loading = true
      try {
        const { data } = await api.get('/user')
        this.userToEdit = { ...data }
        this.user = data
      } catch (error) {
        notif('error', error.response?.data?.message)
        console.log(error)
      } finally {
        this.loading = false
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
      this.loading = true
      try {
        if (!this.user[provider]) throw provider + ' is not even linked'
        await api.delete('/auth/' + provider)
        this.init()
      } catch (error) {
        notif('error', error.response?.data?.message)
        console.log(error)
      } finally {
        this.loading = true
      }
    },

    async checkUsername() {
      this.loading = true
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
      } finally {
        this.loading = false
      }
    },

    async saveEdit(e) {
      this.loading = true
      try {
        if (this.usernameStatus === 'notok') return

        const form = new FormData()
        const profilePicture = e.target.profilePicture.files[0]
        if (profilePicture) {
          form.append('profilePicture', profilePicture, profilePicture.name)
        }

        const background = e.target.background.files[0]
        if (background) {
          form.append('background', background, background.name)
        }

        for (const key in this.userToEdit) {
          form.append(key, this.userToEdit[key])
        }

        await api.put('/user', form)
        this.user = { ...this.userToEdit }
        this.myProfile()
      } catch (error) {
        notif('error', error.response?.data?.message)
        console.log(error)
      } finally {
        this.loading = false
      }
    },
  },
})
