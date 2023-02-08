<script>
import myAuctionRow from "../components/MyAuctionRow.vue";
import { useAuctionStore } from "../stores/auction.js";
import { mapActions, mapState } from "pinia";
export default {
  components: {
    myAuctionRow,
  },
  methods: {
    ...mapActions(useAuctionStore, ["fetchMyAuction"]),
  },
  created() {
    this.fetchMyAuction();
  },
  computed: {
    ...mapState(useAuctionStore, ["myAuctions"]),
  },
};
</script>

<template>
  <div class="mx-auto w-[80%] mt-[100px] h-screen">
    <div class="flex justify-center text-2xl">MY AUCTION</div>
    <div class="flex justify-end">
      <router-link
        to="/addauction"
        class="bg-blue-900 hover:bg-blue-600 rounded-lg shadow-lg text-white p-2 m-2 text-sm cursor-pointer"
      >
        + create auction
      </router-link>
    </div>
    <div v-if="myAuctions.length == 0" class="flex mt-20 justify-center">
      You dont have any auction ...
    </div>
    <div
      v-if="myAuctions.length > 0"
      class="relative overflow-x-auto shadow-md sm:rounded-lg"
    >
      <table class="w-full text-sm text-left text-gray-500 0">
        <thead class="text-xs text-white uppercase bg-gray-900">
          <tr>
            <th scope="col" class="px-6 py-3">name</th>
            <th scope="col" class="px-6 py-3">Category</th>
            <th scope="col" class="px-6 py-3">Color</th>
            <th scope="col" class="px-6 py-3">Open Price</th>
            <th scope="col" class="px-6 py-3">Winner</th>
            <th scope="col" class="px-6 py-3">Close Price</th>
            <th scope="col" class="px-6 py-3">action</th>
          </tr>
        </thead>
        <tbody>
          <myAuctionRow
            v-for="myAuction in myAuctions"
            :key="myAuction.id"
            :myAuction="myAuction"
          />
        </tbody>
      </table>
    </div>
  </div>
</template>
