<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { useCustomerStore } from "../stores/customers";

export default {
  computed: {
    ...mapWritableState(useCustomerStore, "isLogin"),
    ...mapState(useCustomerStore, ["timeNow"]),
  },

  methods: {
    ...mapActions(useCustomerStore, ["logout", "timezone"]),

    submitLogout() {
      this.logout();
      this.isLogin = false;
    },
  },

  created() {
    this.timezone();
    if (localStorage.access_token) {
      this.isLogin = true;
    }
  },
};
</script>

<template>
  <!-- navbar -->
  <nav class="bg-gray-800">
    <div class="container flex">
      <div
        class="px-8 py-4 bg-primary flex items-center cursor-pointer relative group"
      >
        <span class="text-white">
          <i class="fa-solid fa-bars"></i>
        </span>
        <a @click.prevent="$router.push('/')" href="#"
          ><span class="capitalize ml-2 text-white">Easy Rent</span>
        </a>
      </div>

      <div class="flex items-center justify-between flex p-12 pl-12">
        <div class="flex items-center space-x-6 capitalize">
          <router-link
            class="text-gray-200 hover:text-white transition"
            to="/carts"
            >Carts</router-link
          >
          <router-link
            class="text-gray-200 hover:text-white transition"
            to="/histories"
            >Histories</router-link
          >
        </div>
      </div>
      <div class="flex items-center justify-between flex-grow pl-36"></div>
      <div class="flex items-center justify-between flex-grow pl-36"></div>
      <div class="flex items-center justify-between flex-grow pl-36"></div>
      <div class="flex items-center justify-between flex-grow pl-36"></div>
      <div class="flex items-center justify-between flex-grow pl-36"></div>
      <div class="flex items-center justify-between flex-grow pl-36"></div>
      <div class="flex items-center justify-between flex-grow pl-36"></div>
      <div class="flex items-center justify-between flex-grow pl-36"></div>
      <div class="flex items-center justify-between flex-grow pl-36 text-white">
        {{ timeNow }}
      </div>
      <div
        v-if="!isLogin"
        class="flex items-center justify-between flex-grow pl-12"
      >
        <a
          @click.prevent="$router.push('/register')"
          href="#"
          class="text-gray-200 hover:text-white transition"
          >Login/Register
        </a>
      </div>
      <div
        v-if="isLogin"
        class="flex items-center justify-between flex-grow pl-12"
      >
        <a
          @click.prevent="submitLogout"
          href="#"
          class="text-gray-200 hover:text-white transition"
          >Logout
        </a>
      </div>
    </div>
  </nav>
  <!-- ./navbar -->
</template>
