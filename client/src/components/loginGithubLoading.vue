<script>
import { useAuctionStore } from "../stores/auction.js";
import { mapActions, mapState } from "pinia";
export default {
  data() {
    return {
      code: this.$route.query.code,
    };
  },
  created() {
    this.githubLogin(this.code);
  },
  methods: {
    ...mapActions(useAuctionStore, ["githubLogin"]),
  },
  computed: {
    ...mapState(useAuctionStore, ["githubError"]),
  },
};
</script>

<template>
  <div class="mt-[100px] w-screen h-screen" v-if="githubError">
    <div class="flex flex-col justify-center items-center">
      <div class="text-3xl">FAILED AUTHENTICATION YOUR GITHUB ACCOUNT !</div>
      <div class="text-md mt-5 text-red-700">public email is unset</div>
    </div>
    <div class="flex flex-col mt-10 justify-center items-center">
      <router-link
        to="/login"
        class="text-md bg-blue-900 hover:bg-blue-300 cursor-pointer rounded-lg p-2 text-white"
      >
        back to login
      </router-link>
      <div class="text-md mt-10">
        please follow to if you want use github account
      </div>
      <div class="flex gap-5">
        <div class="flex flex-col">
          <div class="text-md text-black mt-5 text-center">1.Go To setting</div>
          <img src="../assets/github/1.png" alt="" style="width: 200px" />
        </div>
        <div class="flex flex-col">
          <div class="text-md text-black mt-5 text-center">2.Go To profile</div>
          <img src="../assets/github/2.png" alt="" style="width: 600px" />
        </div>
        <div class="flex flex-col">
          <div class="text-md text-black mt-5 text-center">
            3. Set Public Email
          </div>
          <img src="../assets/github/3.png" alt="" style="width: 600px" />
        </div>
      </div>
    </div>
  </div>
</template>
