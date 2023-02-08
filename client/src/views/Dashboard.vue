<script>
import { useAuctionStore } from "../stores/auction.js";
import { mapActions, mapState } from "pinia";
import AuctionCard from "../components/AuctionCard.vue";
export default {
  components: {
    AuctionCard,
  },
  methods: {
    ...mapActions(useAuctionStore, ["fetchAllAuction"]),
  },
  created() {
    this.fetchAllAuction();
  },
  computed: {
    ...mapState(useAuctionStore, ["auctions"]),
  },
};
</script>

<template>
  <div class="w-full mt-[10px] mx-auto bg-gray-600 p-10 h-screen">
    <div class="text-white flex justify-center font-bold text-3xl my-5">
      Auction List
    </div>
    <div class="flex flex-wrap gap-5 justify-center items-center">
      <AuctionCard
        v-for="auction in auctions"
        :key="auction.id"
        :auction="auction"
      />
    </div>
  </div>
</template>
