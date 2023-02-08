<script>
import { mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  props: {
    dataCard: Object,
    cardName: String,
  },
  data() {
    return {
      dataInput: {
        idCourse: this.dataCard ? this.dataCard.id.videoId : "",
        imgUrl: this.dataCard ? this.dataCard.snippet?.thumbnails.high.url : "",
        title: this.dataCard ? this.dataCard.snippet?.title : "",
        description: this.dataCard ? this.dataCard.snippet?.description : "",
        channelTitle: this.dataCard ? this.dataCard.snippet?.channelTitle : "",
        publishedAt: this.dataCard ? this.dataCard.snippet?.publishedAt : "",
      },
    };
  },
  methods: {
    ...mapActions(useCounterStore, ["getVideoId", "addCourse"]),
    btnDetail(value) {
      this.getVideoId(value);
    },
    formatDate(data) {
      return new Date(data).toLocaleString("id-ID", { dateStyle: "full" });
    },
    addFavorite() {
      this.addCourse(this.dataInput);
    },
  },
};
</script>
<template>
  <div
    v-if="cardName == 'favorites'"
    class="max-w-sm rounded overflow-hidden shadow-lg h-36rem flex flex-col justify-between w-fit"
  >
    <img class="w-full" :src="dataCard.imgUrl" alt="Sunset in the mountains" />
    <!-- <div class="flex flex-col justify-between"> -->
    <div class="px-6 py-4">
      <div class="font-bold text-md mb-2">{{ dataCard.title }}</div>
      <p class="text-gray-700 text-sm">
        {{ dataCard.description.slice(0, 80) }}...
      </p>
    </div>
    <div class="pl-6 font-bold text-gray-700">
      <p>Author: {{ dataCard.channelTitle }}</p>
      <p class="text-xs">publishedAt: {{ formatDate(dataCard.publishedAt) }}</p>
    </div>
    <div class="px-6 pt-4 pb-2">
      <a
        @click.prevent="btnDetail(dataCard.videoId)"
        href
        class="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2 hover:bg-gray-200 hover:text-gray-700 border border-black hover:border hover:border-black"
        >Watch Now
      </a>
      <a
        href=""
        @click.prevent=""
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-600 hover:text-white"
        >Subscribe Now</a
      >
      <a
        href=""
        class="rounded-full p-1 px-2.5 bg-red-600 text-white hover:bg-red-900 font-bold"
        >X</a
      >
    </div>

    <!-- </div> -->
  </div>
  <div
    v-else
    class="max-w-sm rounded overflow-hidden shadow-lg h-36rem flex flex-col justify-between"
  >
    <img
      class="w-full"
      :src="dataCard.snippet.thumbnails.high.url"
      alt="Sunset in the mountains"
    />
    <!-- <div class="flex flex-col justify-between"> -->
    <div class="px-6 py-4">
      <div class="font-bold text-md mb-2">{{ dataCard.snippet.title }}</div>
      <p class="text-gray-700 text-sm">
        {{ dataCard.snippet.description.slice(0, 80) }}...
      </p>
    </div>
    <div class="pl-6 font-bold text-gray-700">
      <p>Author: {{ dataCard.snippet.channelTitle }}</p>
      <p class="text-xs">
        publishedAt: {{ formatDate(dataCard.snippet.publishedAt) }}
      </p>
    </div>
    <div class="px-6 pt-4 pb-2">
      <a
        @click.prevent="btnDetail(dataCard.id.videoId)"
        href
        class="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2 hover:bg-gray-200 hover:text-gray-700 border border-black hover:border hover:border-black"
        >read more
      </a>
      <a
        href=""
        @click.prevent=""
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-600 hover:text-white"
        >add favorite</a
      >
    </div>
    <!-- </div> -->
  </div>
</template>
<style scoped>
.h-36rem {
  height: 36rem;
}
</style>
