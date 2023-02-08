<script>
import DiscordIcon from '../atoms/DiscordIcon.vue'
import GithubIcon from '../atoms/GithubIcon.vue'
import SpotifyIcon from '../atoms/SpotifyIcon.vue'

export default {
  components: {
    DiscordIcon,
    GithubIcon,
    SpotifyIcon,
  },
}
</script>

<template>
  <div class="flex gap-2 lg:gap-4">
    <div
      class="flex gap-2 bg-base-300 py-3 px-4 rounded-xl font-bold text-sm items-center"
    >
      <GithubIcon />
      0wx
    </div>
    <div
      class="flex gap-2 bg-base-300 py-3 px-4 rounded-xl font-bold text-sm items-center"
    >
      <SpotifyIcon />
      0wx
    </div>
    <div
      class="flex gap-2 bg-base-300 py-3 px-4 rounded-xl font-bold text-sm items-center"
    >
      <DiscordIcon />
      meh#1234
    </div>
  </div>
</template>
