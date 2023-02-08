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
    baseurl: "http://localhost:3000",
    bodyParts: [],
    exercise: [],
    pagination: [],
    isLogin: "false",
  }),

  actions: {
    doneLogin() {
      if (!localStorage.access_token) this.isLogin = "false";
      else this.isLogin = "true";
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
        console.log(register);
      } catch (error) {
        console.log(error);
      }
    },

    async login(data) {
      console.log("masuknibos");
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

        this.router.push("/");
      } catch (error) {
        console.log(error);
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
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Success",
          showConfirmButton: false,
          timer: 1500,
        });
        this.isLogin = "true";
        this.router.push("/");
        console.log(google);
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
        console.log(this.bodyParts);
      } catch (error) {
        console.log(error);
      }
    },

    async getExercise(data) {
      console.log(data);
      try {
        const exercise = await axios({
          method: "get",
          url: `${this.baseurl}/exercise?`,
          params: {
            page: data.page ? data.page : "",
            search: data.search ? data.search : "",
            filter: data.filter ? data.filter : "",
          },
        });
        console.log(exercise);
        this.exercise = exercise.data.data;
        this.pagination = exercise.data.currentPage;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
