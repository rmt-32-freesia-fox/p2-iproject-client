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
    ...mapActions(useFunctionStore, ["fetchAll", "deletePlaylist"]),
  },
  computed: {
    ...mapState(useFunctionStore, ["playlistAllData", "sideData"]),
  },
  beforeMount() {
    this.fetchAll();
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
            <div class="w-full py-3">
              <h2 class="text-gray-800 text-2xl font-bold">
                <span
                  class="inline-block h-5 border-l-3 border-red-600 mr-2"
                ></span
                >Playlist
              </h2>
            </div>
            <div class="flex flex-row flex-wrap -mx-3">
              <div class="flex-shrink max-w-full w-full px-3 pb-5">
                <div class="relative hover-img max-h-98 overflow-hidden">
                  <!--thumbnail-->
                  <a href="#">
                    <img
                      class="max-w-full w-full mx-auto h-auto"
                      src="https://scontent.fcgk18-1.fna.fbcdn.net/v/t39.30808-6/275486503_2755863861374487_148657840363720200_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeGybY2X_IIU4OCRH1yzjuKMwufvEmxBUVnC5-8SbEFRWbxs0hjJLfMsTxbvHzOkmlPQmCGqS2Bsz_4P3XafDWey&_nc_ohc=Q6SOONR_H-0AX__RyQ9&tn=hRmUjoQOlLEKDShB&_nc_ht=scontent.fcgk18-1.fna&oh=00_AfDoUsSrYkjTUZcSTKzSDCnjMyZoV3neCpjAIkMytxufvA&oe=63E90A23"
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
                    <!-- author and date -->
                  </div>
                </div>
              </div>

              <div
                v-for="(podcast, index) in playlistAllData"
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
                      :src="podcast?.Playlist?.image"
                      alt="alt title"
                    />
                  </a>
                  <div class="py-0 sm:py-3 pl-3 sm:pl-0">
                    <h3 class="flex text-lg font-bold leading-tight mb-2">
                      <a href="#">{{ podcast?.Playlist?.title }}</a>
                      <a
                        class="text-gray-500"
                        href="#"
                        @click.prevent="
                          deletePlaylist({
                            PlaylistId: podcast?.Playlist?.id,
                            UserPlaylistId: podcast?.id,
                          })
                        "
                      >
                        <svg
                          style="color: red"
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          class="bi bi-dash-circle-fill"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z"
                            fill="red"
                          ></path>
                        </svg>
                      </a>
                    </h3>
                    <figure>
                      <audio controls :src="podcast?.Playlist?.audio"></audio>
                    </figure>
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
                    v-for="(news, index) in sideData"
                    :key="index"
                    class="border-b border-gray-100 hover:bg-gray-50"
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
  </main>
  <!-- end main -->

  <Footer />
</template>