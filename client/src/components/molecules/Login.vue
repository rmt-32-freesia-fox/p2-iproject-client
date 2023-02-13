<script>
import { mapActions, mapState } from 'pinia'
import { useUserStore } from '../../stores/user'
import GithubIcon from '../atoms/GithubIcon.vue'
import SpotifyIcon from '../atoms/SpotifyIcon.vue'
import DiscordIcon from '../atoms/DiscordIcon.vue'

export default {
  computed: mapState(useUserStore, ['showLogin', 'baseURL']),
  methods: mapActions(useUserStore, ['toggleLogin']),
  components: {
    GithubIcon,
    DiscordIcon,
    SpotifyIcon,
  },
}
</script>

<template>
  <div
    @click="toggleLogin"
    :class="
      `fixed h-screen w-screen bg-base-200 duration-500 z-50 bg-opacity-25 backdrop-blur-md flex justify-center items-center transition-all ` +
      (!showLogin ? '-translate-y-full' : '')
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
      <a :href="baseURL + '/auth/github'">
        <button
          class="btn w-full flex justify-center bg-base-content gap-2 text-black"
        >
          <GithubIcon />
          Login With Github
        </button>
      </a>
      <a :href="baseURL + '/auth/spotify'">
        <button
          class="btn w-full flex justify-center gap-2 bg-[#1DB954] text-white"
        >
          <SpotifyIcon />
          Login With Spotify
        </button>
      </a>
      <a :href="baseURL + '/auth/discord'">
        <button
          class="btn w-full flex justify-center gap-2 bg-[#7289da] text-white"
        >
          <DiscordIcon />
          Login With Discord
        </button>
      </a>
    </div>
  </div>
</template>
