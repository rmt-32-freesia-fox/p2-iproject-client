<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import { useFunctionStore } from "../stores/counter";
import { mapActions, mapState } from "pinia";
import axios from "axios";

export default {
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      url: localStorage.url,
      podcastQr: "",
    };
  },
  methods: {
    ...mapActions(useFunctionStore, ["handlePodcastDetail", "addToPlaylist"]),
    async handleQR(audio) {
      this.podcastQr = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${audio}`;
    },
  },
  computed: {
    ...mapState(useFunctionStore, ["podcastDetailData"]),
  },
  beforeMount() {
    this.handlePodcastDetail(this.url);
  },
  created() {
    this.handleQR(this.podcastDetailData.audio);
  },
};
</script>

<template>
  <Navbar />

  <main id="content">
    <!-- block news -->
    <div class="bg-gray-50 py-12">
      <div class="xl:container mx-auto px-3 sm:px-4 xl:px-2">
        <div class="flex flex-row flex-wrap">
          <!-- Left -->
          <div class="flex-shrink max-w-full w-full lg:w-2/3 overflow-hidden">
            <div class="w-full py-3 mb-3">
              <h2 class="text-gray-800 text-3xl font-bold">
                <span
                  class="inline-block h-5 border-l-3 border-red-600 mr-2"
                ></span>
                PODCAST
              </h2>
            </div>
            <div class="flex flex-row flex-wrap -mx-3">
              <div class="max-w-full w-full px-4">
                <!-- Post content -->
                <div class="leading-relaxed pb-4">
                  <h1
                    class="
                      w-full
                      float-left
                      text-6xl
                      leading-normal
                      mb-2
                      font-semibold
                      text-gray-800
                      dark:text-gray-100
                    "
                  >
                    <!-- {{ podcastDetailData }} -->
                    {{ podcastDetailData?.title }}
                  </h1>
                  <figure class="text-center mb-6">
                    <img
                      class="max-w-full h-auto"
                      :src="podcastDetailData?.image"
                      alt="Image description"
                    />
                  </figure>
                  
                  <h3
                    class="
                      text-2xl
                      leading-normal
                      mb-2
                      font-semibold
                      text-gray-800
                      dark:text-gray-100
                    "
                  >
                    Topic :
                  </h3>

                  <p class="mb-5"></p>
                  <blockquote
                    class="
                      relative
                      p-4
                      border-l-4 border-red-700
                      bg-gray-100
                      dark:bg-gray-900 dark:bg-opacity-40
                      mb-4
                      text-xl
                    "
                  >
                    <span class="absolute opacity-80 w-8 h-8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="text-red-700"
                        viewBox="0 0 270.000000 270.000000"
                      >
                        <g
                          transform="translate(0.000000,270.000000) scale(0.100000,-0.100000)"
                          fill="currentColor"
                          stroke="none"
                        >
                          <path
                            d="M920 2182 c-290 -124 -482 -341 -540 -610 -30 -140 -40 -296 -40 -644 l0 -328 370 0 370 0 0 370 0 370 -181 0 -181 0 7 63 c26 243 129 387 342 477 35 15 66 29 69 32 7 7 -132 298 -143 298 -4 0 -37 -13 -73 -28z"
                          ></path>
                          <path
                            d="M2179 2186 c-249 -103 -442 -295 -520 -516 -50 -142 -61 -247 -66 -677 l-5 -393 371 0 371 0 0 370 0 370 -181 0 -181 0 7 53 c21 170 67 281 150 363 51 49 143 107 215 134 19 7 39 17 44 21 10 9 -124 298 -139 298 -5 0 -35 -10 -66 -23z"
                          ></path>
                        </g>
                      </svg>
                    </span>
                    <p class="ml-16 mb-4">
                      {{ podcastDetailData?.post_content }}
                    </p>
                    <figure>
                      <figcaption>Listen :</figcaption>
                      <audio controls :src="podcastDetailData?.audio"></audio>
                    </figure>

                    <footer class="flex ml-16 text-base">
                      released on :
                      <cite title="Source Title">{{
                        podcastDetailData?.published_at
                      }}</cite>
                      <a
                        href="#"
                        @click.prevent="addToPlaylist(podcastDetailData)"
                      >
                        <div class="flex px-5">
                          Add to Playlist
                          <svg
                            style="color: red"
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            fill="currentColor"
                            class="bi bi-plus-circle-fill"
                            viewBox="0 0 16 16"
                          >
                            <path
                              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"
                              fill="red"
                            ></path>
                          </svg>
                          
                        </div>
                      </a>
                    </footer>
                  </blockquote>
                    <img
                    class="max-w-full h-auto"
                    :src="podcastQr"
                    alt="Image description"
                  />
                  Mobile Device Access
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
                <div class="p-4 bg-gray-100">
                  <h2 class="text-lg font-bold">Most Popular</h2>
                </div>
                <ul class="post-number">
                  <li class="border-b border-gray-100 hover:bg-gray-50">
                    <a
                      class="
                        text-lg
                        font-bold
                        px-6
                        py-3
                        flex flex-row
                        items-center
                      "
                      href="#"
                      >ZF plans $14 billion autonomous vehicle push, concept
                      van</a
                    >
                  </li>
                  <li class="border-b border-gray-100 hover:bg-gray-50">
                    <a
                      class="
                        text-lg
                        font-bold
                        px-6
                        py-3
                        flex flex-row
                        items-center
                      "
                      href="#"
                      >ZF plans $14 billion autonomous vehicle push, concept
                      van</a
                    >
                  </li>
                  <li class="border-b border-gray-100 hover:bg-gray-50">
                    <a
                      class="
                        text-lg
                        font-bold
                        px-6
                        py-3
                        flex flex-row
                        items-center
                      "
                      href="#"
                      >ZF plans $14 billion autonomous vehicle push, concept
                      van</a
                    >
                  </li>
                  <li class="border-b border-gray-100 hover:bg-gray-50">
                    <a
                      class="
                        text-lg
                        font-bold
                        px-6
                        py-3
                        flex flex-row
                        items-center
                      "
                      href="#"
                      >ZF plans $14 billion autonomous vehicle push, concept
                      van</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <Footer />

  <!-- end main -->
</template>