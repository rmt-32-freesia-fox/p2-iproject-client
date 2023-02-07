import { defineStore } from "pinia";
import { api } from "../helpers/axios";
import Swal from "sweetalert2";

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

export const useAuctionStore = defineStore("auction", {
  state: () => ({
    isLogin: false,
    isLoading: false,
    githubError: false,
  }),
  actions: {
    async postLogin(user) {
      try {
        this.isLoading = true;
        const { data } = await api.post("/users/login", {
          email: user.email,
          password: user.password,
        });
        this.isLogin = true;
        localStorage.access_token = data.access_token;
        this.router.push("/");
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response.data.message,
        });
      } finally {
        this.isLoading = false;
      }
    },
    logout() {
      localStorage.clear();
      this.isLogin = false;
      this.router.push("/");
    },
    async githubLogin(code) {
      try {
        this.isLoading = true;
        const { data } = await api.post("/users/login-github", {
          code: code,
        });
        this.githubError = false;
        this.isLogin = true;
        localStorage.access_token = data.access_token;
        this.router.push("/");
      } catch (err) {
        this.githubError = true;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response.data.message,
        });
      } finally {
        this.isLoading = false;
      }
    },
    async postRegister(user) {
      try {
        this.isLoading = true;
        const { data } = await api.post("/users/register", {
          email: user.email,
          name: user.name,
          password: user.password,
        });
        this.router.push("/login");
        Swal.fire({
          icon: "success",
          title: "Thank You",
          text: "Registration has Been Successfully",
        });
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response.data.message,
        });
      } finally {
        this.isLoading = false;
      }
    },
    async fetchAllAuction() {
      try {
        const { data } = api.get("/auction");
        console.log(data);
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response.data.message,
        });
      }
    },
  },
});
