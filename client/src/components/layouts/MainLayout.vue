<script>
import { mapState } from 'pinia'
import { useProfileStore } from '../../stores/profile'
import GithubIcon from '../atoms/GithubIcon.vue'
import Navbar from '../organisms/Navbar.vue'
export default {
  components: {
    Navbar,
    GithubIcon,
  },
  computed: mapState(useProfileStore, ['profile', 'loading']),
}
</script>

<template>
  <Navbar />
  <div
    class="flex flex-col min-h-screen"
    :style="
      profile && !loading && $route.name === 'profile' && profile.background
        ? `background:linear-gradient(to bottom, rgb(0,0,0,0.9), rgb(0,0,0,0.7)), url(${profile.background}); background-size: cover; background-position: center;`
        : ''
    "
  >
    <div class="px-5 md:px-10 pb-10 pt-24 flex-grow">
      <slot />
    </div>
    <div
      class="bg-base-300 shadow-lg px-10 py-5 text-slate-500 flex items-center gap-10"
    >
      <button class="btn btn-ghost">
        <GithubIcon />
      </button>
    </div>
  </div>
</template>
