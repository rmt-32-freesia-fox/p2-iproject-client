<script>
import Header from "../components/Header.vue";
import Navbar from "../components/Navbar.vue";
import CartsCard from "../components/CartsCard.vue";

import { mapState, mapActions } from "pinia";
import { useCartStore } from "../stores/carts";
export default {
  components: {
    Header,
    Navbar,
    CartsCard,
  },
  computed: {
    ...mapState(useCartStore, ["carts"]),
  },
  methods: {
    ...mapActions(useCartStore, ["fetchCarts"]),
  },
  created() {
    this.fetchCarts();
  },
};
</script>

<template>
  <Header />
  <Navbar />
  <!-- breadcrumb -->
  <div class="container py-4 flex items-center gap-3">
    <a href="../index.html" class="text-primary text-base">
      <i class="fa-solid fa-house"></i>
    </a>
    <span class="text-sm text-gray-400">
      <i class="fa-solid fa-chevron-right"></i>
    </span>
    <p class="text-gray-600 font-medium">Carts</p>
  </div>
  <!-- ./breadcrumb -->
  <div class="container grid grid-cols-4 gap-6 pt-4 pb-16 items-start">
    <div class="col-span-3">
      <div class="grid grid-cols-3 gap-6">
        <CartsCard v-for="cart in carts" :key="cart.id" :cart="cart" />
      </div>
    </div>
  </div>
</template>
