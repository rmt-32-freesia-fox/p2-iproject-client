<script>
import quotes from "../components/quotes.vue";
import card from "../components/card.vue";
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";
export default {
  components: {
    quotes,
    card,
  },
  computed: {
    ...mapState(useCounterStore, ["dataMyFavorites", "motivation"]),
  },
  methods: {
    ...mapActions(useCounterStore, ["getMyCourse", "getMotivate"]),
  },
  created() {
    this.getMyCourse();
    this.getMotivate();
  },
};
</script>
<template>
  <div class="m-3">
    <quotes :dataMotivate="motivation" />
  </div>
  <h1 class="font-bold ml-5 text-3xl w-fit border-b">Favorite List</h1>
  <div class="grid grid-cols-4 gap-3 mt-5 p-5">
    <card
      v-for="(item, i) in dataMyFavorites"
      :key="i"
      :dataCard="item"
      cardName="favorites"
    />
  </div>
</template>
