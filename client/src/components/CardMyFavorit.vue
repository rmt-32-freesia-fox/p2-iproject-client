<script>
import { useCounterStore } from "../stores/counter";
import { mapActions, mapState } from "pinia";

export default {
  props: ["item"],

  methods: {
    ...mapActions(useCounterStore, ["destroyMyExercise", "getMyExercise"]),
    handleDestroy(id) {
      this.destroyMyExercise(id);
    },
  },

  created() {
    this.getMyExercise();
  },
};
</script>

<template>
  <div class="col-lg-4 col-md-6">
    <div class="bg-light rounded text-center p-5">
      <img
        :src="item.Exercise.image"
        style="width: 200px; height: 200px"
        alt=""
      />
      <h3 class="text-uppercase my-4">{{ item.Exercise.name }}</h3>
      <h5 class="text-uppercase my-4" style="color: #fb5b21"></h5>
      <a
        @click.prevent="handleDestroy(item.id)"
        class="text-uppercase"
        style="color: blue; cursor: pointer"
        >Delete Favorite <i class="bi bi-arrow-right"></i
      ></a>
    </div>
  </div>
</template>
