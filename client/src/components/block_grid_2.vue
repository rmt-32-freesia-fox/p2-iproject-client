<script>
import CardMedium from "../particles/mnews_card.vue";
import { useFunctionStore } from "../stores/counter";
import { mapActions, mapState } from "pinia";
export default {
  components: {
    CardMedium,
  },
  methods: {
    ...mapActions(useFunctionStore, ["fetchAll"]),
  },
  computed: {
    ...mapState(useFunctionStore, ["podcastData", "sideData"]),
  },
  created() {
    this.fetchAll();
  },
};
</script>

<template>
  <figure>
    <figcaption>Listen to the T-Rex:</figcaption>
    <audio
      controls
      src="https://img.jakpost.net/podcast/2022/ai_eta_20221216_indonesia_presidential_election_2024_128kbps.mp3"
    ></audio>
  </figure>
  <div class="bg-gray-50 py-6">
    <div class="xl:container mx-auto px-3 sm:px-4 xl:px-2">
      <div class="flex flex-row flex-wrap">
        <!-- Left -->
        <div class="flex-shrink max-w-full w-full lg:w-2/3 overflow-hidden">
          <div class="w-full py-3">
            <h2 class="bg-gray-900 text-2xl font-bold text-white px-2 py-2">
              <span
                class="inline-block h-5 border-l-3 border-red-600 mr-2"
              ></span
              >Exclusive PODCAST by Jakarta Post
            </h2>
          </div>
          <div class="flex flex-row flex-wrap -mx-3">
            <div class="flex-shrink max-w-full w-full px-3 pb-5">
              <div class="relative hover-img max-h-98 overflow-hidden">
                <!--thumbnail-->
              </div>
            </div>
            <CardMedium
              v-for="(podcast, index) in podcastData"
              :key="index"
              :news="podcast"
            />
          </div>
        </div>
        <!-- right -->
        <div
          class="
            flex-shrink
            max-w-full
            w-full
            lg:w-1/3 lg:pl-8 lg:pt-14 lg:pb-8
            order-first
            lg:order-last
          "
        >
          <div class="w-full bg-white">
            <div class="mb-6">
              <div class="p-4 bg-gray-900">
                <h2 class="text-lg font-bold text-white">Top Headline</h2>
              </div>
              <ul class="post-number">
                <li
                  class="border-b border-gray-100 hover:bg-gray-50"
                  v-for="(news, index) in sideData"
                  :key="index"
                >
                  <a
                    class="
                      text-lg
                      font-bold
                      px-6
                      py-3
                      flex flex-row
                      items-center
                    "
                    :href="news.url"
                    >{{ news.title }}</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>