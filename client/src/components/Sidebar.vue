<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { useItemStore } from "../stores/items";
export default {
  data() {
    return {
      CategoryId: [],
    };
  },
  computed: {
    ...mapState(useItemStore, ["categories"]), //ini jobs yang dari state nya defineStore
  },

  methods: {
    ...mapActions(useItemStore, ["fetchItems", "fetchCategories"]),

    submitSortByCaregoryId() {
      const dataInput = {
        CategoryId: this.CategoryId ? this.CategoryId : null,
        // page: 0,
      };
      this.fetchItems(dataInput);
    },
  },

  created() {
    this.fetchCategories();
    const dataInput = {
      CategoryId: this.CategoryId ? this.CategoryId : null,
      // page: 0,
    };
    this.fetchItems(dataInput);
  },
};
</script>

<template>
  <!-- sidebar -->
  <div class="col-span-1 bg-white px-4 pb-6 shadow rounded overflow-hidden">
    <div class="divide-y divide-gray-200 space-y-5">
      <div class="pt-4">
        <h3 class="text-xl text-gray-800 mb-3 uppercase font-medium">
          Category
        </h3>
        <div class="space-y-2">
          <div
            v-for="category in categories"
            :key="category.id"
            class="flex items-center"
          >
            <input
              v-model="CategoryId"
              :value="category.id"
              type="checkbox"
              name="brand-1"
              id="brand-1"
              class="text-primary focus:ring-0 rounded-sm cursor-pointer"
            />
            <label for="brand-1" class="text-gray-600 ml-3 cusror-pointer">{{
              category.name
            }}</label>
            <!-- <div class="ml-auto text-gray-600 text-sm">
              ({{ totalParttime }})
            </div> -->
          </div>

          <br /><br />
          <button
            @click.prevent="submitSortByCaregoryId"
            class="bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
    <!-- ./sidebar -->
  </div>
</template>
