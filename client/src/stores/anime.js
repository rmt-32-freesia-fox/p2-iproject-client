import { defineStore } from "pinia";
import axios from "axios"
import Swal from 'sweetalert2'


export const useAnimeStore = defineStore('anime', {
  state: () => ({ 
    animeSearchResult: [],
    baseUrl : 'http://localhost:3000',
    userId : localStorage.userId || '',
    isLogin : localStorage.isLogin || false,
    username : localStorage.username || '',
   }),
  // getters: {
  //   doubleCount: (state) => state.count * 2,
  // },
  actions: {
    swalSuccess(title, message) {
      Swal.fire(title, message, "success");
    },
    swalError(title, message) {
      Swal.fire(title, message, "error");
    },
    swalErrorNotification(error) {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "error",
        title: error.response.statusText,
      });
    },
    swalNotification(title) {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "success",
        title,
      });
    },
    searchAnime(value) {
      const options = {
        method: 'GET',
        url: 'https://anime-db.p.rapidapi.com/anime',
        params: {
          page: '1',
          size: '10',
          search: value,
          // genres: 'Fantasy,Drama',
          sortBy: 'ranking',
          sortOrder: 'asc'
        },
        headers: {
          'X-RapidAPI-Key': '179e0bdf60mshabb49e1432f32b9p194a9ejsn92b309969690',
          'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
        }
      };
      axios.request(options).then( (response)=> {
        console.log(response.data);
        this.animeSearchResult = response.data.data
      }).catch(function (error) {
        console.error(error);
      });
    },
    async loginHandler(dataLogin) {
      try {
        let data = await axios({
          method: "post",
          url: `${this.baseUrl}/login`,
          data: {
            email: dataLogin.email,
            password: dataLogin.password,
          },
        });
        localStorage.setItem("access_token", data.data.access_token);
        localStorage.setItem("userId", data.data.userId);
        localStorage.setItem("isLogin", "true");
        localStorage.setItem("username", data.data.username);
        this.isLogin = true;
        this.userId = data.data.userId;
        this.username = data.data.username;
        console.log(data.data);
        this.swalSuccess("Login Success", "Please Enjoy");
        this.router.push("/");
      } catch (error) {
        console.log(error);
        this.swalError(error.response.statusText, error.response.data.message);
      }
    },
    async registerHandler(dataRegister) {
      try {
        let { data } = await axios({
          method: "post",
          url: `${this.baseUrl}/register`,
          data: {
            email: dataRegister.email,
            password: dataRegister.password,
            username: dataRegister.username,
          },
        });
        console.log(data);
        this.swalSuccess(
          "Sign Up Success",
          "You can now log in with your account"
        );
        this.router.push("/login");
      } catch (error) {
        console.log(error);
        this.swalError("Register Failed", error.response.data.message);
      }
    },
    async createFavorite(jobId) {
      try {
        let { data } = await axios({
          method: "post",
          url: `${baseUrl}/pub/customers/${this.customerId}`,
          data: {
            jobId,
          },
          headers: {
            access_token: localStorage.access_token,
          },
        });
        console.log(data);
        this.swalNotification("Job succesfully added to Favorite");
        this.router.push("/favorites");
      } catch (error) {
        console.log(error);
        this.swalError("Yu are not logged in","This feature need you to log in");
      }
    },
    async logoutHandler() {
      Swal.fire({
        title: 'Are you sure?',
        text: "If You Log Out You Have No Access To Our best Features",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Log out now!'
      }).then((result) => {
        if (result.isConfirmed) {
          try {
            localStorage.clear();
            this.swalSuccess(
              "Logout Success",
              "See You, Thanks for entrusting us "
            );
            this.router.push("/");
            this.isLogin = false;
          } catch (error) {
            console.log(error);
            this.swalError(error.response.statusText, error.response.data.message);
          }
        }
      })
     
    },
  },
})