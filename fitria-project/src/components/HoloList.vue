<script>
import HoloCard from "./HoloCard.vue";
import { mapActions, mapState } from "pinia";
import { useHoloStore } from "../stores/holomember";
export default {
  name: "HoloList",
  components: { HoloCard },
  computed: {
    ...mapState(useHoloStore, ["holos"]),
  },
  methods: {
    ...mapActions(useHoloStore, ["getChannels"]),
  },
  created() {
    this.getChannels();
  },
};
</script>
<template>
  <div class="container">
    <div class="row">
      <HoloCard v-for="holo in holos" :key="holo.id" :holo="holo" />
    </div>
  </div>
</template>
