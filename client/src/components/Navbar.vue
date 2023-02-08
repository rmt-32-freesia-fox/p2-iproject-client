<script>
import { mapState, mapActions } from "pinia";
import { useFunctionStore } from "../stores/counter";
export default {
  data() {
    return {
      currentUser: localStorage.currentUser,
    };
  },
  computed: {
    ...mapState(useFunctionStore, ["", "isLogin"]),
  },
  methods: {
    ...mapActions(useFunctionStore, ["handleLogout"]),
  },
};
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50">
    <nav class="bg-red-600">
      <div class="xl:container mx-auto px-3 sm:px-4 xl:px-2">
        <div class="flex justify-between">
          <div
            class="
              mx-w-10
              text-2xl
              font-bold
              capitalize
              text-white
              flex
              items-center
            "
          >
            Nusantara Lounge.
          </div>

          <div class="flex flex-row">
            <div>
              <ul
                class="
                  navbar
                  hidden
                  lg:flex lg:flex-row
                  text-gray-400 text-sm
                  items-center
                  font-bold
                "
              >
                <li
                  class="
                    active
                    relative
                    border-l border-gray-800
                    hover:bg-gray-900
                  "
                >
                  <a
                    class="
                      block
                      py-3
                      px-6
                      border-b-2
                      text-white
                      border-transparent
                    "
                    href="index.html"
                    >Home</a
                  >
                </li>

                <li class="relative border-l border-gray-800 hover:bg-gray-900">
                  <a
                    class="
                      block
                      py-3
                      px-6
                      border-b-2 border-transparent
                      text-white
                    "
                    href="#"
                    >Sport</a
                  >
                </li>

                <li class="relative border-l border-gray-800 hover:bg-gray-900">
                  <a
                    class="
                      block
                      py-3
                      px-6
                      border-b-2 border-transparent
                      text-white
                    "
                    href="#"
                    >Travel</a
                  >
                </li>

                <li
                  class="
                    relative
                    border-l border-r border-gray-800
                    hover:bg-gray-900
                    text-white
                  "
                >
                  <a
                    @click.prevent="$router.push('/podcast')"
                    class="block py-3 px-6 border-b-2 border-transparent"
                    href="#"
                    >Podcast</a
                  >
                </li>
                <li
                  class="relative border-l border-gray-800 hover:bg-gray-900"
                ></li>
                <li
                  v-if="!currentUser"
                  class="relative border-gray-800 hover:bg-gray-900"
                >
                  <a
                    @click.prevent="$router.push('/login')"
                    class="block py-3 px-6 border-b-2 border-transparent"
                    href="#"
                    ><span class="text-white text-2xl"> Login</span>
                  </a>
                </li>

                <div
                  v-if="currentUser"
                  class="relative px-8 text-xl text-white font-black"
                >
                  {{ currentUser }}
                </div>
                <li
                  v-if="currentUser"
                  class="border-gray-800 hover:bg-gray-900"
                >
                  <a
                    @click.prevent="handleLogout"
                    class="block py-3 px-6 border-b-2 border-transparent"
                    href="#"
                    ><span class="text-white text-lg"> Logout</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>