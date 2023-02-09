<script>
import "@splidejs/vue-splide/css";
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";
export default {
  computed: {
    ...mapState(useCounterStore, ["dataPop"]),
  },
  methods: {
    ...mapActions(useCounterStore, ["popCourse"]),
  },
  created() {
    this.popCourse();
  },
};
</script>
<template>
  <Splide
    continue
    :options="{ rewind: true }"
    aria-label="My Favorite Images"
    class="shadow-lg rounded-md w-3/4"
  >
    <SplideSlide v-for="(item, i) in dataPop.items" :key="i">
      <img
        :src="item.snippet.thumbnails.high.url"
        alt="Sample 1"
        class="object-fill w-full h-64 rounded-lg"
      />
    </SplideSlide>
  </Splide>
</template>
<style scoped>
.slide {
  box-shadow: 0 6px 15px -3px rgb(0 0 0/0.3);
  padding: 25px;
  border-radius: 5px;
}
</style>
