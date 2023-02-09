<script>
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  data() {
    return {
      dataInput: {
        idCourse: this.dataCard ? this.dataCard.id.videoId : "",
        imgUrl: this.dataCard ? this.dataCard.snippet?.thumbnails.high.url : "",
        title: this.dataCard ? this.dataCard.snippet?.title : "",
        channelTitle: this.dataCard ? this.dataCard.snippet?.channelTitle : "",
        publishedAt: this.dataCard ? this.dataCard.snippet?.publishedAt : "",
      },
    };
  },
  computed: {
    ...mapState(useCounterStore, ["detailPage"]),
    getRoute() {
      return this.$route.params.id;
    },
    location() {
      return `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${window.location.href}`;
    },
  },
  methods: {
    ...mapActions(useCounterStore, ["getVideoId"]),
    formatDate(data) {
      return new Date(data).toLocaleString("id-ID", { dateStyle: "full" });
    },
    addFavorite() {
      this.addCourse(this.dataInput);
    },
  },
  created() {
    this.getVideoId(this.getRoute);
  },
};
</script>
<template>
  <div class="container mx-auto mt-16 w-fit">
    <div class="mx-auto p-2 border shadow bg-white w-1/2 m-5">
      <div>
        <div>
          <img
            :src="detailPage.items[0].snippet.thumbnails.high.url"
            alt=""
            class="object-fill w-full"
          />
          <div class="grid grid-cols-3">
            <div class="m-3 text-center font-bold">
              <img :src="location" alt="qrcode" class="mx-auto" />
              <p>SCAN HERE</p>
            </div>
            <div class="col-span-2 font-semibold text-center">
              <p class="text-xl m-2">{{ detailPage.items[0].snippet.title }}</p>
              <p>
                Total Views :
                <span
                  class="bg-black text-white p-1 border hover:border hover:border-red-600"
                  >{{ detailPage.items[0].statistics.viewCount }}</span
                >
              </p>
              <p>
                Publish At :
                {{ formatDate(detailPage.items[0].snippet.publishedAt) }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
