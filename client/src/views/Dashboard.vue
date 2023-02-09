<script>
import { useAuctionStore } from "../stores/auction.js";
import { mapActions, mapState } from "pinia";
import NavigationPanel from "../components/NavigationPanel.vue";
import AuctionCard from "../components/AuctionCard.vue";
export default {
  data() {
    return {
      currentPage: 1,
    };
  },
  components: {
    AuctionCard,
    NavigationPanel,
  },
  methods: {
    ...mapActions(useAuctionStore, ["fetchAllAuction"]),
    onClickHandler(page) {
      this.fetchAllAuction(null, page);
    },
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
  <div class="w-full mt-[50px] mx-auto bg-gray-300 p-10 h-screen">
    <div class="text-gray-900 flex justify-center font-bold text-3xl my-5">
      Auction Schedule List
    </div>
    <NavigationPanel />
    <div class="flex flex-wrap mt-[50px] gap-10 justify-center">
      <AuctionCard
        v-for="auction in auctions.auctions"
        :key="auction.id"
        :auction="auction"
      />
    </div>
    <Cards />
    <div class="fixed bottom-10 left-[50%]" v-if="auctions.totalItem > 0">
      <VueAwesomePaginate
        :total-items="auctions.totalItem"
        :items-per-page="8"
        :max-pages-shown="5"
        v-model="currentPage"
        :on-click="onClickHandler"
      />
    </div>
  </div>
</template>

<style>
.pagination-container {
  display: flex;
  column-gap: 10px;
}
.paginate-buttons {
  height: 50px;
  width: 50px;
  border-radius: 20px;
  cursor: pointer;
  background-color: rgb(242, 242, 242);
  border: 1px solid rgb(217, 217, 217);
  color: black;
}
.paginate-buttons:hover {
  background-color: #d8d8d8;
}
.active-page {
  background-color: #003fc7;
  border: 1px solid #003fc7;
  color: white;
}
.active-page:hover {
  background-color: #003fc7;
}
</style>
