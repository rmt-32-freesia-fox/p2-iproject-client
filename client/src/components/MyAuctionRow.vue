<script>
import { useAuctionStore } from "../stores/auction.js";
import { mapActions, mapState } from "pinia";
export default {
  props: ["myAuction"],
  data() {
    return {
      winner: {},
    };
  },
  methods: {
    ...mapActions(useAuctionStore, ["getWinner"]),
  },
  async created() {
    this.winner = await this.getWinner(this.myAuction.id);
  },
};
</script>

<template>
  <tr class="bg-white border-b">
    <th scope="row" class="px-6 py-4 w-[30%] text-gray-900 whitespace-pre-wrap">
      {{ myAuction.name }}
    </th>
    <td class="px-6 py-4">{{ myAuction.category }}</td>
    <td class="px-6 py-4">{{ myAuction.color }}</td>
    <td class="px-6 py-4">Rp. {{ myAuction.startPrice }}</td>
    <td class="px-6 py-4">{{ winner.User?.name }}</td>
    <td class="px-6 py-4">Rp. {{ winner.bid }}</td>
    <td class="px-6 py-4 text-right">
      <a href="#" class="font-medium text-blue-600 hover:underline"
        >Send Email</a
      >
    </td>
  </tr>
</template>
