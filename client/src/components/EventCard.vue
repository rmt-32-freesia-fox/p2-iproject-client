<script>
import { mapActions, mapState } from 'pinia';
import { RouterLink } from 'vue-router';
import { useEventStore } from '../stores/event';


export default {
  props: ["item"],
  components: { RouterLink },
  methods: {
    ...mapActions(useEventStore, ['deleteEvent']),
  },
  computed: {
    isAdmin() {
      return localStorage.access_token && localStorage.role == 'admin'
    }
  }
}
</script>
<template>
  <div
    class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow -800 -700">
    <RouterLink :to="`/events/${item.id}`">
      <img class="rounded-t-lg" :src="item.imageUrl" alt="product image" />
    </RouterLink>
    <div class="px-5 pb-5  mt-2">
      <div class="flex">
        <h5 class="mr-2 text-md font-semibold tracking-tight text-gray-900 ">{{ item?.title }}</h5>
        <!-- <span
          class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Default</span> -->
      </div>
      <button v-if="isAdmin" @click="deleteEvent(item.id)"
        class="bg-red-500  p-1 my-2 z-50 text-white  text-xs font-bold uppercase  rounded shadow hover:shadow-lg outline-none focus:outline-none  ease-linear transition-all duration-150"
        type="button">
        Delete
      </button>

      <div class="flex items-center justify-between">
        <span class="text-1xl font-bold text-gray-900 ">{{
          new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR"
          }).format(item.price)
        }}</span>
      </div>
    </div>
  </div>
</template>