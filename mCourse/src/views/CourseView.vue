<script>
import { mapActions, mapState } from "pinia";
import card from "../components/card.vue";
import quotes from "../components/quotes.vue";

import { useCounterStore } from "../stores/counter";
export default {
  data() {
    return {
      dataInput: {
        search: "",
        countPage: 1,
        page: "",
      },
    };
  },
  components: {
    card,
    quotes,
  },
  computed: {
    ...mapState(useCounterStore, ["dataCourse", "motivation"]),
  },
  methods: {
    ...mapActions(useCounterStore, ["getCourse", "getMotivate"]),
    search() {
      this.getCourse(this.dataInput);
    },
    nextPage() {
      this.dataInput.countPage += 1;
      this.dataInput.page = this.dataCourse.tokenNext
        ? this.dataCourse.tokenNext
        : "";
      this.getCourse(this.dataInput);
    },
    prevPage() {
      if (this.dataInput.countPage >= 2) {
        this.dataInput.countPage -= 1;
        this.dataInput.page = this.dataCourse.tokenPrev
          ? this.dataCourse.tokenPrev
          : "";
      }
      this.getCourse(this.dataInput);
    },
  },
  created() {
    this.getCourse();
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
    <!---search-box-->
    <form action="">
      <div class="mx-auto text-center flex justify-center">
        <input
          v-model="dataInput.search"
          type="text"
          placeholder=" What do you want ?"
          class="border border-black w-1/2 p-2 border-r border-r-white"
        />

        <button
          @click.prevent="search"
          class="bg-black text-white p-2 font-bold border border-black"
        >
          Search
        </button>
      </div>
    </form>
    <!----tempat serach box-->
  </div>
  <div class="grid grid-cols-4 gap-3 mt-5 p-5">
    <!---Tempat Card-->
    <card v-for="(item, i) in dataCourse.items" :key="i" :dataCard="item" />
  </div>
  <div class="mx-auto text-center gap-2 font-bold w-full">
    <a
      href=""
      @click.prevent="prevPage"
      class="bg-slate-200 border px-3 rounded-l-full hover:bg-slate-700 hover:text-white"
      >Prev</a
    >
    <span class="px-2 bg-slate-500 text-white w-48"
      >this {{ dataInput.countPage }} of {{ dataCourse.totalPage }}</span
    >
    <a
      href=""
      @click.prevent="nextPage"
      class="bg-slate-200 border px-3 rounded-r-full hover:bg-slate-700 hover:text-white"
      >Next</a
    >
  </div>
</template>
