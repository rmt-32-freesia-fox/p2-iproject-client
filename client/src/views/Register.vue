<script>
import { mapActions } from 'pinia';
import { useUserStore } from '../stores/user';

export default {
  data() {
    return {
      data: {}
    }
  },
  methods: {
    ...mapActions(useUserStore, ['register'])
  }
}
</script>

<template>
  <div class="lg:overflow-hidden lg:flex-row flex-col-reverse flex lg:w-screen lg:h-screen">
    <div class="w-1/2 lg:block hidden bg-blur p-5">
      <a href="/" class="text-[1.2rem]">POS</a>
      <div class="flex items-center justify-center h-[88vh]">
        <img src="../assets/register.svg" alt="" class="max-w-2xl" />
      </div>
    </div>
    <div class="lg:w-1/2 p-5">
      <div class="h-full flex items-center justify-center lg:my-0 my-32">
        <div class="lg:mt-14 lg:my-0 lg:max-w-md max-w-lg  w-full ">
          <form @submit.prevent="register(data)" class="lg:shadow-none shadow	p-5 rounded-md">
            <h1 class="font-bold lg:text-3xl text-4xl mb-5 ">Sign Up</h1>
            <div class="space-y-4">
              <div>
                <input v-model="data.name" type="text" class="rounded-md p-3 border shadow w-full outline-none"
                  placeholder="Name" required />
              </div>
              <div>
                <input v-model="data.phoneNumber" type="number" class="rounded-md p-3 border shadow w-full outline-none"
                  placeholder="Phone" required />
              </div>
              <div>
                <input v-model="data.email" type="email" class="rounded-md p-3 border shadow w-full outline-none"
                  placeholder="Email" required />
              </div>
              <div>
                <input v-model="data.password" type="password" class="rounded-md p-3 border shadow w-full outline-none"
                  placeholder="Password" required />
              </div>
              <div>
                <textarea v-model="data.address" class="rounded-md p-3 resize-none border shadow w-full outline-none " placeholder="Address"
                  required />
              </div>
            </div>
            <button type="submit"
              class="relative bg-secondary w-full py-3 text-white rounded-md my-6 disabled:bg-slate-400">
              Recover Account
            </button>
            <div class="w-full text-center">
              <RouterLink to="/login" class="text-primary underline underline-offset-4 text-center">Back To Login
              </RouterLink>
            </div>
          </form>
        </div>
      </div>
    </div>

  </div>
</template>