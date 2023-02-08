<script>
export default {
  props: ["news"],
};
</script>

<template>
  <div
    class="
      font-bold
      flex-shrink
      max-w-full
      w-full
      sm:w-1/3
      px-3
      pb-3
      pt-3
      sm:pt-0
      border-b-2
      sm:border-b-0
      border-dotted border-gray-100
    "
  >
    <div class="flex flex-row sm:block hover-img">
      <a :href="news?.link">
        <img
          class="max-w-full w-full mx-auto"
          :src="news?.thumb"
          alt="alt title"
        />
      </a>
      <div class="py-0 sm:py-3 pl-3 sm:pl-0">
        <h3 class="text-lg font-bold leading-tight mb-2">
          <a href="#">{{ news?.title }}</a>
        </h3>
        <p class="hidden md:block text-gray-500 leading-tight mb-1">
          {{ news?.desc.substring(0, 100) }}...
        </p>
        <a class="text-gray-500 pt-4" href="#"
          ><span
            class="
              inline-block
              h-3
              border-l-2
              text-white
              border-red-600
              mr-2
              font-bold
            "
          ></span>
          {{ news?.time }}
        </a>
      </div>
    </div>
  </div>
</template>