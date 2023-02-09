<script>
import { mapActions } from "pinia";
import { useFunctionStore } from "../stores/counter";

import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
export default {
  data() {
    return {
      register: {
        email: "",
        password: "",
      },
      login: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(useFunctionStore, ["handleLogin", "handleRegister","handleGoogleSign"]),
  },
  components: {
    Navbar,
    Footer,
  },
};
</script>

<template>
  <Navbar />
  <div class="">
    <main>
      <!-- block news -->
      <div class="bg-gray-50 py-6">
        <div class="xl:container mx-auto px-3 sm:px-4 xl:px-2">
          <div class="flex flex-row flex-wrap">
            <!-- Left -->
            <div
              class="
                flex-shrink
                max-w-full
                w-full
                lg:w-2/3
                overflow-hidden
                pt-36
              "
            ></div>
            <div
              class="
                flex-shrink
                max-w-full
                w-full
                lg:w-2/3
                px-14
                overflow-hidden
              "
            >
              <div class="w-full py-12">
                <h2 class="text-gray-800 text-3xl font-bold">
                  <span
                    class="inline-block h-5 border-l-3 border-red-600 mr-2"
                  ></span
                  >Register
                </h2>
              </div>
              <div class="flex flex-row flex-wrap -mx-3">
                <div class="flex-shrink max-w-full w-full px-3 pb-5">
                  <div class="px-8 py-6 border border-gray-100 bg-white">
                    <form
                      @submit.prevent="
                        handleRegister({
                          email: register.email,
                          password: register.password,
                        })
                      "
                      class="flex flex-wrap flex-row -mx-4"
                    >
                      <div
                        class="flex-shrink max-w-full px-4 w-full md:w-1/2 mb-6"
                      >
                        <label for="inpuemail4" class="inline-block mb-2"
                          >Email</label
                        >
                        <input
                          type="email"
                          v-model="register.email"
                          class="
                            w-full
                            leading-5
                            relative
                            py-3
                            px-5
                            text-gray-800
                            bg-white
                            border border-gray-100
                            overflow-x-auto
                            focus:outline-none
                            focus:border-gray-400
                            focus:ring-0
                            dark:text-gray-400
                            dark:bg-gray-700
                            dark:border-gray-700
                            dark:focus:border-gray-600
                          "
                          required
                        />
                      </div>

                      <div
                        class="flex-shrink max-w-full px-4 w-full md:w-1/2 mb-6"
                      >
                        <label for="inpuemail4" class="inline-block mb-2"
                          >Password</label
                        >
                        <input
                          type="password"
                          v-model="register.password"
                          class="
                            w-full
                            leading-5
                            relative
                            py-3
                            px-5
                            text-gray-800
                            bg-white
                            border border-gray-100
                            overflow-x-auto
                            focus:outline-none
                            focus:border-gray-400
                            focus:ring-0
                            dark:text-gray-400
                            dark:bg-gray-700
                            dark:border-gray-700
                            dark:focus:border-gray-600
                          "
                          required
                        />
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
                          <span class="text-red-700 ml-4 font-bold text-sm"
                            >I agree to the Terms of Use</span
                          >
                        </label>
                      </div>
                      <div class="flex-shrink max-w-full px-4 w-full">
                        <button
                          class="
                            flex
                            items-center
                            py-3
                            px-5
                            leading-5
                            bg-red-600
                            text-gray-100
                            hover:text-white hover:bg-gray-900 hover:ring-0
                            focus:outline-none focus:ring-0
                          "
                          type="submit"
                        >
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <hr class="border-b-2 border-gray-400 my-3 mt-4 mx-4" />

              <div class="w-full py-12">
                <h2 class="text-gray-800 text-3xl font-bold">
                  <span
                    class="inline-block h-5 border-l-3 border-red-600 mr-2"
                  ></span
                  >Login
                </h2>
              </div>
              <div class="flex flex-row flex-wrap -mx-3">
                <div class="flex-shrink max-w-full w-full px-3 pb-5">
                  <div class="px-8 py-6 border border-gray-100 bg-white">
                    <form
                      @submit.prevent="
                        handleLogin({
                          email: login.email,
                          password: login.password,
                        })
                      "
                      class="flex flex-wrap flex-row -mx-4"
                    >
                      <div
                        class="flex-shrink max-w-full px-4 w-full md:w-1/2 mb-6"
                      >
                        <label for="inpuemail4" class="inline-block mb-2"
                          >Email</label
                        >
                        <input
                          type="email"
                          v-model="login.email"
                          class="
                            w-full
                            leading-5
                            relative
                            py-3
                            px-5
                            text-gray-800
                            bg-white
                            border border-gray-100
                            overflow-x-auto
                            focus:outline-none
                            focus:border-gray-400
                            focus:ring-0
                            dark:text-gray-400
                            dark:bg-gray-700
                            dark:border-gray-700
                            dark:focus:border-gray-600
                          "
                          required
                        />
                      </div>
                      <div
                        class="flex-shrink max-w-full px-4 w-full md:w-1/2 mb-6"
                      >
                        <label for="inpuemail4" class="inline-block mb-2"
                          >Password</label
                        >
                        <input
                          type="password"
                          v-model="login.password"
                          class="
                            w-full
                            leading-5
                            relative
                            py-3
                            px-5
                            text-gray-800
                            bg-white
                            border border-gray-100
                            overflow-x-auto
                            focus:outline-none
                            focus:border-gray-400
                            focus:ring-0
                            dark:text-gray-400
                            dark:bg-gray-700
                            dark:border-gray-700
                            dark:focus:border-gray-600
                          "
                          required
                        />
                      </div>
                      <div class="flex-shrink max-w-full px-4 w-full">
                        <button
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
                          Login
                        </button>
                      </div>
                    </form>
                    <GoogleLogin :callback="handleGoogleSign" />
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
                        >Why the world would end without political polls</a
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
                        >Meet The Man Who Designed The Ducati Monster</a
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
                        >2020 Audi R8 Spyder spy shots release</a
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
                        >Lamborghini makes Huracán GT3 racer faster for 2019</a
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
    <!-- end main -->
  </div>
  <Footer />
</template>