import { defineStore } from 'pinia';
import axios from 'axios';
import Swal from 'sweetalert2';
const baseUrl = 'http://localhost:3000';
// const baseUrl = 'https://dreary-receipt-production.up.railway.app';
export const useAuthStore = defineStore({
  id: 'useAuthStore',
  state: () => {
    return {
      isLogin: false,
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
    handleLogout() {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Logout!',
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Logout!', 'Your logout in this web.', 'success');
          localStorage.clear();
          this.isLogin = false;
          this.router.push('/login');
        }
      });
    },

    async registerHandle(obj) {
      try {
        const { data } = await axios({
          method: 'POST',
          url: `${baseUrl}/users/register`,
          data: {
            username: obj.username,
            email: obj.email,
            password: obj.password,
          },
        });

        this.router.push('/login');
        this.alertSuccess();
      } catch (error) {
        this.alertError(error);
      }
    },

    async loginHandle(obj) {
      try {
        const { data } = await axios({
          method: 'POST',
          url: `${baseUrl}/users/login`,
          data: {
            email: obj.email,
            password: obj.password,
          },
          headers: {
            'Content-Type': 'application/json',
          },
        });

        localStorage.access_token = data.access_token;
        this.isLogin = true;
        this.router.push('/');
        this.alertSuccess(data);
      } catch (error) {
        this.alertError(error);
      }
    },

    async handleCredentialResponse(response) {
      try {
        const googlesign = await axios.post(
          `${baseUrl}/users/login-google`,
          {},
          {
            headers: {
              google_token: response.credential,
            },
          }
        );
        localStorage.access_token = googlesign.data.access_token;
        this.router.push('/');
        this.alertSuccess(googlesign);
      } catch (error) {
        this.alertError(error);
      }
    },
  },
});
