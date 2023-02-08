<script>
import { mapState } from 'pinia'
import { useProfileStore } from '../../stores/profile'

export default {
  computed: mapState(useProfileStore, ['song', 'songTime']),
}
</script>

<template>
  <div
    :class="`w-96 max-w-xs h-24 flex justify-center items-center rounded-lg bg-base-300 duration-500 transition-all ${
      song ? 'opacity-100' : 'opacity-0 hidden md:block'
    }`"
  >
    <div
      v-if="song?.is_playing"
      class="w-full h-full p-4 rounded-lg shadow-lg"
      :style="`background: linear-gradient(to left, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.9),  rgba(0, 0, 0, 0.7)), url(${song.item.album.images[0]?.url}); background-position: center; background-repeat: no-repeat; background-size: cover;`"
    >
      <div class="text-xs opacity-50">listening to</div>
      <div class="flex justify-between">
        <a :href="song.context?.external_urls.spotify">
          <div
            class="max-w-[14rem] font-bold overflow-ellipsis truncate whitespace-nowrap hover:underline"
          >
            {{ song.item.name }} - {{ song.item.artists[0].name }}
          </div>
        </a>
        <div class="text-xs w-16 opacity-30 flex justify-end">
          {{ songTime }}
        </div>
      </div>
      <div
        class="w-full bg-gray-200 rounded-full h-2 mb-4 dark:bg-gray-700 mt-3"
      >
        <div
          class="bg-green-500 h-2 rounded-full dark:bg-gray-300 transition-all"
          :style="`width: ${Math.floor(
            (Math.floor(song.progress_ms / 1000) /
              Math.floor(song.item.duration_ms / 1000)) *
              288
          )}px`"
        ></div>
      </div>
    </div>
  </div>
</template>
