<script>
import TransactionCard from "../components/TransactionCard.vue";
import { useAuctionStore } from "../stores/auction.js";
import { mapActions, mapState } from "pinia";
export default {
  components: {
    TransactionCard,
  },
  methods: {
    ...mapActions(useAuctionStore, ["fetchTransaction"]),
  },
  created() {
    this.fetchTransaction();
  },
  computed: {
    ...mapState(useAuctionStore, ["transactions"]),
  },
};
</script>

<template>
  <div class="bg-gray-300 h-screen">
    <div class="mt-[150px] flex justify-center gap-5 flex-wrap">
      <TransactionCard
        v-for="transaction in transactions"
        :key="transaction.id"
        :transaction="transaction"
      />
    </div>
  </div>
</template>
