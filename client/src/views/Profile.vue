<script>
import axios from 'axios'
import DiscordIcon from '../components/atoms/DiscordIcon.vue'
import GithubIcon from '../components/atoms/GithubIcon.vue'
import SpotifyIcon from '../components/atoms/SpotifyIcon.vue'
export default {
  data() {
    return {
      user: null,
      show: false,
      inteval: null,
      song: null,
    }
  },
  methods: {
    toggleShow(e) {
      this.show = e
    },
    convert(ms) {
      const minutes = Math.floor(ms / 60000)
      const seconds = Math.floor((ms / 1000) % 60)
      return `${minutes}:${seconds < 10 ? 0 : ''}${seconds}`
    },
  },
  async created() {
    try {
      const { data } = await axios.get(
        'http://127.0.0.1:3000/profile/' + this.$route.params.username
      )
      this.user = data

      this.inteval = setInterval(async () => {
        try {
          const { data } = await axios.get(
            'http://127.0.0.1:3000/profile/' +
              this.$route.params.username +
              '/spotify'
          )
          console.log(data)
          this.toggleShow(data.is_playing)
          //  this.toggleShow(false)
          this.song = data
        } catch (error) {
          clearInterval(this.inteval)
        }
      }, 1000)
    } catch (error) {
      console.log(error)
    }
  },
  components: { GithubIcon, SpotifyIcon, DiscordIcon },
}
</script>

<template>
  <div v-if="user" class="flex flex-col items-center gap-2 transition-all">
    <div class="flex gap-7 flex-col md:flex-row">
      <div
        :class="`avatar transition-all z-10 duration-500 ${
          show ? '' : 'md:translate-x-44'
        }`"
      >
        <div class="w-24 rounded-full">
          <img
            :src="
              user.profilePicture ||
              'https://i.postimg.cc/fbC90hSG/2204-w037-n003-302b-p1-302.jpg'
            "
          />
        </div>
      </div>
      <div
        :class="`w-96 max-w-xs h-24 flex justify-center items-center rounded-lg bg-base-300 duration-500 transition-all ${
          show ? 'opacity-100' : 'opacity-0 hidden md:block'
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
              {{ convert(song.progress_ms) }} /
              {{ convert(song.item.duration_ms) }}
            </div>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2 mb-4 dark:bg-gray-700 mt-3">
            <div
              class="bg-green-500 h-2 rounded-full dark:bg-gray-300 transition-all"
              :style="`width: ${Math.floor(Math.floor(song.progress_ms / 1000) / Math.floor(song.item.duration_ms / 1000) * 288)}px`"
            ></div>
          </div>
          <!-- <progress
            class="text-white progress progress-success transition-all"
            :value="Math.floor(song.progress_ms / 1000)"
            :max="Math.floor(song.item.duration_ms / 1000)"
          ></progress> -->
        </div>
      </div>
    </div>
    <div class="text-2xl font-bold">{{ user.name }}</div>
    <div>@{{ user.username }}</div>
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
    <div class="flex flex-col gap-2 w-full max-w-lg">
      <div v-for="x in 10" :key="x">
        <button
          class="btn w-full flex gap-2 items-center bg-cover hover:scale-110"
          :style="`background: linear-gradient(to left, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.9),  rgba(0, 0, 0, 0.7)), url(https://www.google.com/s2/favicons?domain=twitter.com&sz=256); background-position: left; background-repeat: no-repeat;`"
        >
          <!-- <div class="avatar">
            <div class="w-5 rounded-full">
              <img src="https://logo.clearbit.com/twitter.com" />
            </div>
          </div> -->
          Twitter
        </button>
      </div>
    </div>
  </div>
</template>
