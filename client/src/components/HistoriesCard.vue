<script>
import { mapState } from "pinia";
import { useCartStore } from "../stores/carts";

export default {
  props: ["history", "totalPrice"],
};
</script>

<template>
  <div
    class="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded"
  >
    <div class="w-28">
      <img :src="history.Item.imageUrl" class="w-full" />
    </div>
    <div class="w-1/3">
      <h2 class="text-gray-800 text-xl font-medium uppercase">
        {{ history.Item.name }}
      </h2>
      <p class="text-gray-500 text-sm">
        <span class="text-green-600"
          >{{ history.Item.price }} x {{ history.quantity }}</span
        >
      </p>
    </div>

    <div>
      <p>Subtotal:</p>
      <div class="text-lg font-semibold">{{ history.subtotal }}</div>
    </div>

    <div class="text-gray-600 cursor-pointer hover:text-primary">
      <i class="fa-solid fa-trash"></i>
    </div>
  </div>
</template>
