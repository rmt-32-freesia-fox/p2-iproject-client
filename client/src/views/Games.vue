<script>
import { useFunctionStore } from "../stores/counter";
import { mapActions, mapState } from "pinia";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import CardMedium from "../particles/mnews_card.vue";

export default {
  components: {
    Navbar,
    Footer,
    CardMedium,
  },
  methods: {
    ...mapActions(useFunctionStore, ["fetchAll"]),
  },
  computed: {
    ...mapState(useFunctionStore, ["gamesData", "sideData"]),
  },

  created() {
    this.fetchAll();
  },
};
</script>

<template>
  <Navbar />

  <main id="content">
    <!-- advertisement -->

    <!-- block news -->
    <div class="bg-gray-50 py-12">
      <div class="xl:container mx-auto px-3 sm:px-4 xl:px-2">
        <div class="flex flex-row flex-wrap">
          <!-- Left -->
          <div class="flex-shrink max-w-full w-full lg:w-2/3 overflow-hidden">
            <div class="w-full py-3">
              <h2 class="text-gray-800 text-2xl font-bold">
                <span
                  class="inline-block h-5 border-l-3 border-red-600 mr-2"
                ></span
                >Games
              </h2>
            </div>
            <div class="flex flex-row flex-wrap -mx-3">
              <div class="flex-shrink max-w-full w-full px-3 pb-5">
                <div class="relative hover-img max-h-98 overflow-hidden">
                  <!--thumbnail-->
                  <a href="#">
                    <img
                      class="max-w-full w-full mx-auto h-auto"
                      :src="gamesData[8]?.thumb"
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
                        {{ gamesData[8]?.title }}
                      </h2>
                    </a>
                    <p class="text-gray-100 hidden sm:inline-block">
                      {{ gamesData[8]?.desc }}
                    </p>
                    <!-- author and date -->
                    <div class="pt-2">
                      <div class="text-gray-100">
                        <div
                          class="
                            inline-block
                            h-3
                            border-l-2 border-red-600
                            mr-2
                          "
                        ></div>
                        {{ gamesData[8]?.time }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                v-for="(games, index) in gamesData"
                :key="index"
                class="
                  flex-shrink
                  max-w-full
                  w-full
                  sm:w-1/3
                  px-3
                  pb-3
                  pt-3
                  sm:pt-0
                  border-b-2
                  sm:border-b-0
                  border-dotted border-gray-100
                "
              >
                <div class="flex flex-row sm:block hover-img">
                  <a href="">
                    <img
                      class="max-w-full w-full mx-auto"
                      :src="games?.thumb"
                      alt="alt title"
                    />
                  </a>
                  <div class="py-0 sm:py-3 pl-3 sm:pl-0">
                    <h3 class="text-lg font-bold leading-tight mb-2">
                      <a href="#">{{ games?.title }}</a>
                    </h3>
                    <p class="hidden md:block text-gray-600 leading-tight mb-1">
                      {{ games?.desc.slice(0, 80) }}...
                    </p>
                    <a class="text-gray-500" href="#"
                      ><span
                        class="inline-block h-3 border-l-2 border-red-600 mr-2"
                      ></span>
                      {{ games?.time }}</a
                    >
                  </div>
                </div>
              </div>
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
                  <h2 class="text-lg font-bold text-white">Most Popular</h2>
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

            <div class="text-sm py-6 sticky">
              <div class="w-full text-center">
                <a class="uppercase" href="#"></a>
                <a href="#">
                  <img
                    class="mx-auto"
                    src="https://gh.cdn.sewest.net/assets/ident/news/2019-review-square-enix-collective/en_US/square-enix-collective-logo.jpg?quality=65"
                    alt="advertisement area"
                  />
                </a>
              </div>
            </div>
            <div class="text-sm py-6 sticky">
              <div class="w-full text-center">
                <a class="uppercase" href="#"></a>
                <a href="#">
                  <img
                    class="mx-auto"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Pc_game_logo.png/600px-Pc_game_logo.png?20220324094719"
                    alt="advertisement area"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <!-- end main -->
  <Footer />
</template>