<script>
import { mapActions, mapState, mapWritableState } from 'pinia'
import DiscordIcon from '../components/atoms/DiscordIcon.vue'
import GithubIcon from '../components/atoms/GithubIcon.vue'
import SpotifyIcon from '../components/atoms/SpotifyIcon.vue'
import { useUserStore } from '../stores/user'

export default {
  data() {
    return {
      timeout: null,
    }
  },
  computed: {
    ...mapWritableState(useUserStore, [
      'userToEdit',
      'baseURL',
      'usernameStatus',
    ]),
    ...mapState(useUserStore, ['discordUsername']),
  },
  methods: mapActions(useUserStore, [
    'init',
    'unlink',
    'checkUsername',
    'saveEdit',
  ]),
  components: { GithubIcon, SpotifyIcon, DiscordIcon },
  watch: {
    'userToEdit.username': function (newUsername) {
      clearTimeout(this.timeout)

      this.timeout = setTimeout(() => {
        const fixedUsername = !newUsername
          ? ''
          : newUsername.match(/[a-zA-Z0-9\-\_]+/g).join('')
        this.userToEdit.username = fixedUsername
        this.checkUsername()
      }, 1000)
    },
  },
}
</script>

<template>
  {{ JSON.stringify(userToEdit, null, 4) }}
  <div>
    <form @submit.prevent="saveEdit" class="flex flex-col">
      <input
        class="input max-w-xs input-bordered"
        type="text"
        v-model="userToEdit.name"
      />
      <div class="flex items-center gap-5">
        <input
          class="input input-bordered w-[320px]"
          type="text"
          v-model="userToEdit.username"
        />

        <div v-if="usernameStatus === 'ok'">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="green"
            class="w-6 h-6"
          >
            <path
              fill-rule="evenodd"
              d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div v-if="usernameStatus === 'notok'">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="red"
            class="w-6 h-6"
          >
            <path
              fill-rule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div v-if="usernameStatus === 'loading'">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5 animate-spin"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
        </div>
      </div>
      <input type="file" class="file-input file-input-bordered max-w-xs" />
      <button type="submit" class="btn w-min">Save</button>
    </form>
    <div class="flex flex-col gap-2">
      <div class="flex gap-2">
        <div
          class="flex gap-2 items-center py-2 px-4 bg-base-300 w-min rounded-lg"
        >
          <GithubIcon /> {{ userToEdit.Github?.username || 'Github' }}
        </div>
        <a v-if="!userToEdit.Github" :href="baseURL + '/auth/github'">
          <button class="btn btn-ghost">Link</button>
        </a>
        <button v-else class="btn btn-ghost" @click="unlink('Github')">
          Unlink
        </button>
      </div>
      <div class="flex gap-2">
        <div
          class="flex gap-2 items-center py-2 px-4 bg-base-300 w-min rounded-lg"
        >
          <SpotifyIcon /> {{ userToEdit.Spotify?.username || 'Spotify' }}
        </div>
        <a v-if="!userToEdit.Spotify" :href="baseURL + '/auth/spotify'">
          <button class="btn btn-ghost">Link</button>
        </a>
        <button v-else class="btn btn-ghost" @click="unlink('Spotify')">
          Unlink
        </button>
      </div>
      <div class="flex gap-2">
        <div
          class="flex gap-2 items-center py-2 px-4 bg-base-300 w-min rounded-lg"
        >
          <DiscordIcon /> {{ discordUsername || 'Discord' }}
        </div>
        <a v-if="!userToEdit.Discord" :href="baseURL + '/auth/discord'">
          <button class="btn btn-ghost">Link</button>
        </a>
        <button v-else class="btn btn-ghost" @click="unlink('Discord')">
          Unlink
        </button>
      </div>
    </div>
  </div>
</template>
