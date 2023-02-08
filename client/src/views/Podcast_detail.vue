<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import { useFunctionStore } from "../stores/counter";
import { mapActions, mapState } from "pinia";
export default {
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      url: localStorage.url,
    };
  },
  methods: {
    ...mapActions(useFunctionStore, ["handlePodcastDetail"]),
  },
  computed: {
    ...mapState(useFunctionStore, ["podcastDetailData"]),
  },
  beforeMount() {
    this.handlePodcastDetail(this.url);
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
                      <audio
                        controls
                        :src="podcastDetailData?.audio"
                      ></audio>
                    </figure>
                    <footer class="ml-16 text-base">
                      released on :
                      <cite title="Source Title">{{
                        podcastDetailData?.published_at
                      }}</cite>
                    </footer>
                  </blockquote>

                  <p class="mb-5">
                    Mauris eget lectus et nisi commodo tristique. Aenean eget
                    ornare dui. Maecenas bibendum lacus ante, vitae pellentesque
                    ex elementum convallis.
                  </p>
                  <p class="mb-5">
                    Mauris lobortis leo a neque congue, quis pretium libero
                    efficitur. Sed congue ipsum ac mollis egestas. Sed venenatis
                    nisl nibh, in blandit nisi varius sed. Pellentesque molestie
                    lacus ut justo molestie tristique. Curabitur pretium ipsum
                    ex, a rhoncus arcu tempus ut. Fusce elementum placerat
                    tellus id blandit.
                  </p>

                  <p class="mb-5">
                    Sed condimentum neque ligula, id dapibus enim ornare id.
                    Duis porttitor, risus vehicula convallis sagittis, ligula
                    nisi iaculis libero.
                  </p>

                  <p class="mb-5">
                    Morbi at lacinia risus. Donec vitae justo sed augue
                    sollicitudin dignissim ut vitae ipsum. Proin at imperdiet
                    ante, non blandit mauris. Nullam eu lobortis justo.
                  </p>
                  <p class="mb-5">
                    Fusce vestibulum blandit justo non rhoncus. Maecenas eget
                    felis id orci ultricies frin gilla. Aliquam suscipit enim
                    felis. Praesent arcu dui, rutrum et molestie sed, volutpat
                    auctor lorem. Fusce sit amet libero odio. Integer sed nisl
                    turpis. Integer mollis sed est eget convallis. Interdum et
                    malesuada fames ac ante ipsum primis in faucibus.
                  </p>
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

            <div class="text-sm py-6 sticky">
              <div class="w-full text-center">
                <a class="uppercase" href="#">Advertisement</a>
                <a href="#">
                  <img
                    class="mx-auto"
                    src="src/img/ads/250.jpg"
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
  <Footer />

  <!-- end main -->
</template>