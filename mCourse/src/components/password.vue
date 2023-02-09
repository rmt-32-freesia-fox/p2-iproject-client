<script>
import { mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";
export default {
  data() {
    return {
      email: "",
      token: "",
      password1: "",
      password2: "",
    };
  },
  methods: {
    ...mapActions(useCounterStore, ["forToken", "forReset"]),
    generateToken() {
      const dataInput = {
        token: 10000 + Math.floor(Math.random() * 19849),
        email: this.email,
      };
      this.forToken(dataInput);
    },
    resetPassword() {
      if (this.password1 == this.password2) {
        let dataInput = {
          email: this.email,
          token: this.token,
          password: this.password1,
        };
        this.forReset(dataInput);
      } else {
        console.log("gak sama woy");
      }
    },
  },
};
</script>
<template>
  <div class="container mx-auto text-left mt-10">
    <div class="w-1/2 bg-white broder border black shadow h-fit mx-auto p-5">
      <form>
        <input
          v-model="email"
          type="text"
          class="border border-black placeholder:text-black p-1.5 w-9/12"
          placeholder="Email"
        />
        <span class="bg-black p-2 text-white"
          ><a href="" @click.prevent="generateToken"> generate token</a></span
        >
        <br />
        <input
          type="text"
          v-model="token"
          class="border border-black placeholder:text-black p-1.5 w-9/12 my-2"
          placeholder="Token"
        />
        <input
          type="password"
          v-model="password1"
          class="border border-black placeholder:text-black p-1.5 w-9/12 my-2"
          placeholder="new password"
        />
        <input
          type="password"
          v-model="password2"
          class="border border-black placeholder:text-black p-1.5 w-9/12 my-2"
          placeholder="reply password"
        />
        <button @click.prevent="resetPassword" class="bg-black p-2 text-white">
          RESET password
        </button>
      </form>
    </div>
  </div>
</template>
