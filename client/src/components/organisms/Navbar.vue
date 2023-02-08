<script>
import { mapActions } from 'pinia'
import Login from '../molecules/Login.vue'
import { useUserStore } from '../../stores/user'
import NavbarProfile from '../molecules/NavbarProfile.vue'
import { RouterLink } from 'vue-router'
export default {
  components: {
    Login,
    NavbarProfile,
    RouterLink,
  },
  methods: mapActions(useUserStore, ['toggleLogin']),
}
</script>

<template>
  <Login />
  <nav
    class="fixed z-40 top-0 left-0 h-16 bg-base-300 w-full flex items-center px-5 md:px-10 justify-between drop-shadow bg-opacity-60 backdrop-blur"
  >
    <RouterLink to="/">
      <div class="flex items-center gap-2">
        <div class="avatar">
          <div class="w-6 rounded">
            <img src="../../assets/image.webp" />
          </div>
        </div>
        <h1 class="font-bold text-xl">Hacktree</h1>
      </div>
    </RouterLink>
    <NavbarProfile />
  </nav>
</template>

<style scoped>
a {
  text-decoration: none;
}
</style>
