import { defineStore } from 'pinia'
import { api } from '../helpers/axios'
import ms from 'ms'

export const useHomeStore = defineStore('home', {
  state: () => {
    return { page: 1, logs: [], totalPage: 1, loading: false }
  },
  getters: {
    next() {
      console.log(this.page, this.totalPage)
      return this.page <= this.totalPage
    },
  },
  actions: {
    convertTime(date) {
      return ms(Date.now() - new Date(date).getTime(), { long: true })
    },
    async getLogs(page) {
      this.loading = true
      try {
        // if (this.page > this.totalPage) return
        if (page === 1) {
          this.page = page
          this.logs = []
        }
        const {
          data: { rows, count },
        } = await api.get('/logs', { params: { page: page || this.page } })
        this.logs.push(...rows)
        this.totalPage = Math.ceil(count / 10)
        this.page++
      } catch (error) {
        console.log(error)
      } finally {
        this.loading = false
      }
    },
    reset() {
      this.page = 1
    },
    async getRandomProfiles() {
      try {
        const { data } = await api.get('/profile')
        return data
      } catch (error) {
        return []
      }
    },
  },
})
