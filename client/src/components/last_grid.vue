<script>
import CardLarge from "../particles/lnews_card.vue";
import { useFunctionStore } from "../stores/counter";
import { mapActions, mapState } from "pinia";
export default {
  components: {
    CardLarge,
  },
  methods: {
    ...mapActions(useFunctionStore, ["fetchAll"]),
  },
  computed: {
    ...mapState(useFunctionStore, ["sideData"]),
  },
  created() {
    this.fetchAll();
  },
};
</script>

<template>
  <div class="bg-gray-50 py-6">
    <div class="xl:container mx-auto px-3 sm:px-4 xl:px-2">
      <div class="flex flex-row flex-wrap">
        <!-- post -->
        <div class="flex-shrink max-w-full w-full lg:w-2/3 overflow-hidden">
          <div class="w-full py-3">
            <h2 class="text-2xl font-bold text-red-600">
              <span
                class="inline-block h-5 border-l-3 border-red-600 mr-2"
              ></span
              >Latest news
            </h2>
          </div>
          <div class="flex flex-row flex-wrap -mx-3">
            <div class="flex-shrink max-w-full w-full px-3 pb-5">
              <div class="relative hover-img max-h-98 overflow-hidden">
                <!--thumbnail-->
                <a :href="sideData[2]?.url">
                  <img
                    class="max-w-full w-full mx-auto h-auto"
                    :src="sideData[2]?.urlToImage"
                    alt="Image description"
                  />
                </a>
                <div
                  class="
                    absolute
                    px-5
                    pt-8
                    pb-5
                    bottom-0
                    w-full
                    bg-gradient-cover
                  "
                >
                  <!--title-->
                  <a href="#">
                    <h2 class="text-3xl font-bold capitalize text-white mb-3">
                      {{ sideData[2]?.title }}
                    </h2>
                  </a>
                  <p class="text-gray-100 hidden sm:inline-block">
                    {{ sideData[2]?.description }}
                  </p>
                  <!-- author and date -->
                  <div class="pt-2">
                    <div class="text-gray-100">
                      <div
                        class="inline-block h-3 border-l-2 border-red-600 mr-2"
                      ></div>
                      {{ sideData[2]?.author }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- sidebar -->
        <div
          class="
            flex-shrink
            max-w-full
            w-full
            lg:w-1/3 lg:pr-8 lg:pt-14 lg:pb-8
            order-first
          "
        >
          
          <div class="text-sm py-6 sticky">
            <div class="w-full text-center">
              <a class="uppercase py-3 font-bold text-2xl tracking-widest" href="#">Nusantara</a>
              <a href="#">
                <img
                  class="mx-auto"
                  src="https://www.pngkit.com/png/detail/154-1542321_peta-indonesia-merah-putih.png"
                  alt="advertisement area"
                />
              </a>
            </div>
          </div>
        
        
        </div>
      </div>
    </div>
  </div>
</template>