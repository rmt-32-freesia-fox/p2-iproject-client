import { defineStore } from "pinia";
import { toast } from "vue3-toastify";
import axios from "axios";
const originUrl = "http://localhost:3000";
export const useCounterStore = defineStore("counter", {
  state: () => ({
    dataCourse: [],
    dataPop: [],
    motivation: "",
    detailPage: [],
    dataMyFavorites: [],
    dataWatch: [],
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    async forWatch(id) {
      try {
        const { data } = await axios.get(originUrl + `/mycourses/${id}`, {
          headers: {
            access_token: localStorage.access_token,
          },
        });
        console.log(data);
        this.dataWatch = data;
        this.router.push("/watch");
      } catch (error) {
        console.log(error);
      }
    },
    async removeMyCourse(value) {
      try {
        const { data } = await axios.delete(originUrl + `/mycourses/${value}`, {
          headers: {
            access_token: localStorage.access_token,
          },
        });
        console.log(data);
        this.getMyCourse();
      } catch (error) {
        console.log(error);
      }
    },
    async getMyCourse() {
      try {
        const { data } = await axios.get(originUrl + "/mycourses/", {
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.dataMyFavorites = data;
      } catch (error) {
        console.log(error);
      }
    },
    async addCourse(value) {
      console.log(value);
      try {
        const { data } = await axios.post(
          originUrl + "/mycourses",
          {},
          {
            params: {
              idCourse: value.idCourse,
              imgUrl: value.imgUrl,
              description: value.description,
              title: value.title,
              channelTitle: value.channelTitle,
              publishedAt: value.publishedAt,
            },
            headers: {
              access_token: localStorage.access_token,
            },
          }
        );
        console.log(data);
      } catch ({ response }) {
        toast.error(response.data.message, {
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    },
    async getVideoId(value) {
      console.log(value);
      try {
        const { data } = await axios.get(originUrl + `/courses/data?`, {
          params: {
            videoid: value,
          },
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.detailPage = data;
        this.router.push(`/courses/${value}`);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
    async getMotivate() {
      try {
        const { data } = await axios.get(originUrl + "/motivation", {
          headers: {
            access_token: localStorage.access_token,
          },
        });
        console.log(data);
        this.motivation = data;
      } catch (error) {
        console.log(error);
      }
    },
    async popCourse() {
      try {
        const { data } = await axios.get(originUrl + "/popcourse");
        console.log(data);
        this.dataPop = data;
      } catch (error) {
        console.log(error);
      }
    },
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
        localStorage.access_token = data.access_token;
        this.router.push("/courses");
      } catch (error) {
        console.log(data);
      }
    },
    async getCourse(value) {
      console.log(value);
      try {
        const { data } = await axios.get(originUrl + "/courses/", {
          params: {
            page: value ? value.page : "",
            search: value ? value.search : "",
          },
          headers: {
            access_token: localStorage.access_token,
          },
        });
        // console.log(data);
        this.dataCourse = data;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
