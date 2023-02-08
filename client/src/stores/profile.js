import { defineStore } from 'pinia'
import { api } from '../helpers/axios'

export const useProfileStore = defineStore('profile', {
  state: () => {
    return {
      profile: null,
      spotifyPooling: null,
      loading: false,
      notFound: false,
      song: null,
    }
  },
  getters: {
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
    convert(ms) {
      const minutes = Math.floor(ms / 60000)
      const seconds = Math.floor((ms / 1000) % 60)
      return `${minutes}:${seconds < 10 ? 0 : ''}${seconds}`
    },
    async getProfileData() {
      const { data } = await api.get(
        '/profile/' + this.$router.currentRoute._value.params.username
      )
      this.profile = data
    },

    async init() {
      try {
        this.loading = true
        await this.getProfileData()

        this.spotifyPooling = setInterval(async () => {
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
            clearInterval(this.spotifyPooling)
          }
        }, 1000)
      } catch (error) {
        console.log(error)
        if (error.status === 404) {
          this.notFound = true
          return
        }
        this.$notify({
          group: 'error',
          title: 'Error',
          text: error.response,
        })
      } finally {
        this.loading = false
      }
    },

    clearPolling() {
      clearInterval(this.spotifyPooling)
    },
  },
})
