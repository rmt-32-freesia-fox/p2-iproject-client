<script>
import { mapActions, mapState } from 'pinia';
import AddEvent from '../components/addEvent.vue';
import Card from '../components/Card.vue';
import Pagination from '../components/Pagination.vue';
import EventCard from '../components/EventCard.vue';
import { useRecipeStore } from '../stores/recipes';

export default {
  components: {
    Card,
    EventCard,
    AddEvent,
    Pagination
  },
  data() {
    return {
      query: {
        query: '',
        offset: 1,
        number: 24,
        cuisines: [],
      }
    }
  },
  methods: {
    ...mapActions(useRecipeStore, ['fetchRecipes',]),
    paging(offset) {
      if (offset === 'next') this.query.offset++
      else if (offset === 'previous') this.query.offset--
      else this.query.offset = +offset
    },
  },
  computed: {
    ...mapState(useRecipeStore, ['recipes', 'cusisines', 'count']),
    countPage() {
      const total = Math.ceil(this.count / this.query.number)
      return total > 20 ? 20 : total
    }
  },
  watch: {
    query: {
      handler(query) {
        const params = { ...query, cuisine: query.cuisines.join(',') }
        params.offset = (query.offset - 1) * query.number
        delete params.cuisines
        this.fetchRecipes(params)
      },
      deep: true
    }
  },
  created() {
    // this.fetchRecipes(this.query)
  }
}
</script>

<template>
  <div class="pt-20 bg-[#8fcdff71] min-h-screen">
    <div class=" bg-white p-10 rounded-lg w-full  mx-auto max-w-7xl">
      <input v-model="query.query" type="search" id="default-search"
        class="block mb-10 w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
        placeholder="Search by title">
      <div class="flex">
        <div class="w-1/4">
          <div>
            <h1 class="mb-4">
              Cuisine
            </h1>
            <div v-for="item in cusisines" :key="item.id" class="flex items-center mb-4">
              <input id="default-checkbox" type="checkbox" :value="item" v-model="query.cuisines"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
              <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900">{{ item }}</label>
            </div>
          </div>
        </div>
        <div class="w-3/4 grid gap-7 grid-cols-3">
          <Card v-for="recipe in recipes" :key="recipe.id" :item="recipe" />
        </div>
      </div>
      <Pagination :pages="countPage" @move="paging" :current="query.offset" />

    </div>
  </div>
</template>