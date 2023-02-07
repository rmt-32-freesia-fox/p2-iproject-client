<script>
import { mapActions, mapState } from "pinia";
import card from "../components/card.vue";
import quotes from "../components/quotes.vue";
import searchBox from "../components/searchBox.vue";
import { useCounterStore } from "../stores/counter";
export default {
  components: {
    card,
    quotes,
    searchBox,
  },
  computed: {
    ...mapState(useCounterStore, ["dataCourse", "motivation"]),
  },
  methods: {
    ...mapActions(useCounterStore, ["getCourse", "getMotivate"]),
  },
  created() {
    // this.getCourse();
    this.getMotivate();
  },
};
</script>
<template>
  <div class="container mx-auto mt-7">
    <div class="m-3">
      <!----tempat quotes-->
      <quotes :dataMotivate="motivation" />
    </div>
    <searchBox />
    <!----tempat serach box-->
  </div>
  <div class="grid grid-cols-4 gap-3 mt-5 p-5">
    <!---Tempat Card-->
    <!-- <card v-for="(item, i) in dataCourse" :key="i" :dataCard="item" /> -->
  </div>
  <div class="mx-auto text-center gap-2 font-bold">
    <ul>
      <a
        href=""
        class="bg-slate-200 border px-3 rounded-l-full hover:bg-slate-700 hover:text-white"
        >Prev</a
      >
      <span class="px-2 bg-slate-500 text-white">this page 0 of 100</span>
      <a
        href=""
        class="bg-slate-200 border px-3 rounded-r-full hover:bg-slate-700 hover:text-white"
        >Next</a
      >
    </ul>
  </div>
</template>
