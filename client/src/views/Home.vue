<script>
import Carousels from '../components/carousels.vue';
import Card from '../components/Card.vue';
import EventCard from '../components/EventCard.vue';

export default {
  components: {
    Carousels,
    Card,
    EventCard
}
}
</script>

<template>
  <div class="mx-auto">
    <Carousels />
    <div class="max-w-6xl mx-auto my-36 ">
      <h1
        class="mb-10 text-[2.5rem] sm:text-3xl xl:text-4xl text-center font-bold leading-tight capitalize sm:pr-8 xl:pr-10">
        Best Recipes</h1>
      <div class="grid lg:grid-cols-3 md:grid-cols-2 justify-between gap-10 mx-8">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
    <div class="bg-[#8fcdff71] py-36">
      <div class="max-w-6xl mx-auto">
        <h1
          class="mb-10 text-[2.5rem] sm:text-3xl xl:text-4xl text-center font-bold leading-tight capitalize sm:pr-8 xl:pr-10">
          Events Course</h1>
        <div class="grid lg:grid-cols-3 md:grid-cols-2 justify-between gap-10 mx-8">
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </div>
    </div>
  </div>
</template>