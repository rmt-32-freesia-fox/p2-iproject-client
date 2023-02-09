<script>
import { mapActions } from "pinia";
import { useCustomerStore } from "../stores/customers";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    ...mapActions(useCustomerStore, ["login", "handleCredentialResponse"]),

    submit() {
      const input = {
        email: this.email,
        password: this.password,
      };
      this.login(input);
    },

    callback(response) {
      // This callback will be triggered when the user selects or login to
      // his Google account from the popup
      // console.log("Handle the response", response);
      this.handleCredentialResponse(response);
    },
  },
};
</script>

<template>
  <!-- login -->
  <div class="contain py-16">
    <div class="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
      <h2 class="text-2xl uppercase font-medium mb-1">Login</h2>
      <p class="text-gray-600 mb-6 text-sm">welcome back customer</p>
      <form
        @submit.prevent="submit"
        action="#"
        method="post"
        autocomplete="off"
      >
        <div class="space-y-2">
          <div>
            <label for="email" class="text-gray-600 mb-2 block"
              >Email address</label
            >
            <input
              v-model="email"
              type="email"
              name="email"
              id="email"
              class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
              placeholder="youremail.@domain.com"
            />
          </div>
          <div>
            <label for="password" class="text-gray-600 mb-2 block"
              >Password</label
            >
            <input
              v-model="password"
              type="password"
              name="password"
              id="password"
              class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
              placeholder="*******"
            />
          </div>
        </div>

        <div class="mt-4">
          <button
            type="submit"
            class="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
          >
            Login
          </button>
        </div>
      </form>

      <!-- login with -->
      <div class="mt-6 flex justify-center relative">
        <div class="text-gray-600 uppercase px-3 bg-white z-10 relative">
          Or login with
        </div>
        <div
          class="absolute left-0 top-3 w-full border-b-2 border-gray-200"
        ></div>
      </div>
      <div class="mt-4 flex gap-2">
        <!-- <a
          href="#"
          class="w-1/2 py-2 text-center text-white bg-red-600 rounded uppercase font-roboto font-medium text-sm hover:bg-red-500"
          >google</a
        > -->
      </div>
      <div class="mt-10 ml-20">
        <GoogleLogin :callback="callback" />
      </div>
      <!-- ./login with -->

      <p class="mt-4 text-center text-gray-600">
        Don't have account?
        <a
          @click.prevent="$router.push('/register')"
          href="/"
          class="text-primary"
          >Register now</a
        >
      </p>
    </div>
  </div>
  <!-- ./login -->
</template>
