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
        test
      </div>
    </div>
  </div>
</template>
