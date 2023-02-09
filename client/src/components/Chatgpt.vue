<script >
import { mapState, mapActions } from 'pinia'
import { RouterLink } from 'vue-router'
import { useRecipeStore } from '../stores/recipes'

export default {
  components: {
    RouterLink
  },
  data() {
    return {
      data: {}
    }
  },
  computed: {
    ...mapState(useRecipeStore, ['response', 'loadRes']),
  },
  methods: {
    ...mapActions(useRecipeStore, ['toggle', 'ask']),
  },

}
</script>
<template>
  <div
    class="fixed h-screen left-0 top-0 z-50 w-full p-4 flex items-center justify-center bg-black bg-opacity-50 overflow-x-hidden overflow-y-auto md:inset-0  md:h-full">
    <div class=" w-screen  md:max-w-md  md:h-auto">
      <div class="relative bg-white rounded-lg shadow">
        <button type="button" @click="toggle()"
          class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center ">
          <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"></path>
          </svg>
          <span class="sr-only">Close Modal </span>
        </button>
        <div class="px-6 py-6 lg:px-8">
          <h3 class="mb-4 text-xl font-medium text-gray-900 ">Find food by chatgpt</h3>
          <form @submit.prevent="ask(data)" class="flex gap-2 ">
            <input v-model="data.title" type="text"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="search any food " required>

            <button type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Search</button>
          </form>
          <p v-if="!loadRes" class="mt-10 text-justify">{{ response }}</p>
          <div class="mt-10 space-y-3" v-else>
            <p class="h-3 w-full  bg-slate-200 animate-pulse" v-for="it in 5" :key="it"></p>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>