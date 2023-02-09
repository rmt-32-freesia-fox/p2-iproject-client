<script>
import { useFunctionStore } from "../stores/counter";
import { mapActions, mapState } from "pinia";
import Cardsmall from "../particles/snews_card.vue";

export default {
  methods: {
    ...mapActions(useFunctionStore, ["fetchHeroData"]),
  },
  computed: {
    ...mapState(useFunctionStore, ["heroData"]),
  },
  components: {
    Cardsmall,
  },
  created() {
    this.fetchHeroData();
  },
};
</script>

<template>
  <div class="bg-white py-6">
    <div class="xl:container mx-auto px-3 sm:px-4 xl:px-2">
      <!-- big grid 1 -->
      <div class="flex flex-row flex-wrap">
        <!--Start left cover-->

        <div
          v-if="heroData"
          class="flex-shrink max-w-full w-full lg:w-1/2 pb-1 lg:pb-0 lg:pr-1"
        >
          <div class="relative hover-img max-h-98 overflow-hidden">
            <a :href="heroData?.big?.url">
              <img
                :src="heroData?.big?.urlToImage"
                class="max-w-full w-full mx-auto h-auto"
                alt="Image description"
              />
            </a>
            <div
              class="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover"
            >
              <a :href="heroData?.big?.url">
                <h2 class="text-3xl font-bold capitalize text-white mb-3">
                  {{ heroData?.big?.title }}
                </h2>
              </a>
              <p class="text-gray-100 hidden sm:inline-block">
                {{ heroData?.big?.description }}
              </p>
              <div class="pt-2">
                <div class="text-gray-100">
                  <div
                    class="inline-block h-3 border-l-2 border-red-600 mr-2"
                  ></div>
                  {{ heroData?.big?.author }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--Start box news-->
        <div class="flex-shrink max-w-full w-full lg:w-1/2">
          <div class="box-one flex flex-row flex-wrap">
            <Cardsmall
              v-for="(news, index) in heroData.small"
              :key="index"
              :news="news"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>