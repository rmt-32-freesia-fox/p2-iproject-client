<script></script>
<template>
  <Splide
    :options="{ rewind: true }"
    aria-label="My Favorite Images"
    class="shadow-lg rounded-md"
  >
    <SplideSlide>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzTgf6bmASfhKC6Pv6nf5YwwdzNleKoM41dxkSg0s7Sg&s"
        alt="Sample 1"
        class="object-fill w-full h-64 rounded-lg"
      />
    </SplideSlide>
    <SplideSlide>
      <img
        src="https://www.ucsfhealth.org/-/media/project/ucsf/ucsf-health/education/hero/top-ten-foods-for-health-2x.jpg"
        alt="Sample 2"
        class="object-fill w-full h-64 rounded-lg"
      />
    </SplideSlide>
  </Splide>
</template>
<style scoped>
.slide {
  box-shadow: 0 6px 15px -3px rgb(0 0 0/0.3);
  padding: 25px;
  border-radius: 5px;
}
</style>
