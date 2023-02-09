import { defineStore } from "pinia";
import { toast } from "vue3-toastify";
import axios from "axios";
const originUrl = "https://mcourse-production.up.railway.app";
export const useCounterStore = defineStore("counter", {
  state: () => ({
    dataCourse: [],
    dataPop: [],
    motivation: "",
    detailPage: [],
    dataMyFavorites: [],
    dataWatch: [],
    isLoader: false,
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    async forReset(value) {
      try {
        const { data } = await axios.post(originUrl + "/newpassword", {
          token: value.token,
          email: value.email,
          password: value.password,
        });
        toast.success(data.message, {
          position: toast.POSITION.BOTTOM_CENTER,
        });
      } catch (error) {
        toast.error(response.data.message, {
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    },
    async forToken(value) {
      try {
        const { data } = await axios.post(originUrl + "/resetpassword", {
          token: value.token,
          email: value.email,
        });
        toast.success(data.message, {
          position: toast.POSITION.BOTTOM_CENTER,
        });
      } catch (error) {
        toast.error(response.data.message, {
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    },
    async githubLogin(value) {
      this.isLoader = true;
      try {
        const { data } = await axios.post(
          originUrl + "/github",
          {},
          {
            params: {
              code: value,
            },
          }
        );
        localStorage.access_token = data.access_token;
        localStorage.username = data.username;
        this.router.push("/courses");
      } catch ({ response }) {
        toast.error(response.data.message, {
          position: toast.POSITION.BOTTOM_CENTER,
        });
      } finally {
        this.isLoader = false;
      }
    },
    async handleGoogleLogin(response) {
      try {
        const { data } = await axios.post(originUrl + "/googlesign", {
          code: response.code,
        });

        localStorage.access_token = data.access_token;
        localStorage.username = data.username;
        this.username = data.username;
        this.router.push("/courses");
      } catch (response) {
        toast.error(response.data.message, {
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    },
    async statusSubsribe(id) {
      console.log(id);
      try {
        const { data } = await axios.patch(
          originUrl + `/mycourses/${id}`,
          {},
          {
            headers: {
              access_token: localStorage.access_token,
            },
          }
        );
        this.getMyCourse();
      } catch (response) {
        toast.error(response.data.message, {
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    },
    async toSubsribe(value) {
      try {
        const { data } = await axios.post(
          originUrl + `/mycourses/payment/${value}`,
          {},
          {
            headers: {
              access_token: localStorage.access_token,
            },
          }
        );
        const cb = this.statusSubsribe;
        window.snap.pay(data.token, {
          onSuccess: function (result) {
            /* You may add your own implementation here */
            cb(value);
          },
        });
      } catch (response) {
        toast.error(response.data.message, {
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    },
    async forWatch(id) {
      this.isLoader = true;
      try {
        const { data } = await axios.get(originUrl + `/mycourses/${id}`, {
          headers: {
            access_token: localStorage.access_token,
          },
        });

        this.dataWatch = data;
        this.router.push("/watch");
      } catch ({ response }) {
        toast.error(response.data.message, {
          position: toast.POSITION.BOTTOM_CENTER,
        });
      } finally {
        this.isLoader = false;
      }
    },
    async removeMyCourse(value) {
      try {
        const { data } = await axios.delete(originUrl + `/mycourses/${value}`, {
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.getMyCourse();
        toast.info(data.message, {
          position: toast.POSITION.BOTTOM_CENTER,
        });
      } catch ({ response }) {
        toast.error(response.data.message, {
          position: toast.POSITION.BOTTOM_CENTER,
        });
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
      } catch ({ response }) {
        toast.error(response.data.message, {
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    },
    async addCourse(value) {
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
        toast.success(data.message, {
          position: toast.POSITION.BOTTOM_CENTER,
        });
      } catch ({ response }) {
        toast.error(response.data.message, {
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    },
    async getVideoId(value) {
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
      } catch ({ response }) {
        toast.error(response.data.message, {
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    },
    async getMotivate() {
      try {
        const { data } = await axios.get(originUrl + "/motivation", {
          headers: {
            access_token: localStorage.access_token,
          },
        });

        this.motivation = data;
      } catch (response) {
        toast.error(response.data.message, {
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    },
    async popCourse() {
      try {
        const { data } = await axios.get(originUrl + "/popcourse");

        this.dataPop = data;
      } catch ({ response }) {
        toast.error(response.data.message, {
          position: toast.POSITION.BOTTOM_CENTER,
        });
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

        localStorage.access_token = data.access_token;
        localStorage.username = data.username;
        this.router.push("/courses");
        toast.success(`welcome again ${data.username}`, {
          position: toast.POSITION.BOTTOM_CENTER,
        });
      } catch ({ response }) {
        toast.error(response.data.message, {
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    },
    async getCourse(value) {
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

        this.dataCourse = data;
      } catch ({ response }) {
        toast.error(response.data.message, {
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    },
  },
});
