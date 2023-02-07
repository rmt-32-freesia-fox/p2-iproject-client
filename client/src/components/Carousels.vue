<script>
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'


export default {
  data() {
    return {
      carousels: [
        'https://static.vecteezy.com/system/resources/previews/001/871/553/non_2x/promotion-to-find-workers-with-the-words-look-and-find-jobs-concept-ilustration-can-use-for-landing-page-template-ui-web-mobile-poster-banner-flyer-background-website-advertisement-free-vector.jpg',
      ]
    }
  },
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
}
</script>
<template>
  <div >
    <Carousel :autoplay="3000" :wrap-around="true">
      <Slide v-for="slide in carousels" :key="slide">
        <header class="rounded-lg flex items-center w-full overflow-hidden max-h-[80vh]">
          <img class="w-full" :src="slide" />
        </header>
      </Slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>



<style>
.carousel__prev,
.carousel__next {
  box-sizing: content-box;

}
</style>