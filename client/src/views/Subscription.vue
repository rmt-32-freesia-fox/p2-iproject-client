<script>
import { useFunctionStore } from "../stores/counter";
import { mapActions, mapState } from "pinia";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
export default {
  components: {
    Navbar,
    Footer,
  },
  methods: {
    ...mapActions(useFunctionStore, ["fetchPodcast", "handlePayment"]),
  },
  computed: {
    ...mapState(useFunctionStore, ["podcastAllData"]),
  },

  created() {
    this.fetchPodcast();
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
              <h2 class="text-gray-800 text-3xl font-bold">
                <span
                  class="inline-block h-5 border-l-3 border-red-600 mr-2"
                ></span>
                Go Premium
              </h2>
            </div>
            <div class="flex flex-row flex-wrap mx-3 pb-10">
              <div class="flex-shrink max-w-full w-full px-3 pb-5">
                <div class="px-8 py-6 border border-gray-100 bg-white">
                  <form class="flex flex-wrap flex-row -mx-4">
                    <div class="flex-shrink max-w-full px-4 w-full mb-6">
                      <label
                        for="exampleTextarea1"
                        class="inline-block mb-2"
                      ></label>
                      <div class="container my-24 px-6 mx-auto">
                        <!-- Section: Design Block -->
                        <section class="mb-32 text-gray-800">
                          <div class="block rounded-lg shadow-lg bg-white">
                            <div class="flex flex-wrap items-center">
                              <div
                                class="
                                  grow-0
                                  shrink-0
                                  basis-auto
                                  block
                                  w-full
                                  lg:flex lg:w-6/12
                                  xl:w-4/12
                                "
                              >
                                <img
                                  src="https://static.gatra.com/foldershared/images/2019/fatikhin/10-Oct/noice.jpg"
                                  alt="Trendy Pants and Shoes"
                                  class="
                                    w-full
                                    rounded-t-lg
                                    lg:rounded-tr-none lg:rounded-bl-lg
                                  "
                                />
                              </div>
                              <div
                                class="
                                  grow-0
                                  shrink-0
                                  basis-auto
                                  w-full
                                  lg:w-6/12
                                  xl:w-8/12
                                "
                              >
                                <div class="px-6 py-12 md:px-12">
                                  <h2 class="text-3xl font-bold mb-6 pb-2">
                                    One-time payment
                                  </h2>

                                  <p class="text-gray-500 mb-6 pb-2">
                                    Enjoy our Exclusive Podcast with Jakarta
                                    Post, One Time Payment For Lifetime Access
                                    and Many News on The Go,
                                  </p>
                                  <pre class="text-gray-500 mb-6 pb-2">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
printer took a galley of type and scrambled it to make a type specimen book. It has
survived not only five centuries, but also
                                  </pre>
                                  <div class="flex">
                                    <div class="w-full lg:w-6/12 xl:w-4/12">
                                      <p class="flex items-center">
                                        <svg
                                          style="color: rgb(54, 245, 41)"
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="16"
                                          height="16"
                                          fill="currentColor"
                                          class="bi bi-check2-circle"
                                          viewBox="0 0 16 16"
                                        >
                                          <path
                                            d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"
                                            fill="#36f529"
                                          ></path>
                                          <path
                                            d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"
                                            fill="#36f529"
                                          ></path></svg
                                        >Support 24/7
                                      </p>
                                    </div>
                                    <div
                                      class="w-full lg:w-6/12 xl:w-4/12 mb-4"
                                    >
                                      <p class="flex items-center">
                                        <svg
                                          style="color: rgb(54, 245, 41)"
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="16"
                                          height="16"
                                          fill="currentColor"
                                          class="bi bi-check2-circle"
                                          viewBox="0 0 16 16"
                                        >
                                          <path
                                            d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"
                                            fill="#36f529"
                                          ></path>
                                          <path
                                            d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"
                                            fill="#36f529"
                                          ></path></svg
                                        >Analytics
                                      </p>
                                    </div>
                                    <div
                                      class="w-full lg:w-6/12 xl:w-4/12 mb-4"
                                    >
                                      <p class="flex items-center">
                                        <svg
                                          style="color: rgb(54, 245, 41)"
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="16"
                                          height="16"
                                          fill="currentColor"
                                          class="bi bi-check2-circle"
                                          viewBox="0 0 16 16"
                                        >
                                          <path
                                            d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"
                                            fill="#36f529"
                                          ></path>
                                          <path
                                            d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"
                                            fill="#36f529"
                                          ></path></svg
                                        >Components
                                      </p>
                                    </div>
                                    <div
                                      class="w-full lg:w-6/12 xl:w-4/12 mb-4"
                                    >
                                      <p class="flex items-center">
                                        <svg
                                          style="color: rgb(54, 245, 41)"
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="16"
                                          height="16"
                                          fill="currentColor"
                                          class="bi bi-check2-circle"
                                          viewBox="0 0 16 16"
                                        >
                                          <path
                                            d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"
                                            fill="#36f529"
                                          ></path>
                                          <path
                                            d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"
                                            fill="#36f529"
                                          ></path></svg
                                        >Updates
                                      </p>
                                    </div>
                                    <div
                                      class="w-full lg:w-6/12 xl:w-4/12 mb-4"
                                    >
                                      <p class="flex items-center">
                                        <svg
                                          style="color: rgb(54, 245, 41)"
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="16"
                                          height="16"
                                          fill="currentColor"
                                          class="bi bi-check2-circle"
                                          viewBox="0 0 16 16"
                                        >
                                          <path
                                            d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"
                                            fill="#36f529"
                                          ></path>
                                          <path
                                            d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"
                                            fill="#36f529"
                                          ></path></svg
                                        >Reports
                                      </p>
                                    </div>
                                    <div
                                      class="w-full lg:w-6/12 xl:w-4/12 mb-4"
                                    >
                                      <p class="flex items-center">
                                        <svg
                                          style="color: rgb(54, 245, 41)"
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="16"
                                          height="16"
                                          fill="currentColor"
                                          class="bi bi-check2-circle"
                                          viewBox="0 0 16 16"
                                        >
                                          <path
                                            d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"
                                            fill="#36f529"
                                          ></path>
                                          <path
                                            d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"
                                            fill="#36f529"
                                          ></path></svg
                                        >Mobile
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                        <!-- Section: Design Block -->
                        <div class="flex pb-4">
                          <img
                            class="h-8 px-4"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/QRIS_logo.svg/384px-QRIS_logo.svg.png"
                            alt=""
                          />
                          <img
                            class="h-8 px-4"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Visa.svg/200px-Visa.svg.png"
                            alt=""
                          />
                          <img
                            class="h-8 px-4"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/300px-MasterCard_Logo.svg.png"
                            alt=""
                          />
                          <img
                            class="h-8 px-4"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/150px-American_Express_logo_%282018%29.svg.png"
                            alt=""
                          />
                          <img
                            class="h-8 px-4"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/JCB_logo.svg/200px-JCB_logo.svg.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div class="flex-shrink max-w-full px-4 w-full mb-6">
                        <label class="flex items-center">
                          <input
                            type="checkbox"
                            name="checked-demo"
                            value="1"
                            class="
                              form-checkbox
                              h-5
                              w-5
                              text-blue-500
                              dark:bg-gray-700
                              border border-gray-100
                              dark:border-gray-700
                              focus:outline-none
                            "
                            required
                          />
                          <span class="text-gray-700 ml-4"
                            >I agree to the Terms of Use</span
                          >
                        </label>
                      </div>
                      <div class="flex-shrink max-w-full px-4 w-full">
                        <button
                          @click.prevent="handlePayment()"
                          class="
                            flex
                            items-center
                            py-3
                            px-5
                            leading-5
                            text-gray-100
                            bg-red-600
                            hover:text-white hover:bg-gray-900 hover:ring-0
                            focus:outline-none focus:ring-0
                          "
                          type="submit"
                        >
                          Subscribe Now
                        </button>
                      </div>
                    </div>
                  </form>
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
            <div class="text-xl py-6 sticky font-bold">
              <div class="w-full text-center">
                <a class="uppercase" href="#">Subscribe our Youtube</a>
                <a href="#">
                  <img
                    class="mx-auto"
                    src="https://cdn.pixabay.com/photo/2020/07/15/21/04/subscribe-5408999__340.png"
                    alt="advertisement area"
                  />
                </a>
              </div>
            </div>
            <div class="text-xl py-6 sticky font-bold">
              <div class="w-full text-center">
                <p class="mb-12">Listen to 100+ podcaster</p>
                <a href="#">
                  <div class="flex shrink">
                    <img
                      class="h-20"
                      src="https://images.noiceid.cc/catalog/300x300/content-1660037057854"
                      alt="advertisement area"
                    />
                    <img
                      class="px-3 h-20"
                      src="https://thumb2.svara.id/unsafe/300x300/svara-radiocontent-coverart/bq0ha6r4gcar6bhs6tz0.p1080x1080.jpeg"
                      alt="advertisement area"
                    />
                    <img
                      class="px-3 h-20"
                      src="https://images.noiceid.cc/catalog/300x300/content-1660034509298"
                      alt="advertisement area"
                    />
                    <img
                      class="px-3 h-20"
                      src="https://www.noice.id/wp-content/uploads/2022/09/BERIZIK.jpg"
                      alt="advertisement area"
                    />
                    <img
                      class="px-3 h-20"
                      src="https://indotelko.com/images/media/202204/ori/Photo%20(1).jpg"
                      alt="advertisement area"
                    />
                  </div>
                  <div class="flex shrink py-4">
                    <img
                      class="px-3 h-20"
                      src="https://www.noice.id/wp-content/uploads/2022/09/PerempuanBersuara-Podcast-Noice.jpg"
                      alt="advertisement area"
                    />
                    <img
                      class="px-3 h-20"
                      src="https://akcdn.detik.net.id/community/media/visual/2021/11/18/noice-original-1.jpeg?w=700&q=90"
                      alt="advertisement area"
                    />
                    <img
                      class="px-3 h-20"
                      src="https://akcdn.detik.net.id/community/media/visual/2021/11/18/noice-original.jpeg?w=1080"
                      alt="advertisement area"
                    />
                    <img
                      class="px-3 h-20"
                      src="https://akcdn.detik.net.id/community/media/visual/2021/11/18/noice-original-2.jpeg?w=1080"
                      alt="advertisement area"
                    />
                  </div>
                </a>
              </div>
            </div>
            <div class="text-xl py-6 sticky font-bold">
              <div class="w-full text-center">
                <a class="uppercase" href="#">Powered By</a>
                <a href="#">
                  <img
                    class="mx-auto"
                    src="https://i.pinimg.com/736x/2b/d9/23/2bd92331d8c2b6887cf028a7115ccd20.jpg"
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