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
  actions: {
    async getProfileData() {
      const { data } = await api.get(
        '/profile',
        this.$router.currentRoute.params.username
      )

      this.profile = data
    },
    
    async init() {
      try {
        this.loading = true
        await this.getProfileData()

        this.spotifyPooling = setInterval(async () => {
          try {
            const { data } = await axios.get(
              'http://127.0.0.1:3000/profile/' +
                this.$route.params.username +
                '/spotify'
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
        if (error.status === 404) {
          this.notFound = true
          return
        }
        this.$notify({
          group: 'error',
          title: 'Error',
          text: error.response.data.message,
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
