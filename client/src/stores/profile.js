import { defineStore } from 'pinia'
import { api } from '../helpers/axios'
import { useUserStore } from './user'
import ms from 'ms'
import { notif } from '../helpers/notif'

export const useProfileStore = defineStore('profile', {
  state: () => {
    return {
      profile: null,
      spotifyPooling: null,
      loading: false,
      notFound: false,
      song: null,
      followers: [],
      followings: [],
    }
  },
  getters: {
    isMe() {
      const { user } = useUserStore()
      if (!user || !this.profile) return false
      return user.id === this.profile.id
    },
    songTime() {
      const convert = (ms) => {
        const minutes = Math.floor(ms / 60000)
        const seconds = Math.floor((ms / 1000) % 60)
        return `${minutes}:${seconds < 10 ? 0 : ''}${seconds}`
      }

      if (!this.song) return '--:-- / --:--'
      return `${convert(this.song.progress_ms)} / ${this.convert(
        this.song.item.duration_ms
      )}`
    },
  },
  actions: {
    convertTime(date) {
      return ms(Date.now() - new Date(date).getTime(), { long: true })
    },
    convert(ms) {
      const minutes = Math.floor(ms / 60000)
      const seconds = Math.floor((ms / 1000) % 60)
      return `${minutes}:${seconds < 10 ? 0 : ''}${seconds}`
    },
    async getProfileData() {
      this.loading = true
      try {
        const { data } = await api.get(
          '/profile/' + this.$router.currentRoute._value.params.username
        )
        this.profile = data
      } catch (error) {
        notif('error', error.response?.data?.message)
      } finally {
        this.loading = false
      }
    },

    async init() {
      try {
        if (!this.$router.currentRoute._value.params.username) return
        this.loading = true
        this.song = null
        await this.getProfileData()

        const spotifyPooling = setInterval(async () => {
          try {
            const { data } = await api.get(
              '/profile/' + this.profile.username + '/spotify'
            )
            if (data.is_playing) {
              this.song = data
              return
            }

            this.song = null
          } catch (error) {
            clearInterval(spotifyPooling)
            this.clearPolling()
          }
        }, 1000)
        this.spotifyPooling = spotifyPooling
      } catch (error) {
        notif('error', error.response?.data?.message)
        console.log(error)
        if (error.status === 404) {
          this.notFound = true
          return
        }
      } finally {
        this.loading = false
      }
    },

    clearPolling() {
      clearInterval(this.spotifyPooling)
      this.song = null
    },

    async follow() {
      this.loading = true
      try {
        if (!this.profile) return
        await api.post(`/profile/${this.profile.username}/follow`)
        this.clearPolling()
        this.init()
      } catch (error) {
        notif('error', error.response?.data?.message)
        // this.$notify({
        //   group: 'error',
        //   title: 'Error',
        //   text: error.response.data.message,
        // })
      } finally {
        this.loading = false
      }
    },
    async unfollow() {
      this.loading = true
      try {
        if (!this.profile) return
        await api.delete(`/profile/${this.profile.username}/follow`)
        this.clearPolling()
        this.init()
      } catch (error) {
        console.log(error)
        notif('error', error.response?.data?.message)
        // this.$notify({
        //   group: 'error',
        //   title: 'Error',
        //   text: error.response.data.message,
        // })
      } finally {
        this.loading = true
      }
    },

    reload() {
      this.clearPolling()
      this.init()
    },

    async getFollowers() {
      this.loading = true
      try {
        if (!this.profile) return
        const { data } = await api.get(
          `/profile/${this.profile.username}/followers`
        )
        this.followers = data.Followers
      } catch (error) {
        notif('error', error.response?.data?.message)
        console.log(error)
      } finally {
        this.loading = false
      }
    },
    async getFollowings() {
      this.loading = true
      try {
        if (!this.profile) return
        const { data } = await api.get(
          `/profile/${this.profile.username}/followings`
        )
        this.followings = data.Followings
      } catch (error) {
        notif('error', error.response?.data?.message)
        console.log(error)
      } finally {
        this.loading = false
      }
    },
  },
})
