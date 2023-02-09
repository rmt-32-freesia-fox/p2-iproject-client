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
    ...mapState(useFunctionStore, ["podcastAllData","sideData"]),
  },

  created() {
    this.fetchAll();
  },
};
</script>

<template>
  <Navbar />
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
              >PODCAST by Jakarta Post
            </h2>
          </div>
          <div class="flex flex-row flex-wrap -mx-3">
            <div class="flex-shrink max-w-full w-full px-3 pb-5">
              <div class="relative hover-img max-h-98 overflow-hidden">
                <!--thumbnail-->
                <a href="#">
                  <img
                    class="max-w-full w-full mx-auto h-auto"
                    src="https://www.inventanalytics.com/media/cswn1xuk/ia-conversations-podcast-banner.png"
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

                  <!-- author and date -->
                  <div class="pt-2">
                    <div class="text-gray-100">
                      <div
                        class="inline-block h-3 border-l-2 border-red-600 mr-2"
                      ></div>
                      Exclusive from Jakarta Post
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- card start -->
            <CardMedium
              v-for="(podcast, index) in podcastAllData"
              :key="index"
              :news="podcast"
            />
            <!-- end card -->
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

          <div class="text-sm py-6 sticky">
            <div class="w-full text-center">
              <a href="#">
                <img
                  class="mx-auto"
                  src="https://www.teachercast.net/wp-content/uploads/2019/12/Educational-Podcasting-Today-Podcast-Square-1400x1400.jpg"
                  alt="advertisement area"
                />
              </a>
            </div>
          </div>
          <div class="text-sm py-6 sticky">
            <div class="w-full text-center">
              <a href="#">
                <img
                  class="mx-auto"
                  src="https://www.historylink.org/Content/Images/SquareOneLogo.jpg"
                  alt="advertisement area"
                />
              </a>
            </div>
          </div>
          <div class="text-sm py-6 sticky">
            <div class="w-full text-center">
              <a href="#">
                <img
                  class="mx-auto"
                  src="https://americanpublicsquare.org/wp-content/uploads/2022/01/APS_BothSides_Logo_RGB.png"
                  alt="advertisement area"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>