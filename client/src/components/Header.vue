<script>
import { mapActions } from "pinia";
import { useItemStore } from "../stores/items";
export default {
  data() {
    return {
      name: "",
    };
  },

  methods: {
    ...mapActions(useItemStore, ["fetchItems"]),

    search() {
      const dataInput = {
        name: this.name ? this.name : "",
        // page: 0,
      };
      this.fetchItems(dataInput);
    },
  },
};
</script>

<template>
  <!-- header -->
  <header class="py-4 shadow-sm bg-white">
    <div class="container flex flex-row-reverse items-center justify-between">
      <a href="/"> </a>

      <div class="w-full max-w-xl relative flex">
        <span class="absolute left-4 top-3 text-lg text-gray-400">
          <i class="fa-solid fa-magnifying-glass"></i>
        </span>
        <input
          v-model="name"
          type="text"
          name="search"
          id="search"
          class="w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none"
          placeholder="search"
        />
        <button
          @click.prevent="search"
          class="bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition"
        >
          Search
        </button>
      </div>
    </div>
  </header>
  <!-- ./header -->
</template>
