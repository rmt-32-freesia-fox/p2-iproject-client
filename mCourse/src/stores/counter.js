import { defineStore } from "pinia";
import { toast } from "vue3-toastify";
import axios from "axios";
const originUrl = "http://localhost:3000";
export const useCounterStore = defineStore("counter", {
  state: () => ({ count: 0, name: "Eduardo" }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    async forRegister(value) {
      try {
        const { data } = await axios.post(originUrl + "/register", {
          username: value.username,
          email: value.email,
          password: value.password,
          phoneNumber: value.phoneNumber,
        });
        console.log(data);
        toast.success("Success register please Login!", {
          position: toast.POSITION.BOTTOM_CENTER,
        });
        this.router.push("/login");
      } catch ({ response }) {
        toast.error(response.data.message, {
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    },
    async forLogin(value) {
      try {
        const { data } = await axios.post(originUrl + "/login", {
          email: value.email,
          password: value.password,
        });
        console.log(data);
      } catch (error) {
        console.log(data);
      }
    },
  },
});
