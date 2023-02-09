import { defineStore } from "pinia";
import axios from "axios";

export const useItemStore = defineStore("items", {
  state: () => ({
    // baseUrl: "http://localhost:3000",
    baseUrl: "https://easy-rent-production.up.railway.app",
    items: [],
    categories: [],
    itemDetail: {},
  }),
  getters: {},

  actions: {
    async fetchItems(value) {
      try {
        const { data } = await axios({
          url: this.baseUrl + "/customers/items?",
          method: "GET",
          params: {
            name: value ? value.name : "",
            page: value ? value.page : 0,
            CategoryId: value ? value.CategoryId : [],
          },
        });
        this.items = data;
      } catch (err) {
        console.log(err);
      }
    },

    async fetchItemDetail(itemId) {
      try {
        const { data } = await axios({
          url: this.baseUrl + "/customers/items/" + itemId,
        });
        this.itemDetail = data;
      } catch (err) {
        console.log(err);
      }
    },

    async fetchCategories() {
      try {
        const { data } = await axios({
          url: this.baseUrl + "/customers/categories",
        });
        this.categories = data;
      } catch (err) {
        console.log(err);
      }
    },
  },
});
