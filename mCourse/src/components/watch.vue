<script>
import { mapState } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  computed: {
    ...mapState(useCounterStore, ["dataWatch"]),
  },
};
</script>
<template>
  <div class="mx-auto mt-28 text-center">
    <h1 class="text-xl font-bold m-5">
      Thanks for Subscribe Video [{{ dataWatch.title }}]
    </h1>
    <iframe
      width="760"
      height="440"
      :src="dataWatch.dataLink"
      class="mx-auto shadow-lg"
    >
    </iframe>
  </div>
</template>
