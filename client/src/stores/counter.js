import { defineStore } from "pinia";
import axios from "axios";

const swalConfirm = (cb) => {
  Swal.fire({
    title: "Are you sure?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
  }).then((result) => {
    if (result.isConfirmed) {
      cb();
    }
  });
};

export const useCounterStore = defineStore("counter", {
  state: () => ({
    // baseurl: "http://localhost:3000",
    baseurl: "https://gymster-production.up.railway.app",
    bodyParts: [],
    exercise: [],
    myexercise: [],
    pagination: [],
    qrCode: [],
    status: "",
    isLogin: "false",
  }),

  actions: {
    doneLogin() {
      if (!localStorage.access_token) this.isLogin = "false";
      else this.isLogin = "true";
    },

    async qrCodeLink(data) {
      try {
        this.qrCode = `https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=${data}`;
      } catch (error) {
        console.log(error);
      }
    },

    async register(data) {
      try {
        const register = await axios({
          method: "post",
          url: `${this.baseurl}/register`,
          data: {
            username: data.username,
            email: data.email,
            password: data.password,
            phoneNumber: data.phoneNumber,
          },
        });
        this.router.push("/login");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Please Login",
          showConfirmButton: false,
          timer: 1500,
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.message,
        });
      }
    },

    async login(data) {
      try {
        const login = await axios({
          method: "post",
          url: `${this.baseurl}/login`,
          data: {
            email: data.email,
            password: data.password,
          },
        });
        localStorage.access_token = login.data.access_token;
        localStorage.setItem("id", login.data.id);
        localStorage.username = login.data.username;
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Success",
          showConfirmButton: false,
          timer: 1500,
        });

        this.router.push("/");
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.message,
        });
      }
    },

    async loginWithGoogle(response) {
      try {
        const google = await axios({
          method: "post",
          url: `${this.baseurl}/google-sign-in`,
          headers: {
            "google-auth-token": response.credential,
          },
        });
        localStorage.access_token = google.data.access_token;
        localStorage.setItem("id", google.data.id);
        localStorage.setItem("username", google.data.username);

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Success",
          showConfirmButton: false,
          timer: 1500,
        });
        this.router.push("/");
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "error from login Google",
        });
      }
    },

    async handleLogout() {
      swalConfirm(() => {
        localStorage.clear();
        this.doneLogin();
        this.router.push("/");
      });
    },
    async getBodyPart() {
      try {
        const bodyParts = await axios({
          method: "get",
          url: `${this.baseurl}/muscle`,
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.bodyParts = bodyParts.data;
      } catch (error) {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.message,
        });
      }
    },

    async getExercise(data) {
      try {
        const exercise = await axios({
          method: "get",
          url: `${this.baseurl}/exercise?`,
          params: {
            page: data.page ? data.page : "",
            search: data.search ? data.search : "",
            name: data.name ? data.name : "",
          },
        });
        this.exercise = exercise.data.response.Exercise;
        this.pagination = exercise.data.response;
      } catch (error) {
        console.log(error);
      }
    },

    async patchStatus() {
      try {
        const user = await axios({
          method: "patch",
          url: `${this.baseurl}/subscribe`,
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.router.push("/");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Thank you, now you are a member",
          showConfirmButton: false,
          timer: 1500,
        });
      } catch (error) {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.message,
        });
      }
    },

    async subscribe() {
      try {
        const midtransToken = await axios({
          method: "post",
          url: `${this.baseurl}/generate-midtrans-token`,
          headers: {
            access_token: localStorage.access_token,
          },
        });
        const cb = this.patchStatus;
        window.snap.pay(midtransToken.data.token, {
          onSuccess: function (result) {
            cb();
          },
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.message,
        });
      }
    },

    async getMyExercise() {
      try {
        const myexercise = await axios({
          method: "get",
          url: `${this.baseurl}/myexercise`,
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.myexercise = myexercise.data;
      } catch (error) {
        // console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.message,
        });
      }
    },

    async addMyExercise(exerciseId) {
      try {
        const myexercise = await axios({
          method: "post",
          url: `${this.baseurl}/myexercise/${exerciseId}`,
          headers: {
            access_token: localStorage.access_token,
          },
        });
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Add Favorite Success",
          showConfirmButton: false,
          timer: 1500,
        });
        this.getMyExercise();
        this.router.push("/myexercise");
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.message,
        });
        // console.log(error);
      }
    },

    async destroyMyExercise(id) {
      try {
        const destroy = await axios({
          method: "delete",
          url: `${this.baseurl}/myexercise/${id}`,
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.getMyExercise();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Delete Exercise Success",
          showConfirmButton: false,
          timer: 1500,
        });
      } catch (error) {
        // console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.message,
        });
      }
    },
  },
});
