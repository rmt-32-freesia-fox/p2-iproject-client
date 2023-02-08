<script>
import { mapActions } from 'pinia';
import { useEventStore } from '../stores/event';

export default {
  methods: {
    ...mapActions(useEventStore, ['book'])
  }
}
</script>

<template>
  <div class="relative w-full bg-white shadow">
    <img class="rounded-t-lg " src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
    <h5 class="absolute -bottom-1 bg-opacity-40 bg-slate-900 text-gray-300 mb-2 text-lg font-bold p-2 rounded-t ">
      Noteworthy technology
      acquisitions 2021</h5>
  </div>
</template>