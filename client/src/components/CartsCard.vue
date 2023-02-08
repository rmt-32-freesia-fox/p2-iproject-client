<script>
import { mapActions } from "pinia";
import { useCartStore } from "../stores/carts";
export default {
  props: ["cart"],
  methods: {
    ...mapActions(useCartStore, ["fetchCarts"]),
  },
  created() {
    this.fetchCarts();
  },
};
</script>

<template>
  <div class="bg-white shadow rounded group">
    <a @click.prevent="$router.push('/carts/' + cart.id)" href="#">
      <div class="relative">
        <img
          :src="cart.Item.imageUrl"
          alt="Item"
          class="object-cover h-48 w-96"
        />
        <div
          class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
        >
          <a
            href="#"
            class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
            title="view product"
          >
            <i class="fa-solid fa-magnifying-glass"></i>
          </a>
          <a
            href="#"
            class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
            title="add to wishlist"
          >
            <i class="fa-solid fa-heart"></i>
          </a>
        </div>
      </div>
    </a>
    <div class="pt-4 pb-3 px-4">
      <h4
        class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition"
      >
        {{ cart.Item.name }}
      </h4>
      <div class="items-baseline mb-1">
        <p class="text-l text-primary font-semibold">
          {{ cart.Item.Category.name }}
        </p>
        <p class="text-sm text-gray-400">{{ cart.Item.description }}</p>
      </div>
    </div>
    <a
      @click.prevent="$router.push('/carts/' + cart.id)"
      href="#"
      class="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
      >See detail</a
    >
  </div>
</template>
