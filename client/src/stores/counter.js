
import { defineStore } from 'pinia'
import axios from 'axios'
import { RouterLink, RouterView } from "vue-router";


export const useDataStore = defineStore('data', {
  state: () => ({
	name: ''
  }),
  getters: {

  },
  actions: {
    async login(code) {
      try {
        const req = await
        axios({
          method:'post',
          data: {
            code 
          }
        })
        console.log(req);
      } catch (error) {
        console.log(error);
      }
    }
  }
})