<script>
import Header from "../components/Header.vue";
import Navbar from "../components/Navbar.vue";
import HistoriesCard from "../components/HistoriesCard.vue";
import { mapActions, mapState } from "pinia";
import { useCustomerStore } from "../stores/customers";
import { useCartStore } from "../stores/carts";
export default {
  data() {
    return {
      name: localStorage.name,
    };
  },
  components: {
    Header,
    Navbar,
    HistoriesCard,
  },

  computed: {
    ...mapState(useCartStore, ["cartDetail", "histories"]),
    ...mapState(useCustomerStore, ["isLogin"]),
  },

  methods: {
    ...mapActions(useCartStore, ["historiesHandler"]),
  },

  created() {
    this.historiesHandler();
  },
};
</script>

<template>
  <Header />
  <Navbar />
  <div class="container grid grid-cols-12 items-start gap-6 pt-4 pb-16">
    <!-- profile -->
    <div class="col-span-3">
      <div class="px-4 py-3 shadow flex items-center gap-4">
        <div class="flex-shrink-0">
          <img
            src="https://rb.gy/jdmga4"
            alt="profile"
            class="rounded-full w-14 h-14 border border-gray-200 p-1 object-cover"
          />
        </div>
        <div class="flex-grow">
          <p class="text-gray-600">Hello,</p>
          <h4 class="text-gray-800 font-medium">{{ name }}</h4>
          <p class="text-xs text-gray-600">Here is your history transaction</p>
        </div>
      </div>
    </div>
    <!-- ./profile -->

    <!-- histories -->
    <div class="col-span-9 space-y-4">
      <HistoriesCard
        v-for="history in histories.transaction"
        :key="history.id"
        :history="history"
      />
      <div
        class="flex items-center justify-between gap-6 p-4 border-gray-200 rounded"
      >
        <div class="w-28"></div>
        <div class="w-1/3"></div>
        <div>
          <div class="text-primary text-lg font-semibold">
            Total: {{ histories.totalPrice }}
          </div>
        </div>
        <div class="text-gray-600 cursor-pointer hover:text-primary"></div>
      </div>
    </div>
    <!-- ./histories -->
  </div>
</template>
