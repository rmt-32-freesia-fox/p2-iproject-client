<script>
import Card from '../components/Card.vue';
import EventCard from '../components/EventCard.vue';

export default {
  components: {
    Card,
    EventCard
  }
}
</script>

<template>
  <div class="pt-20 bg-[#8fcdff71]">
    <div class="bg-white p-10 rounded-lg w-full  mx-auto max-w-7xl">
      <div>
        <div class="flex justify-between">
          <h1 class="text-3xl font-semibold">Courses</h1>
          <button type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 ">Alternative</button>
        </div>
        <hr class="mb-10 mt-5">
      </div>
      <div class="grid gap-5 grid-cols-4">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>
  </div>
</template>