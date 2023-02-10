import axios from 'axios';
import Swal from 'sweetalert2';
import { defineStore } from 'pinia';
// const baseUrl = 'http://localhost:3000';
const baseUrl = 'https://scared-home-production.up.railway.app';

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    isLogin: false,
  }),
  getters: {},
  actions: {
    async loginHandler(credential) {
      console.log(credential);
      try {
        const { data } = await axios.post(`${baseUrl}/users/login`, {
          email: credential.email,
          password: credential.password,
        });
        this.isLogin = true;
        localStorage.setItem('access_token', data.access_token);
        localStorage.setItem('accountStatus', data.accountStatus);
        this.router.push({
          name: 'home',
        });
        Swal.fire(`Login success`, `Welcome ${data.username}!!`, 'success');
      } catch (err) {
        Swal.fire(`${err.response.data.message}`, '', 'error');
      }
    },

    async register(credential) {
      try {
        await axios.post(`${baseUrl}/users/register`, {
          username: credential.username,
          email: credential.email,
          password: credential.password,
        });
        this.router.push({
          name: 'login',
        });
        console.log(data);
        // Swal.fire(`Register success`, "Please login", "success");
      } catch (err) {
        console.log(err);
        // Swal.fire(`${err.response.data.message}`, "", "error");
      }
    },
    changeStatusIsLogin() {
      if (localStorage.getItem('access_token')) {
        this.isLogin = true;
      }
    },
    logoutHandler() {
      localStorage.clear();
      this.isLogin = false;
      this.router.push({ name: 'home' });
      Swal.fire(`Logout success`, ``, 'success');
    },
  },
});
