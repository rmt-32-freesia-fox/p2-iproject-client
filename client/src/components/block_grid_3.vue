<script>
import CardLarge from "../particles/lnews_card.vue";
import { useFunctionStore } from "../stores/counter";
import { mapActions, mapState } from "pinia";
export default {
  components: {
    CardLarge,
  },
  methods: {
    ...mapActions(useFunctionStore, ["fetchAll"]),
  },
  computed: {
    ...mapState(useFunctionStore, ["gamesData"]),
  },
  created() {
    this.fetchAll();
  },
};
</script>

<template>
  <div class="bg-gray-200 py-6">
    <div class="xl:container mx-auto px-3 sm:px-4 xl:px-2">
      <div class="flex flex-row flex-wrap">
        <div class="flex-shrink max-w-full w-full overflow-hidden">
          <div class="w-full py-3">
            <h2 class="text-white text-2xl font-bold bg-gray-900 px-2 py-2">
              <span
                class="inline-block h-5 border-l-3 border-red-600 mr-2"
              ></span
              >GAMES
            </h2>
          </div>
          <div class="flex flex-row flex-wrap -mx-3">
            <CardLarge
              v-for="(games, index) in gamesData"
              :key="index"
              :news="games"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>