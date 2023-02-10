import { defineStore } from 'pinia';
import axios from 'axios';
import Swal from 'sweetalert2';

// const baseUrl = 'http://localhost:3000';
const baseUrl = 'https://scared-home-production.up.railway.app';

export const useHoloStore = defineStore({
  id: 'holo',
  state: () => ({
    lives: [],
    upcomings: [],
    holos: [],
  }),
  getters: {},
  actions: {
    async getLiveStreaming(channel_id) {
      // console.log(channel_id)
      try {
        const { data } = await axios.get(`${baseUrl}/idols/lives/${channel_id}`);
        this.lives = data;
        this.router.push({
          name: 'live',
          params: { channel_id },
        });
      } catch (err) {
        this.router.push({
          name: 'NotFound',
        });
        // console.log(err);
        Swal.fire(`${err.response.data.message}`, '', 'error');
      }
    },
    async getUpcomingsStreaming(channel_id) {
      try {
        const { data } = await axios.get(`${baseUrl}/idols/upcomings/${channel_id}`);
        this.upcomings = data;
        this.router.push({
          name: 'upcoming',
          params: { channel_id },
        });
      } catch (err) {
        this.router.push({
          name: 'NotFound',
        });
        // console.log(err);
        Swal.fire(`${err.response.data.message}`, '', 'error');
      }
    },
    async getChannels() {
      try {
        const { data } = await axios({
          url: `${baseUrl}/idols`,
          method: 'GET',
        });
        this.holos = data;
      } catch (err) {
        Swal.fire(`${err.response.data.message}`, '', 'error');
      }
    },
  },
});
