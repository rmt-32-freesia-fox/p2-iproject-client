<script>
export default {
  emits: ['move'],
  props: ['current', 'pages'],
}
</script>
<template>
  <nav class="text-end pb-20 pt-10 ">
    <ul class="inline-flex -space-x-px">
      <li>
        <button @click="$emit('move', 'previous')" :disabled="current === 1"
          class="disabled:hover:bg-white disabled:text-gray-300 px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700">Previous</button>
      </li>
      <li v-for="page in pages" :key="page">
        <button @click="$emit('move', page)" :disabled="current === page" :class="current === page ? 'bg-gray-100' : ''"
          class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">{{
            page
          }}</button>
      </li>
      <li>
        <button @click="$emit('move', 'next')" :disabled="current === pages"
          class="px-3 py-2 leading-tight text-gray-500 bg-white disabled:hover:bg-white disabled:text-gray-300 border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700">Next</button>
      </li>
    </ul>
  </nav>
</template>