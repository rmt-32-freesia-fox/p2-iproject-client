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
    auctions: [],
    myAuctions: [],
    productList: [],
    detailAuction: {},
    recentAuction: [],
  }),
  actions: {
    checkLogin() {
      const access_token = localStorage.access_token;
      if (access_token) {
        this.isLogin = true;
      }
    },
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
        this.isLoading = true;
        const { data } = await api.get("/auctions");
        console.log(data);
        this.auctions = data;
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
    async fetchMyAuction() {
      try {
        this.isLoading = true;
        const { data } = await api.get("/auctions/myauctions", {
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.myAuctions = data;
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
    async getWinner(id) {
      try {
        this.isLoading = true;
        const { data } = await api.get(`/auctions/winner/${id}`, {
          headers: {
            access_token: localStorage.access_token,
          },
        });
        return data;
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
    async fetchItem(category) {
      try {
        this.isLoading = true;
        const { data } = await api.get(`/auctions/itemslist`, {
          params: {
            category: category,
          },
          headers: {
            access_token: localStorage.access_token,
          },
        });
        console.log(data);
        this.productList = data;
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
    async postAddAuction(formData) {
      try {
        this.isLoading = true;
        const { data } = await api.post("/auctions/newauction", formData, {
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.router.push("/myAuction");
        Swal.fire({
          icon: "Success",
          title: "Oops...",
          text: `success add ${data.name}`,
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
    async fetchAuctionById(id) {
      try {
        this.isLoading = true;
        const { data } = await api.get(`/auctions/${id}`, {
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.detailAuction = data;
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
    async fetchRecentAuction() {
      try {
        this.isLoading = true;
        const { data } = await api.get("/auctions/recentauction", {
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.recentAuction = data;
        console.log(data);
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
  },
});
