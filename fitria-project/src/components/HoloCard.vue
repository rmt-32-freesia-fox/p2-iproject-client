<script>
import { mapActions, mapState } from "pinia";
import { useUserStore } from "../stores/user";
import { useHoloStore } from "../stores/holomember";

export default {
  name: "HoloCard",
  props: ["holo"],
  computed: {
    ...mapState(useUserStore, ["isLogin"]),
  },
  methods: {
    ...mapActions(useHoloStore, ["getLiveStreaming", "getUpcomingsStreaming"]),
    localGetLiveStreaming() {
      this.getLiveStreaming(this.holo.id);
    },
    localGetUpcomingsStreaming() {
      // console.log(this.movies)
      this.getUpcomingsStreaming(this.holo.id);
    },
  },
};
</script>
<template>
  <div class="col-md-4">
    <div class="card p-3 mb-2" style="width: 18rem">
      <img :src="holo.photo" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">{{ holo.name }}</h5>
        <div class="price-wrap">
          <span class="price">Since: {{ holo.published_at }}</span
          ><br />
          <span class="price">Total Subs: {{ holo.subscriber_count }}</span>
        </div>
        <button @click.prevent="localGetLiveStreaming" class="btn btn-primary">
          Live
        </button>
        <button
          v-if="isLogin"
          @click.prevent="localGetUpcomingsStreaming"
          class="btn btn-danger"
        >
          Upcoming
        </button>
      </div>
    </div>
  </div>
</template>
