<script>
import Swal from "sweetalert2";
import { useAuctionStore } from "../stores/auction.js";
import { Carousel, Navigation, Slide, Pagination } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import { mapActions, mapState } from "pinia";
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
export default {
  data() {
    return {
      winner: {
        bid: "",
        name: "",
      },
      auctionId: this.$route.params.id,
      bid: 0,
    };
  },
  sockets: {
    connect: function () {
      console.log("conneected", this.$socket);
    },
    disconnect: function () {
      console.log("disconnected", this.$socket);
    },
    connectionSuccess: function (payload) {
      Toast.fire({
        icon: "success",
        title: payload.message,
      });
    },
    bidSuccess: function (payload) {
      console.log(payload);
      this.winner.bid = payload.bid;
      this.winner.name = payload.name;
      Toast.fire({
        icon: "success",
        title: payload.message,
      });
    },
    bidFailed: function (payload) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: payload.message,
      });
    },
  },
  components: {
    Carousel,
    Slide,
    Navigation,
    Pagination,
  },
  methods: {
    ...mapActions(useAuctionStore, ["fetchAuctionById", "getWinner"]),
    handleBidButton() {
      this.$socket.emit("bid", {
        access_token: localStorage.access_token,
        roomId: this.$route.params.id,
        bid: this.bid,
      });
    },
  },
  async created() {
    await this.fetchAuctionById(this.auctionId);
    await this.$socket.emit("join", {
      access_token: localStorage.access_token,
      roomId: this.$route.params.id,
    });
    this.isConnected = true;
    const data = await this.getWinner(this.$route.params.id);
    this.winner.bid = data.bid;
    this.winner.name = data.User.name;
    this.bid = await (this.winner.bid + this.detailAuction.auction.multiple);
  },
  computed: {
    ...mapState(useAuctionStore, ["detailAuction"]),
  },
};
</script>

<template>
  <div class="bg-gray-300 w-full h-screen">
    <div class="mt-[100px] flex flex-col gap-2 justify-around">
      <div class="p-[20px] w-[80%] mx-auto rounded-2xl bg-white shadow-lg">
        <div class="relative overflow-x-auto shadow-md rounded-2xl">
          <table class="w-full text-sm text-left text-gray-500">
            <thead class="text-xs text-white uppercase bg-slate-800">
              <tr>
                <th scope="col" class="px-6 py-3">Category</th>
                <th scope="col" class="px-6 py-3">Color</th>
                <th scope="col" class="px-6 py-3">Open Price</th>
                <th scope="col" class="px-6 py-3">Multiple</th>
                <th scope="col" class="px-6 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td class="px-6 py-4">{{ detailAuction.auction.category }}</td>
                <td class="px-6 py-4">{{ detailAuction.auction.color }}</td>
                <td class="px-6 py-4">
                  {{ detailAuction.auction.startPrice }}
                </td>
                <td class="px-6 py-4">{{ detailAuction.auction.multiple }}</td>
                <td class="px-6 py-4">{{ detailAuction.auction.status }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div
        class="m-2 p-5 w-[80%] rounded-xl shadow-xl text-center flex justify-center items-center whitespace-pre-wrap mx-auto bg-white"
      >
        {{ detailAuction.auction.name }}
      </div>

      <div class="w-[80%] flex gap-5 mx-auto">
        <Carousel
          class="p-[20px] w-[65%] rounded-lg bg-white shadow-lg"
          :items-to-show="1"
          :autoplay="1000"
          :wrap-around="true"
        >
          <Slide v-for="image in detailAuction.images" :key="image.id">
            <img
              :src="image.imageUrl"
              alt=""
              srcset=""
              style="width: 500px; height: 500px; object-fit: cover"
            />
          </Slide>

          <template #addons>
            <Navigation />
            <Pagination />
          </template>
        </Carousel>
        <div class="flex flex-col bg-white p-5 rounded-xl w-[35%]">
          <span
            class="py-2 px-5 m-2 text-xl text-center bg-green-800 text-white rounded-lg"
            >Last Bid : <b>Rp.{{ winner.bid }},-</b></span
          >
          <span
            class="py-2 px-5 m-2 text-center bg-blue-800 text-white text-sm rounded-lg"
            >Bid By: <b>{{ winner.name }}</b></span
          >
          <br />
          <br />
          <img
            class="mx-auto"
            src="../assets/img/bid-here.png"
            alt=""
            style="height: 200px; width: 100px; object-fit: cover"
          />
          <div
            class="text-center"
            v-if="detailAuction.auction?.status == 'active'"
          >
            bid will be close in
            <span class="font-bold text-red-700">
              {{
                new Date(detailAuction.auction.date).toLocaleDateString(
                  "id-Id",
                  {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }
                )
              }}
              21:00
            </span>
          </div>
          <div
            class="text-center"
            v-if="detailAuction.auction?.status != 'available'"
          >
            <span class="font-bold text-red-700">
              bid session has been closed !
            </span>
          </div>
          <br />
          <br />

          <div
            data-style="clean"
            class="flex items-end mb-3"
            v-if="detailAuction.auction?.status == 'available'"
          >
            <div
              data-element="fields"
              data-stacked="false"
              class="flex items-center mx-auto w-full max-w-md mb-3 seva-fields formkit-fields"
            >
              <div class="relative w-full mr-3 formkit-field">
                <div
                  class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                ></div>
                <input
                  id="member_email"
                  :step="detailAuction.auction.multiple"
                  class="formkit-input text-2xl text-center bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                  placeholder="Input Your Bid"
                  v-model="bid"
                  type="number"
                />
              </div>
              <button
                @click.prevent="handleBidButton"
                data-element="submit"
                class="formkit-submit"
              >
                <div class="formkit-spinner"></div>
                <span
                  class="px-5 py-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg cursor-pointer hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >Bid</span
                >
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
