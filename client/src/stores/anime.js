import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";

export const useAnimeStore = defineStore("anime", {
  state: () => ({
    // baseUrl: "https://animix-production.up.railway.app",
    baseUrl: "http://localhost:3000",
    userId: localStorage.userId || "",
    isLogin: localStorage.isLogin || false,
    username: localStorage.username || "",
    animeSearchResult: [],
    playlistResult: [],
    eventResult: [],
    myEventResult: [],
    newsResult: [],
    newsPagination: {},
  }),
 
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
    async searchAnime(value) {
      try {
        let { data } = await axios({
          method: "post",
          url: `${this.baseUrl}/animefinder`,
          data: {
            name: value.name,
          },
        });
        this.animeSearchResult = data.data;
        console.log(data.data);
      } catch (error) {
        console.log(error);
      }
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
    async logoutHandler() {
      Swal.fire({
        title: "Are you sure?",
        text: "If You Log Out You Have No Access To Our best Features",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Log out now!",
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
            this.swalError(
              error.response.statusText,
              error.response.data.message
            );
          }
        }
      });
    },
    async createPlaylist(dataAnime) {
      try {
        let { data } = await axios({
          method: "post",
          url: `${this.baseUrl}/animeplaylist`,
          data: {
            AnimeId: Number(dataAnime.animeId),
            title: dataAnime.title,
            image: dataAnime.image,
            episodes: dataAnime.episodes,
          },
          headers: {
            access_token: localStorage.access_token,
          },
        });
        console.log(data);
        this.swalNotification("Anime has been successfully added to playlist");
        this.router.push("/playlist"); //!
      } catch (error) {
        console.log(error);
        this.swalError(
          "You are not logged in",
          "This feature need you to log in"
        );
      }
    },
    async fetchPlaylist() {
      try {
        // console.log(this.userId);
        let { data } = await axios({
          method: "get",
          url: `${this.baseUrl}/animeplaylist/${this.userId}`,
          headers: {
            access_token: localStorage.access_token,
          },
        });
        console.log(data);
        this.swalNotification("Anime playlist has been loaded");
        this.playlistResult = data;
        this.router.push("/playlist"); //!
      } catch (error) {
        console.log(error);
        this.swalError(
          "You are not logged in",
          "This feature need you to log in"
        );
      }
    },
    async updatePlaylist(AnimeId, watchedEpisodes) {
      try {
        let { data } = await axios({
          method: "patch",
          url: `${this.baseUrl}/animeplaylist`,
          data: {
            UserId: this.userId,
            AnimeId,
            watchedEpisodes,
          },
          headers: {
            access_token: localStorage.access_token,
          },
        });
        console.log(data);
        this.swalNotification("Anime has been updated");
        this.fetchPlaylist();
        this.router.push("/playlist"); //!
      } catch (error) {
        console.log(error);
        this.swalError(
          "You are not logged in",
          "This feature need you to log in"
        );
      }
    },
    async deletePlaylist(AnimeId) {
      Swal.fire({
        title: "Are you sure?",
        text: "Anime data will be deleted",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Delete this Anime!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            let { data } = await axios({
              method: "delete",
              url: `${this.baseUrl}/animeplaylist`,
              data: {
                UserId: this.userId,
                AnimeId,
              },
              headers: {
                access_token: localStorage.access_token,
              },
            });
            console.log(data);
            this.swalNotification("Anime has been deleted");
            this.fetchPlaylist();
            this.router.push("/playlist"); //!
          } catch (error) {
            console.log(error);
            this.swalError(
              "You are not logged in",
              "This feature need you to log in"
            );
          }
        }
      });
    },
    async fetchEvents() {
      try {
        let { data } = await axios({
          method: "get",
          url: `${this.baseUrl}/events`,
        });
        console.log(data);
        this.swalNotification("Events has been loaded");
        this.eventResult = data;
        this.router.push("/events"); //!
      } catch (error) {
        console.log(error);
        this.swalError(
          "You are not logged in",
          "This feature need you to log in"
        );
      }
    },
    async fetchMyEvent() {
      try {
        let { data } = await axios({
          method: "get",
          url: `${this.baseUrl}/myevents`,
          headers : {
            access_token : localStorage.access_token
          }
        });
        console.log(data);
        this.swalNotification("My Events has been loaded");
        this.myEventResult = data;
        this.router.push("/myevents"); //!
      } catch (error) {
        console.log(error);
        this.swalError(
          "You are not logged in",
          "This feature need you to log in"
        );
      }
    },
    async createMyEvent(EventId) {
      try {
        let { data } = await axios({
          url: `${this.baseUrl}/generate-midtrans-token`,
          method: "POST",
          headers: {
            access_token: localStorage.access_token,
          },
        });
        console.log(data);
        let callback = this.createMyEventApproved

        window.snap.pay(data.token, {
          onSuccess: function (result) {
      
            callback(EventId)
    
            console.log(result);
          },
        });
      } catch (error) {
        console.log(error);
        this.swalError(
          "You are not logged in",
          "This feature need you to log in"
        );
      }
    },
    async createMyEventApproved(EventId) {
      try {
        let { data } = await axios({
          method: "post",
          url: `${this.baseUrl}/myevents`,
          data: {
            EventId,
            UserId: this.userId,
          },
          headers: {
            access_token: localStorage.access_token,
          },
        });
        console.log(data);
        this.fetchMyEvent(); //!
        // this.router.push("/myevents"); //!
        this.swalNotification("Event has been successfully bought");
      } catch (error) {
        console.log(error);
        this.swalError(
          "You are not logged in",
          "This feature need you to log in"
        );
      }
    },
    async fetchNews(page) {
      try {
        console.log(page);
        let { data } = await axios({
          method: "get",
          url: `${this.baseUrl}/news`,
          params : {
            page
          }
        });
        console.log(data);

        this.newsResult=data.data
        this.newsPagination=data.pagination
        this.swalNotification("News has loaded");
      } catch (error) {
        console.log(error);
        this.swalError(
          "News failed to be loaded",
          "News failed to be loaded"
        );
      }
    },
  },
});
