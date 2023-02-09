<script>
import { useAuctionStore } from "../stores/auction.js";
import { mapActions, mapState } from "pinia";
export default {
  props: ["transaction"],
  data() {
    return {
      auction: {},
    };
  },
  methods: {
    ...mapActions(useAuctionStore, [
      "fetchAuctionByIdWithReturn",
      "sendInvoice",
    ]),
    handleCheckout() {
      this.sendInvoice(
        {
          email: this.transaction.User.email,
          id: this.transaction.User.id,
          name: this.transaction.User.name,
          price: this.transaction.bid,
        },
        this.auction.auction.id
      );
    },
  },
  async created() {
    this.auction = await this.fetchAuctionByIdWithReturn(
      this.transaction.AuctionId
    );
  },
};
</script>

<template>
  <div
    class="flex w-[40%] flex-col p-2 pb-5 m-2 border-4 bg-white border-gray-600 rounded-2xl shadow-2xl"
  >
    <div class="flex gap-2">
      <div v-if="auction.images" class="rounded-lg">
        <img
          :src="auction.images[0]?.imageUrl"
          alt=""
          style="width: 400px; height: 400px; object-fit: cover"
        />
      </div>
      <div class="p-2 w-[50%] m-2 flex justify-center items-center">
        <p class="my-[20px] text-md text-center">{{ auction.auction?.name }}</p>
      </div>
    </div>

    <div
      class="relative overflow-x-auto shadow-sm sm:rounded-lg w-[95%] rounded-2xl mx-auto"
    >
      <table class="w-full mt-2 text-sm text-left text-gray-500">
        <thead class="text-xs text-gray-700 uppercase">
          <tr>
            <th
              scope="col"
              class="px-6 py-3 text-center bg-gray-700 text-white"
            >
              CATEGORY
            </th>
            <th
              scope="col"
              class="px-6 py-3 text-center bg-gray-700 text-white"
            >
              COLOR
            </th>
            <th
              scope="col"
              class="px-6 py-3 text-center bg-gray-700 text-white"
            >
              YOUR EMAIL
            </th>
            <th
              scope="col"
              class="px-6 py-3 text-center bg-gray-700 text-white"
            >
              PRICE
            </th>
            <th
              scope="col"
              class="px-6 py-3 text-center bg-gray-700 text-white"
            >
              STATUS
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b text-grey-900 border-gray-200">
            <td class="px-6 py-4 text-center text-grey-900">
              {{ auction.auction?.category }}
            </td>
            <td class="px-6 py-4 text-center text-grey-900">
              {{ auction.auction?.color }}
            </td>
            <td class="px-6 py-4 text-center text-grey-900">
              {{ transaction.User?.email }}
            </td>
            <td class="px-6 py-4 text-center text-grey-900">
              {{ transaction?.bid }}
            </td>
            <td class="px-6 py-4 text-center text-grey-900">
              {{ auction.auction?.status }}
            </td>
          </tr>
        </tbody>
      </table>
      <div
        v-if="auction.auction?.status == 'pending'"
        @click.prevent="handleCheckout"
        class="my-3 flex w-[30%] mx-auto cursor-pointer justify-center items-center bg-green-800 text-white hover:bg-green-500 rounded-lg p-2"
      >
        <a> CHECK OUT </a>
      </div>
    </div>
  </div>
</template>
