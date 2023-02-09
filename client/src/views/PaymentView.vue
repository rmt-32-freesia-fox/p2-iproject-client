<script>
import { mapStores } from "pinia";
import { useCourseStore } from "../stores/course";
import { usePublitioStore } from "../stores/publitio";
export default {
  name: "PlayerVue",
  computed: {
    ...mapStores(useCourseStore, usePublitioStore),
  },
  created() {
  },
};
</script>

<template>
    
</template>