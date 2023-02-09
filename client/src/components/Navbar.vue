<script>
import { mapState, mapActions } from "pinia";
import { useFunctionStore } from "../stores/counter";
export default {
  data() {
    return {
      currentUser: localStorage.currentUser,
      role: localStorage.role,
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
                    @click.prevent="$router.push('/')"
                    href="#"
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
                    @click.prevent="$router.push('/games')"
                    >Games</a
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
                  class="
                    relative
                    border-r border-gray-800
                    hover:bg-gray-900
                    text-white
                  "
                >
                  <a
                    v-if="role === `Premium`"
                    @click.prevent="$router.push('/podcast_playlist')"
                    class="block py-3 px-6 border-b-2 border-transparent"
                    href="#"
                    >Podcast Playlist</a
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
                  <div class="flex">
                    <p class="px-2">{{ currentUser }}</p>
                    <svg
                      v-if="role === `Premium`"
                      style="color: rgb(255, 234, 0)"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="30"
                      fill="currentColor"
                      class="bi bi-award-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z"
                        fill="#ffea00"
                      ></path>
                      <path
                        d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"
                        fill="#ffea00"
                      ></path>
                    </svg>
                  </div>
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