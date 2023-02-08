<script>
import GithubIcon from '../atoms/GithubIcon.vue'
import Navbar from '../organisms/Navbar.vue'
export default {
  components: {
    Navbar,
    GithubIcon,
  },
}
</script>

<template>
  <Navbar />
  <div class="flex flex-col min-h-screen">
    <div class="pt-24 p-5 md:p-10 flex-grow">
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
