<script>
import { useCounterStore } from "../stores/counter";
import { mapActions, mapState } from "pinia";

export default {
  props: ["item"],
  computed: {
    ...mapState(useCounterStore, ["isLogin"]),
  },
  methods: {
    ...mapActions(useCounterStore, ["addMyExercise", "getMyExercise"]),
    handleAddBookmark(id) {
      this.addMyExercise(id);
    },
  },
};
</script>

<template>
  <div class="col-lg-4 col-md-6">
    <div class="bg-light rounded text-center p-5">
      <img :src="item.image" style="width: 200px; height: 200px" alt="" />
      <h3 class="text-uppercase my-4">{{ item.name }}</h3>
      <h5 class="text-uppercase my-4" style="color: #fb5b21">
        {{ item.bodyPart }}
      </h5>
      <a
        @click.prevent="handleAddBookmark(item.id)"
        class="text-uppercase"
        style="color: blue; cursor: pointer"
        >Add Favorite <i class="bi bi-arrow-right"></i
      ></a>
    </div>
  </div>
</template>
