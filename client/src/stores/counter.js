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
  }),

  actions: {
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
  },
});
