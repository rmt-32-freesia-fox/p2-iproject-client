<script>
import { mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  props: {
    dataCard: Object,
  },
  methods: {
    ...mapActions(useCounterStore, ["getVideoId"]),
    btnDetail(value) {
      this.getVideoId(value);
    },
  },
};
</script>
<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg">
    <img
      class="w-full"
      :src="dataCard.snippet.thumbnails.high.url"
      alt="Sunset in the mountains"
    />
    <div class="grid justify-end">
      <div class="px-6 py-4">
        <div class="font-bold text-md mb-2">{{ dataCard.snippet.title }}</div>
        <p class="text-gray-700 text-sm">
          {{ dataCard.snippet.description.slice(0, 80) }}...
        </p>
      </div>
      <div class="pl-6 font-bold text-gray-700">
        <p>Author: {{ dataCard.snippet.channelTitle }}</p>
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
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-600 hover:text-white"
          >add favorite</a
        >
      </div>
    </div>
  </div>
</template>
