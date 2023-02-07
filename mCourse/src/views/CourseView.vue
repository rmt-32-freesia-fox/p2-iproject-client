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
        sort: "",
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
    nextPage() {
      this.dataInput.countPage += 1;
      this.dataInput.page = this.dataCourse.nextPageToken
        ? this.dataCourse.nextPageToken
        : "";
      this.getCourse(this.dataInput);
    },
    prevPage() {
      if (this.dataInput.countPage >= 2) {
        this.dataInput.countPage -= 1;
        this.dataInput.page = this.dataCourse.prevPageToken
          ? this.dataCourse.prevPageToken
          : "";
      }
      this.getCourse(this.dataInput);
    },
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
    <!---search-box-->
    <form action="">
      <div class="mx-auto text-center">
        <input
          type="text"
          placeholder=" What do you want ?"
          class="border border-black w-1/2 p-2"
        />
        <select name="" id="" class="p-2">
          <option value="">Data 1</option>
        </select>
        <button class="bg-black text-white p-2 font-bold">Search</button>
      </div>
    </form>
    <!----tempat serach box-->
  </div>
  <div class="grid grid-cols-4 gap-3 mt-5 p-5">
    <!---Tempat Card-->
    <!-- <card v-for="(item, i) in dataCourse.items" :key="i" :dataCard="item" /> -->
  </div>
  <div class="mx-auto text-center gap-2 font-bold w-full">
    <a
      href=""
      @click.prevent="prevPage"
      class="bg-slate-200 border px-3 rounded-l-full hover:bg-slate-700 hover:text-white"
      >Prev</a
    >
    <span class="px-2 bg-slate-500 text-white w-48"
      >this {{ dataInput.countPage }} of
      {{ dataCourse.pageInfo.totalResults }}</span
    >
    <a
      href=""
      @click.prevent="nextPage"
      class="bg-slate-200 border px-3 rounded-r-full hover:bg-slate-700 hover:text-white"
      >Next</a
    >
  </div>
</template>
