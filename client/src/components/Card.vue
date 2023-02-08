<script>
export default {
  props: ['item']
}
</script>

<template>
  <div class="relative w-full bg-white shadow">
    <img class="rounded-t-lg " :src="item.image" alt="" />
    <h5 class="absolute -bottom-1 bg-opacity-40 bg-slate-900 text-gray-300 mb-2 text-lg font-bold p-2 rounded-t ">
      {{ item.title }}</h5>
  </div>
</template>