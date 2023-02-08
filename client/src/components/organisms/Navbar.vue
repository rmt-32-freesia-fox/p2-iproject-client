<script>
import GithubIcon from '../atoms/GithubIcon.vue'
import SpotifyIcon from '../atoms/SpotifyIcon.vue'
import DiscordIcon from '../atoms/DiscordIcon.vue'

export default {
  components: {
    GithubIcon,
    DiscordIcon,
    SpotifyIcon,
  },
  data() {
    return {
      show: false,
      url: 'http://127.0.0.1:3000',
    }
  },

  methods: {
    toggle() {
      this.show = !this.show
    },
  },
}
</script>

<template>
  <div
    @click="toggle"
    :class="
      `fixed h-screen w-screen bg-base-200 z-50 bg-opacity-25 backdrop-blur-md flex justify-center items-center transition-all ` +
      (!show ? '-translate-y-full' : '')
    "
  >
    <div
      v-on:click.stop
      class="bg-base-300 rounded-xl shadow-lg prose p-10 flex flex-col gap-5"
    >
      <div class="flex h-10">
        <h1>Login</h1>
        <div class="divider divider-horizontal"></div>
        <h1>Sign Up</h1>
      </div>
      <div></div>
      <a :href="url + '/auth/github'">
        <button
          class="btn w-full flex justify-center bg-base-content gap-2 text-black"
        >
          <GithubIcon />
          Login With Github
        </button>
      </a>
      <a :href="url + '/auth/spotify'">
        <button
          class="btn w-full flex justify-center gap-2 bg-[#1DB954] text-white"
        >
          <SpotifyIcon />
          Login With Spotify
        </button>
      </a>
      <a :href="url + '/auth/discord'">
        <button
          class="btn w-full flex justify-center gap-2 bg-[#7289da] text-white"
        >
          <DiscordIcon />
          Login With Discord
        </button>
      </a>
    </div>
  </div>
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
      <!-- <div class="divider divider-horizontal mx-1"></div> -->
      <h1 class="font-bold text-xl">Hacktree</h1>
    </div>
  </RouterLink>
    <div class="flex gap-2">
      <button @click="toggle" class="btn btn-ghost">Login / Sign Up</button>
      <!-- <button @click="toggle" class="btn btn-outline">Signup</button> -->
    </div>
  </nav>
</template>

<style scoped>
a {
  text-decoration: none;
}
</style>
