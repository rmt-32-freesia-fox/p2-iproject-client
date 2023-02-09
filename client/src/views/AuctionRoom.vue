<script>
import { useAuctionStore } from "../stores/auction.js";
import RoomCard from "../components/RoomCard.vue";
import { mapActions, mapState } from "pinia";
export default {
  components: {
    RoomCard,
  },
  methods: {
    ...mapActions(useAuctionStore, ["fetchRecentAuction"]),
  },
  created() {
    this.fetchRecentAuction();
  },
  computed: {
    ...mapState(useAuctionStore, ["recentAuction"]),
  },
};
</script>

<template>
  <div
    class="w-[80%] h-screen mx-auto mt-[100px] flex flex-wrap justify-center items-center"
  >
    <RoomCard
      v-for="auction in recentAuction"
      :key="auction.id"
      :auction="auction"
    />
  </div>
</template>
