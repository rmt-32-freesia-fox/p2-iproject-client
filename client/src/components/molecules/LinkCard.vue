<script>
export default {
  props: ['link'],
  computed: {
    bgUrl() {
      if (this.link.logo) return this.link.logo

      const url = new URL(this.link.link)

      return `https://www.google.com/s2/favicons?domain=${url.hostname}&sz=128`
    },
  },
}
</script>

<template>
  <a :href="link.link" target="_blank">
    <button
      class="btn w-full flex gap-2 items-center bg-cover hover:scale-110 text-white"
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
</template>
