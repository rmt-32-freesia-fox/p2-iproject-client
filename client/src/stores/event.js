import { defineStore } from 'pinia'
import axios from 'axios'
import { toast } from '../composables'
const baseUrl = import.meta.env.VITE_SERVER_URL

export const useEventStore = defineStore('event', {
  state() {
    return {
      modal: false,
      events: []
    }
  },
  actions: {
    async book() {
      try {
        const { data } = await axios.post(`${baseUrl}/payment-gateway`, {}, {
          headers: {
            access_token: localStorage.access_token
          }
        })
        window.snap.pay(data.token, {
          onSuccess: function (result) {
            /* You may add your own implementation here */
            alert("payment success!"); console.log(result);
          },
          onPending: function (result) {
            /* You may add your own implementation here */
            alert("wating your payment!"); console.log(result);
          },
          onError: function (result) {
            /* You may add your own implementation here */
            alert("payment failed!"); console.log(result);
          },
          onClose: function () {
            /* You may add your own implementation here */
            alert('you closed the popup without finishing the payment');
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
        toast('success', res.data.message)
      } catch (error) {
        toast('error', error.response.data.message)
    }
    },
    async fetchEvent() {
      try {
        const res = await axios.get(`${baseUrl}/events`, {
          headers: {
            access_token: localStorage.access_token
          }
        })

        this.events = res.data.rows
      } catch (error) {
        toast('error', error.response.data.message)
      }
    },
    toggleModal() {
      this.modal = !this.modal
    }
  }
})
