<script>
export default {
  props: ['item']
}
</script>
<template>
  <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow -800 -700">
    <img class="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="product image" />
    <div class="px-5 pb-5 space-y-5 mt-2">
      <h5 class="text-md font-semibold tracking-tight text-gray-900 ">{{ item?.title }}</h5>
      <span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Default</span>

      <div class="flex items-center justify-between">
        <span class="text-1xl font-bold text-gray-900 ">Rp{{ item?.price }}</span>
        <a href="#"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center -600 -blue-700 -blue-800">Add
          to cart</a>
      </div>
    </div>
  </div>
</template>