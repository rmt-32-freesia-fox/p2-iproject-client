<script>
import { mapState } from 'pinia'
import { useProfileStore } from '../../stores/profile'
import SpotifyPlayer from '../molecules/SpotifyPlayer.vue'

export default {
  computed: mapState(useProfileStore, [
    'song',
    'profile',
    'loading',
  ]),
  components: { SpotifyPlayer },
}
</script>

<template>
  <div class="flex gap-7 flex-col md:flex-row">
    <div
      :class="`avatar transition-all z-10 duration-500 ${
        song ? '' : 'md:translate-x-44'
      }`"
    >
      <div class="w-24 rounded-full">
        <img
          :src="
            profile.profilePicture ||
            'https://i.postimg.cc/fbC90hSG/2204-w037-n003-302b-p1-302.jpg'
          "
        />
      </div>
    </div>
    <SpotifyPlayer />
  </div>
</template>
