import { defineStore } from 'pinia'
import { api } from '../helpers/axios'
import { useProfileStore } from './profile'

export const useLinkStore = defineStore('link', {
  state: () => {
    return { link: '', label: '', id: null, show: false }
  },
  actions: {
    edit(link, label, id) {
      this.link = link
      this.label = label
      this.id = id
      this.show = true
    },

    showForm() {
      this.show = true
    },

    hideForm() {
      this.$reset()
    },

    async submit() {
      const { reload } = useProfileStore()
      try {
        const payload = { link: this.link, label: this.label }
        if (this.id) {
          await api.put('/link/' + this.id, payload)
        } else {
          await api.post('/link', payload)
        }
        this.hideForm()
        reload()
      } catch (error) {
        console.log(error)
      }
    },

    async remove(id) {
      const { reload } = useProfileStore()
      try {
        await api.delete('/link/' + id)
        reload()
      } catch (error) {
        console.log(error)
      }
    },
  },
})
