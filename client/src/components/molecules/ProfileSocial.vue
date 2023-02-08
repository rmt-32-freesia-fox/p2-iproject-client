<script>
import { mapState } from 'pinia'
import { useProfileStore } from '../../stores/profile'
import DiscordIcon from '../atoms/DiscordIcon.vue'
import GithubIcon from '../atoms/GithubIcon.vue'
import SpotifyIcon from '../atoms/SpotifyIcon.vue'

export default {
  components: {
    DiscordIcon,
    GithubIcon,
    SpotifyIcon,
  },
  computed: mapState(useProfileStore, ['profile']),
}
</script>

<template>
  <div v-if="profile" class="flex gap-2 lg:gap-4">
    <div
      v-if="profile.Github"
      class="flex gap-2 bg-base-300 py-3 px-4 rounded-xl font-bold text-sm items-center"
    >
      <GithubIcon />
      {{ profile.Github?.username }}
    </div>
    <div
      v-if="profile.Spotify"
      class="flex gap-2 bg-base-300 py-3 px-4 rounded-xl font-bold text-sm items-center"
    >
      <SpotifyIcon />
      {{ profile.Spotify?.username }}
    </div>
    <div
      v-if="profile.Discord"
      class="flex gap-2 bg-base-300 py-3 px-4 rounded-xl font-bold text-sm items-center"
    >
      <DiscordIcon />
      {{ profile.Discord?.username }}#{{ profile.Discord?.discriminator }}
    </div>
  </div>
</template>
