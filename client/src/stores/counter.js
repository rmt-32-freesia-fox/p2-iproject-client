import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useFunctionStore = defineStore('function', {
  state: () => ({
    baseUrl: `https://nusantaralounge-production.up.railway.app`,
    currentUser: "",

  }),


  getters: {
    doubleCount: (state) => state.count * 2,
  },


  actions: {

    async handleLogin(dataLogin) {
      console.log(dataLogin);
      try {
        const { data } = await axios({
          url: this.baseUrl + `/user/login`,
          method: `POST`,
          data: {
            email: dataLogin.email,
            password: dataLogin.password
          }
        })

        localStorage.setItem('access_token', data)
        this.currentUser = data.email
        this.router.push('/')

      } catch (error) {
        console.log(error.response.data.message);
      }
    },

    handleLogout() {
     localStorage.clear()
     this.currentUser = ""
    },

    async handleRegister(dataLogin) {
      console.log(dataLogin);
      try {
        const { data } = await axios({
          url: this.baseUrl + `/user/register`,
          method: `POST`,
          data: {
            email: dataLogin.email,
            password: dataLogin.password
          }
        })
        console.log(data);
      } catch (error) {
        console.log(error.response.data.message);
      }
    }

  },
})
