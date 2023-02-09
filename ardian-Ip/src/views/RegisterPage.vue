<script>
import { useAuthStore } from '../stores/useAuthStore';
import { mapState, mapActions } from 'pinia';
export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
    };
  },

  methods: {
    ...mapActions(useAuthStore, ['registerHandle']),
    forRegister() {
      const obj = {
        username: this.username,
        email: this.email,
        password: this.password,
      };
      this.registerHandle(obj);
    },
  },
};
</script>

<template>
  <!-- Login -->
  <div class="container h-screen mx-auto">
    <div class="grid grid-cols-10 h-screen place-items-center">
      <div class="col-start-2 col-span-8 sm:col-start-2 sm:col-span-8 place-items-center">
        <h2 class="text-4xl tracking-widest text-white text-opacity-70 text-center uppercase mb-14">
          <p>Welcome to <br /><span class="text-white text-opacity-100 text-6xl">Dota 2 Heroes</span></p>
        </h2>
        <div class="grid grid-cols-10">
          <div class="col-start-2 col-span-8 sm:col-start-2 sm:col-span-8">
            <h2 class="text-white text-opacity-80 text-2xl uppercase text-center mb-7">Register Form</h2>
            <div class="register px-10 py-5 sm:px-20 sm:py-10">
              <form class="mt-8 space-y-6">
                <div class="mb-5">
                  <label for="username" class="sr-only">Username</label>
                  <input
                    v-model="username"
                    id="username"
                    name="username"
                    type="username"
                    autocomplete="off"
                    required
                    class="block w-full px-3 py-2 border rounded-sm text-gray-900 focus:outline-none focus:ring focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-lg tracking-wider"
                    placeholder="Username"
                  />
                </div>
                <div class="mb-5">
                  <label for="email-address" class="sr-only">Email address</label>
                  <input
                    v-model="email"
                    id="email-address"
                    name="email"
                    type="email"
                    autocomplete="off"
                    required
                    class="block w-full px-3 py-2 border rounded-sm text-gray-900 focus:outline-none focus:ring focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-lg tracking-wider"
                    placeholder="Email address"
                  />
                </div>
                <div>
                  <label for="password" class="sr-only">Password</label>
                  <input
                    v-model="password"
                    id="password"
                    name="password"
                    type="password"
                    autocomplete="off"
                    required
                    class="block w-full px-3 py-2 border rounded-sm text-gray-900 focus:outline-none focus:ring focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-lg tracking-wider"
                    placeholder="Password"
                  />
                </div>
                <div>
                  <button
                    @click.prevent="forRegister"
                    type="submit"
                    class="w-full flex justify-center py-2 px-4 border border-transparent text-sm rounded-sm text-white bg-black bg-opacity-80 hover:bg-black hover:bg-opacity-70 focus:outline-none focus:ring focus:border-gray-500 focus:ring-gray-500 text-lg tracking-wider"
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.register {
  background-color: #36363ebf;
  color: #0f0f0f;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.5);
}
</style>
