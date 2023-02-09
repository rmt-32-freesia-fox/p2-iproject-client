<script>
import Sidebar from "./Sidebar.vue";
import ItemsCard from "./ItemsCard.vue";
import { mapActions, mapState, mapWritableState } from "pinia";
import { useItemStore } from "../stores/items";

export default {
  data() {
    return {
      currentPage: 1,
    };
  },
  components: {
    Sidebar,
    ItemsCard,
  },
  computed: {
    ...mapState(useItemStore, ["items"]),
  },

  methods: {
    ...mapActions(useItemStore, ["fetchItems", "fetchCategories"]),

    onClickHandler(page) {
      const dataInput = {
        page: page ? page : 0,
      };
      this.fetchItems(dataInput);
    },
  },

  created() {
    this.fetchItems();
    this.fetchCategories();
  },
};
</script>

<template>
  <div class="container grid grid-cols-4 gap-6 pt-4 pb-16 items-start">
    <Sidebar />
    <div class="col-span-3">
      <div class="flex items-center mb-4">
        <!-- <select
          v-model="sortingNewestOldest"
          class="w-44 text-sm text-gray-600 py-3 px-4 border-gray-300 shadow-sm rounded focus:ring-primary focus:border-primary"
        >
          <option value="Newest">Newest</option>
          <option value="Oldest">Oldest</option>
        </select> -->
        <br /><br />
        <!-- color -->
        <div class="flex gap-2 ml-auto">
          <div
            class="border border-primary w-10 h-9 flex items-center justify-center text-white bg-primary rounded cursor-pointer"
          >
            <i class="fa-solid fa-grip-vertical"></i>
          </div>
          <div
            class="border border-gray-300 w-10 h-9 flex items-center justify-center text-gray-600 rounded cursor-pointer"
          >
            <i class="fa-solid fa-list"></i>
          </div>
        </div>
        <!-- ./color -->
      </div>

      <!-- Job Card -->
      <div class="grid grid-cols-3 gap-6">
        <ItemsCard v-for="item in items.items" :key="item.id" :item="item" />
      </div>
      <br />
      <br />
      <vue-awesome-paginate
        :total-items="items.totalItems"
        :items-per-page="6"
        :max-pages-shown="items.totalPages"
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
  height: 40px;
  width: 40px;
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
  background-color: #3498db;
  border: 1px solid #3498db;
  color: white;
}
.active-page:hover {
  background-color: #2988c8;
}
</style>
