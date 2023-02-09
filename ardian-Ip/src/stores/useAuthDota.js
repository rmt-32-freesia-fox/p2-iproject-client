import { defineStore } from 'pinia';
import axios from 'axios';
import Swal from 'sweetalert2';
const baseUrl = 'http://localhost:3000';
// const baseUrl = 'https://dreary-receipt-production.up.railway.app';
export const useAuthDota = defineStore({
  id: 'useAuthDota',
  state: () => {
    return {
      getdota2: [],
      getHeroes: [],
      getById: [],
    };
  },

  getters: {},

  actions: {
    alertSuccess(res) {
      Swal.fire({
        title: 'Success!',
        text: res.message,
        icon: 'success',
        confirmButtonText: 'OK',
      });
    },
    alertError(err) {
      Swal.fire({
        title: 'Error!',
        text: err.response.data.message,
        icon: 'error',
        confirmButtonText: 'OK',
      });
    },
    async fetchPlayers() {
      try {
        const { data } = await axios({
          url: `${baseUrl}/api/dota2`,
          method: 'GET',
          headers: {
            access_token: localStorage.getItem('access_token'),
          },
        });

        this.getdota2 = data;
      } catch (error) {
        this.alertError(error);
      }
    },

    async fetchHeroes() {
      try {
        const { data } = await axios({
          url: `${baseUrl}/api/dota2Team`,
          method: 'GET',
          headers: {
            access_token: localStorage.getItem('access_token'),
          },
        });

        this.getHeroes = data;
      } catch (error) {
        this.alertError(error);
      }
    },

    async fetchTeamById(value) {
      try {
        const { data } = await axios({
          url: `${baseUrl}/api/dota2/${value}`,
          method: 'GET',
          headers: {
            access_token: localStorage.getItem('access_token'),
          },
        });
        this.router.push('/winrate');
        this.getById = data;
      } catch (error) {
        this.alertError(error);
      }
    },

    async buyStiker() {
      try {
        const { data } = await axios({
          url: `${baseUrl}/generate-midtrans-token`,
          method: 'POST',
          headers: {
            access_token: localStorage.getItem('access_token'),
          },
        });

        window.snap.pay(data.token, {
          onSuccess: function (result) {
            /* You may add your own implementation here */
            alert('payment success!');
            console.log(result);
            useAuthDota().sendMail();
          },
        });
      } catch (error) {
        console.log(error);
      }
    },

    async sendMail() {
      try {
        const { data } = await axios({
          url: `${baseUrl}/api/sendmail`,
          method: 'POST',
          headers: {
            access_token: localStorage.getItem('access_token'),
          },
        });

        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
