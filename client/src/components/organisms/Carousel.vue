<script>
import { mapActions } from 'pinia'
import { useHomeStore } from '../../stores/home'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
  data() {
    return {
      profiles: [],
      itemsToShow: (window.innerWidth - 160) / 256,
    }
  },
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  methods: mapActions(useHomeStore, ['getRandomProfiles', 'convertTime']),
  async created() {
    this.profiles = await this.getRandomProfiles()
  },
}
</script>

<template>
  <Carousel :items-to-show="itemsToShow" wrapAround="true">
    <Slide v-for="profile in profiles" :key="profile.id">
      <RouterLink :key="profile.id" :to="`/${profile.username}`">
        <div
          class="w-64 h-32 rounded-xl border bg-base-300 shadow-lg py-3 px-6 flex flex-col"
        >
          <div class="flex-grow">
            <div class="text-xl font-bold">{{ profile.name }}</div>
            <div class="text-sm opacity-50">@{{ profile.username }}</div>
          </div>
          <div>Joined {{ convertTime(profile.createdAt) }} ago</div>
        </div>
      </RouterLink>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>
