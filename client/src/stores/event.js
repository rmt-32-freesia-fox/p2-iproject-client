import { defineStore } from 'pinia'
import axios from 'axios'
import { toast } from '../composables'
const baseUrl = import.meta.env.VITE_SERVER_URL

export const useEventStore = defineStore('event', {
  state() {
    return {
      modal: false,
      events: [],
      event: {},
    }
  },
  actions: {
    async book({ id, price }) {
      try {
        const { data } = await axios.post(`${baseUrl}/payment-gateway`, { price }, {
          headers: {
            access_token: localStorage.access_token
          }
        })
        window.snap.pay(data.token, {
          onSuccess: async function (result) {
            try {
              await axios.post(`${baseUrl}/events/${id}/subscibe`, data, {
                headers: {
                  access_token: localStorage.access_token
                }
              })

              toast('success', 'Course has been purchased see email to detail information and link meet')
              useEventStore().fetchById(id)
            } catch (error) {
              toast('error', error.response.data.message)
            }
          },
          onError: function (result) {
            /* You may add your own implementation here */
            toast('error', "payment failed!");
          },
          onClose: function () {
            /* You may add your own implementation here */
            toast('error', "you closed the popup without finishing the payment!");
          }
        })
      } catch (error) {
        toast('error', error.response.data.message)
      }
    },
    async addEvent(data) {
      try {
        const res = await axios.post(`${baseUrl}/events`, data, {
          headers: {
            access_token: localStorage.access_token
          }
        })

        this.toggleModal()
        this.fetchEvent({ number: null })
        toast('success', res.data.message)
      } catch (error) {
        toast('error', error.response.data.message)
      }
    },
    async subscribe(id) {
      try {
        const res = await axios.post(`${baseUrl}/events/${id}/subscibe`, data, {
          headers: {
            access_token: localStorage.access_token
          }
        })

        toast('success', 'Course has been purchased see email to detail information and link meet')
      } catch (error) {
        toast('error', error.response.data.message)
      }
    },
    async fetchEvent({ number }) {
      try {
        const res = await axios.get(`${baseUrl}/events`, {
          headers: {
            access_token: localStorage.access_token
          },
          params: {
            number
          }
        })

        this.events = res.data.rows
      } catch (error) {
        toast('error', error.response.data.message)
      }
    },
    async deleteEvent(id) {
      try {
        const res = await axios.delete(`${baseUrl}/events/${id}`, {
          headers: {
            access_token: localStorage.access_token
          }
        })

        toast('error', 'Deleted Successfully')
        useEventStore().fetchEvent({ number: null })
      } catch (error) {
        toast('error', error.response.data.message)
      }
    },
    async fetchById(id) {
      try {
        const res = await axios.get(`${baseUrl}/events/${id}`, {
          headers: {
            access_token: localStorage.access_token
          }
        })

        this.event = res.data
      } catch (error) {
        toast('error', error.response.data.message)
      }
    },
    toggleModal() {
      this.modal = !this.modal
    }
  }
})
