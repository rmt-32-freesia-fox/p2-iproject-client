<script>
import { mapActions, mapState } from 'pinia';
import { useRecipeStore } from '../stores/recipes';

export default {
  data() {
    return {

    }
  },
  computed: {
    ...mapState(useRecipeStore, ['recipe'])
  },
  methods: {
    ...mapActions(useRecipeStore, ['fetchRecipe'])
  },
  created() {
    this.fetchRecipe(this.$route.params.id)
  }
}
</script>

<template>
  <div class="pt-20 bg-[#8fcdff71] min-h-screen">
    <div class="  bg-white p-10 rounded-lg w-full  mx-auto max-w-7xl">
      <div class="mx-auto max-w-4xl">
        <h1 class="text-2xl mb-12 font-medium text-gray-900">{{ recipe.title }}
        </h1>
        <img class="mx-auto" :src="recipe.image" alt="">
        <div class="flex justify-center gap-12 my-10">
          <p class="flex flex-col items-center text-base gap-1 ">
            <mdicon name="thumb-up" size="30" />
            {{ recipe.aggregateLikes }} likes
          </p>
          <p class="flex flex-col items-center text-base gap-1">
            <mdicon name="timer" size="30" />
            Ready in {{ recipe.readyInMinutes }} minutes
          </p>
          <p class="flex flex-col items-center text-base gap-1">
            <mdicon name="heart" size="30" />
          <div>
            Health
            Score:{{ recipe.healthScore }}%
          </div>
          </p>
        </div>
        <div class="bg-[#F2F2F2] p-8 rounded text-sm leading-7 text-justify text-gray-900" v-html="recipe.summary">
        </div>
        <h3 class="text-2xl font-light mt-10 mb-5">Ingredients:</h3>
        <div class="grid grid-cols-6 max-w-2xl gap-5">
          <div class="flex items-center flex-col text-xs text-center" v-for="item in recipe.extendedIngredients"
            :key="item.id">
            <p class="text-base">{{ item.measures['us'].amount + ' ' + item.measures['us'].unitShort }}</p>
            <img :src="`https://spoonacular.com/cdn/ingredients_100x100/${item.image}`" alt="">
            <p>{{ item.name }}</p>
          </div>
        </div>
        <h3 class="text-2xl font-light mt-10 mb-5">Instruction:</h3>
        <div class="leading-8 font-light">
          <p v-for="step in recipe.analyzedInstructions[0].steps">{{ step.number }}. {{ step.step }}</p>
        </div>
      </div>
    </div>
  </div>
</template>