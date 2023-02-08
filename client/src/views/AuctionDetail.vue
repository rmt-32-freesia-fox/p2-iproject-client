<script>
import { useAuctionStore } from "../stores/auction.js";
import { Carousel, Navigation, Slide, Pagination } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import { mapActions, mapState } from "pinia";
export default {
  data() {
    return {
      auctionId: this.$route.params.id,
    };
  },
  components: {
    Carousel,
    Slide,
    Navigation,
    Pagination,
  },
  methods: {
    ...mapActions(useAuctionStore, ["fetchAuctionById"]),
  },
  created() {
    this.fetchAuctionById(this.auctionId);
  },
  computed: {
    ...mapState(useAuctionStore, ["detailAuction"]),
  },
};
</script>

<template>
  <div class="bg-gray-300 w-full h-screen">
    <div class="mt-[100px] flex flex-col gap-10 justify-around">
      <div class="w-[80%] mx-auto">
        <Carousel
          class="p-[20px] rounded-lg bg-white shadow-lg"
          :items-to-show="4"
          :autoplay="1000"
          :wrap-around="true"
        >
          <Slide v-for="image in detailAuction.images" :key="image.id">
            <img
              :src="image.imageUrl"
              alt=""
              srcset=""
              style="width: 600px; height: 400px; object-fit: cover"
            />
          </Slide>

          <template #addons>
            <Navigation />
            <Pagination />
          </template>
        </Carousel>
      </div>
      <div class="p-[20px] w-[80%] mx-auto rounded-lg bg-white shadow-lg">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table
            class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
          >
            <thead
              class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
            >
              <tr>
                <th scope="col" class="px-6 py-3">Product name</th>
                <th scope="col" class="px-6 py-3">Category</th>
                <th scope="col" class="px-6 py-3">Color</th>
                <th scope="col" class="px-6 py-3">Open Price</th>
                <th scope="col" class="px-6 py-3">Start Price</th>
                <th scope="col" class="px-6 py-3">Multiple</th>
                <th scope="col" class="px-6 py-3">Status</th>
                <th scope="col" class="px-6 py-3">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {{ detailAuction.auction.name }}
                </th>
                <td class="px-6 py-4">{{ detailAuction.auction.category }}</td>
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
    </div>
  </div>
</template>
