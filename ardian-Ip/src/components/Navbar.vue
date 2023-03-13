<script>
import { useAuthStore } from '../stores/useAuthStore';
import { mapState, mapActions } from 'pinia';
export default {
  methods: {
    ...mapActions(useAuthStore, ['handleLogout']),

    forLogout() {
      this.handleLogout();
    },
  },
};
</script>

<template>
  <nav class="py-3 bg-gray-900 navbar-color">
    <div class="flex-1 flex items-center justify-center">
      <div class="flex-shrink-0 flex items-center">
        <ShareNetwork
          network="facebook"
          url="https://news.vuejs.org/issues/180"
          title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
          description="This week, I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new development setup created by Evan You."
          quote="The hot reload is so fast it\'s near instant. - Evan You"
          hashtags="vuejs,vite"
        >
          <p>Share on Facebook</p>
        </ShareNetwork>
      </div>
      <div class="flex-shrink-0 flex items-center">
        <router-link to="/heroes" class="text-white opacity-80 text-2xl uppercase"> Dota 2 Team </router-link>
      </div>
      <div class="hidden sm:block sm:ml-6">
        <div class="flex space-x-4 align-middle">
          <RouterLink to="/" href="#" class="text-white opacity-80 text-md uppercase hover:opacity-100 px-3 py-2">Home</RouterLink>
          <router-link to="/login" href="#" class="text-white opacity-80 text-md uppercase hover:opacity-100 px-3 py-2">Login</router-link>
          <a @click.prevent="forLogout" href="#" class="text-white opacity-80 text-md uppercase hover:opacity-100 px-3 py-2">Logout</a>
        </div>
      </div>
    </div>
  </nav>
</template>
