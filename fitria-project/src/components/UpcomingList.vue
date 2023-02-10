<script>
import UpcomingDetail from "./UpcomingDetail.vue";
import { mapState } from "pinia";
import { useHoloStore } from "../stores/holomember";
export default {
  name: "UpcomingList",
  components: { UpcomingDetail },
  computed: {
    ...mapState(useHoloStore, ["upcomings"]),
  },
};
</script>
<template>
  <UpcomingDetail
    v-for="upcoming in upcomings"
    :key="upcoming.id"
    :upcoming="upcoming"
  />
</template>
