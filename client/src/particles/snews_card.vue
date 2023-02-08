<script>
export default {
  props: ["news"],
};
</script>

<template>
  <article class="flex-shrink max-w-full w-full sm:w-1/2">
    <div class="relative hover-img max-h-48 overflow-hidden">
      <a :href="news?.url">
        <img
          class="max-w-full w-full mx-auto h-auto"
          :src="news?.urlToImage"
          alt="Image description"
        />
      </a>
      <div class="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
        <a href="#">
          <h2
            class="text-xs font-bold capitalize leading-tight text-white mb-1"
          >
            {{ news?.title.substring(0, 30) }}...
          </h2>
        </a>
        <div class="pt-1">
          <div class="text-gray-100">
            <div
              class="inline-block text-xs h-3 border-l-2 border-red-600 mr-2"
            ></div>
            {{ news?.author }}
          </div>
        </div>
      </div>
    </div>
  </article>
</template>