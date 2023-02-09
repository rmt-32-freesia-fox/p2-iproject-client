<script>
import { mapActions } from "pinia";
import { useCustomerStore } from "../stores/customers";
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },

  methods: {
    ...mapActions(useCustomerStore, ["register"]),

    submit() {
      const input = {
        name: this.name,
        email: this.email,
        password: this.password,
      };
      this.register(input);
    },
  },
};
</script>

<template>
  <!-- register -->
  <div class="contain py-16">
    <div class="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
      <h2 class="text-2xl uppercase font-medium mb-1">Create an account</h2>
      <p class="text-gray-600 mb-6 text-sm">Register for new cosutumer</p>
      <form
        @submit.prevent="submit"
        action="#"
        method="post"
        autocomplete="off"
      >
        <div class="space-y-2">
          <div>
            <label for="email" class="text-gray-600 mb-2 block">Name</label>
            <input
              v-model="name"
              name="name"
              id="email"
              class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
              placeholder="your name"
            />
          </div>
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
            create account
          </button>
        </div>
      </form>

      <p class="mt-4 text-center text-gray-600">
        Already have account?
        <a @click.prevent="$router.push('/login')" href="#" class="text-primary"
          >Login now</a
        >
      </p>
    </div>
  </div>
  <!-- ./login -->
</template>
