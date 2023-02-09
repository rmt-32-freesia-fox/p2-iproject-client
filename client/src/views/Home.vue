<script>
import Carousels from '../components/carousels.vue';
import Card from '../components/Card.vue';
import EventCard from '../components/EventCard.vue';
import { mapActions, mapState } from 'pinia';
import { useRecipeStore } from '../stores/recipes';
import { useEventStore } from '../stores/event';

export default {
  components: {
    Carousels,
    Card,
    EventCard
  },
  computed: {
    ...mapState(useRecipeStore, ['recipes', 'loading']),
    ...mapState(useEventStore, ['events']),
  },
  methods: {
    ...mapActions(useRecipeStore, ['fetchRecipes']),
    ...mapActions(useEventStore, ['fetchEvent']),
  },

  created() {
    this.fetchRecipes({ number: 8 })
    this.fetchEvent({ number: 8 })
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
      <div class="grid lg:grid-cols-4 md:grid-cols-2 justify-between gap-10 mx-8">
        <Card v-if="!loading" v-for="recipe in recipes" :key="recipe.id" :item="recipe" />
        <div v-else v-for=" i in 8" class="w-full bg-slate-200 animate-pulse min-h-[250px] "></div>
      </div>
    </div>
    <div class="bg-[#8fcdff71] py-36">
      <div class="max-w-6xl mx-auto">
        <h1
          class="mb-10 text-[2.5rem] sm:text-3xl xl:text-4xl text-center font-bold leading-tight capitalize sm:pr-8 xl:pr-10">
          Events Course</h1>
        <div class="grid lg:grid-cols-3 md:grid-cols-2 justify-between gap-10 mx-8">
          <EventCard  v-for="item in events" :key="item.id" :item="item" />
        </div>
      </div>
    </div>
  </div>
</template>