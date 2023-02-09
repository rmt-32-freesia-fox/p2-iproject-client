import { defineStore } from "pinia";
import axios from "axios";
import Toast from "awesome-toast-component";
import Swal from "sweetalert2";

export const useCartStore = defineStore("carts", {
  state: () => ({
    baseUrl: "http://localhost:3000",
    // baseUrl: "https://easy-rent-production.up.railway.app",
    carts: [],
    cartDetail: {},
    histories: [],
  }),
  getters: {},
  actions: {
    success(msg) {
      new Toast(`${msg}`, {
        position: "top",
        style: {
          container: [["background-color", "green"]],
          message: [["color", "#eee"]],
          bold: [["font-weight", "bold"]],
        },
      });
    },

    error(err) {
      new Toast(`${err}`, {
        position: "top",
        style: {
          container: [["background-color", "red"]],
          message: [["color", "#eee"]],
          bold: [["font-weight", "bold"]],
        },
      });
    },

    async addCart(itemId, qty) {
      try {
        const { data } = await axios({
          url: this.baseUrl + "/customers/addCart/" + itemId,
          method: "POST",
          headers: {
            access_token: localStorage.access_token,
          },
          data: {
            ItemId: itemId,
            UserId: localStorage.idCustomer,
            quantity: qty,
          },
        });

        this.success(`Success add item to your cart`);
      } catch (err) {
        this.error(err.response.data.message);
      }
    },

    async fetchCarts() {
      try {
        const { data } = await axios({
          url: this.baseUrl + "/customers/carts",
          method: "GET",
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.carts = data;
        this.router.push("/carts");
      } catch (err) {
        console.log(err);
      }
    },

    async fetchCartDetail(cartId) {
      try {
        const { data } = await axios({
          url: this.baseUrl + "/customers/carts/" + cartId,
          method: "GET",
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.cartDetail = data;
      } catch (err) {
        console.log(err);
      }
    },

    async deleteCart(cartId) {
      try {
        const { data } = await axios({
          url: this.baseUrl + "/customers/carts/delete/" + cartId,
          method: "DELETE",
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.success(`Success remove from carts`);
        this.router.push("/carts");
      } catch (err) {
        console.log(err);
      }
    },

    async rentHandler(transactionId) {
      try {
        const { data } = await axios({
          url: this.baseUrl + "/customers/carts/rent/" + transactionId,
          method: "GET",
          headers: {
            access_token: localStorage.access_token,
          },
        });

        window.snap.pay(data.midtransToken.token, {
          onSuccess: function (result) {
            Swal.fire({
              icon: "success",
              title: "Payment Success",
            });
          },
          onError: function (result) {
            Swal.fire({
              icon: "error",
              title: "Payment Failed",
            });
          },
          onClose: function () {
            Swal.fire({
              icon: "error",
              title: "You did not finish payment yet",
            });
          },
        });
        this.fetchCarts();
        this.fetchCartDetail();
        this.historiesHandler();
        this.router.push("/");
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "error",
          text: err,
        });
      }
    },

    async historiesHandler() {
      try {
        const { data } = await axios({
          url: this.baseUrl + "/customers/histories",
          method: "GET",
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.histories = data;
      } catch (err) {
        console.log(err);
      }
    },
  },
});
