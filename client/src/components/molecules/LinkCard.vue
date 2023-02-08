<script>
import { mapActions, mapState } from 'pinia'
import { useLinkStore } from '../../stores/link'
import { useProfileStore } from '../../stores/profile'
import RemoveLink from '../atoms/RemoveLink.vue'

export default {
  props: ['link', 'noedit'],
  computed: {
    ...mapState(useProfileStore, ['isMe']),
    bgUrl() {
      if (this.link.logo) return this.link.logo
      const url = new URL(this.link.link)
      return `https://www.google.com/s2/favicons?domain=${url.hostname}&sz=128`
    },
  },
  methods: mapActions(useLinkStore, ['edit']),
  components: { RemoveLink },
}
</script>

<template>
  <div class="flex gap-2">
    <a :href="link.link" target="_blank" class="flex-grow">
      <button
        class="btn w-full flex-grow flex gap-2 items-center bg-cover hover:scale-110 text-white"
        :style="`background: linear-gradient(to left, rgba(99, 99, 99, 0.1), rgba(0, 0, 0, 0.9),  rgba(0, 0, 0, 0.7)), url(${bgUrl}); background-position: left; background-repeat: no-repeat;`"
      >
        <!-- <div class="avatar">
        <div class="w-5 rounded-full">
          <img src="https://logo.clearbit.com/twitter.com" />
        </div>
      </div> -->
        {{ link.label || link.link }}
      </button>
    </a>
    <button v-if="isMe && !noedit" @click="edit(link)" class="btn btn-ghost">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="w-6 h-6"
      >
        <path
          d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z"
        />
        <path
          d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z"
        />
      </svg>
    </button>
    <RemoveLink v-if="isMe && !noedit" :id="link.id" />
  </div>
</template>
