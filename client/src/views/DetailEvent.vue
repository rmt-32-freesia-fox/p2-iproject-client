<script>
import { mapActions, mapState } from 'pinia';
import { useEventStore } from '../stores/event';

export default {
  methods: {
    ...mapActions(useEventStore, ['fetchById', 'book'])
  },
  computed: {
    ...mapState(useEventStore, ['event']),
    isSubsribe() {
      return this.event.Subscribes.some(el => el.UserId == localStorage.id)
    }
  },
  created() {
    this.fetchById(this.$route.params.id)
  }
}
</script>

<template>
  <div class="pt-20 bg-[#8fcdff71] min-h-screen">
    <div class="flex bg-white p-10 rounded-lg w-full gap-10 mx-auto max-w-7xl">
      <img src="https://webknox.com/recipeImages/716429-556x370.jpg" alt="">
      <div class="w-full">
        {{ isSubsribe }}
        <h1 class="text-2xl mb-3 font-light">{{ event.title }} </h1>
        <p class="my-2 text-xl font-bold ">{{
          new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR"
          }).format(event.price)
        }}</p>
        <div class="flex gap-2">
          <mdicon name="calendar-range" />
          {{ new Date(event.eventDate).toLocaleString("en-US", { dateStyle: 'full', }) }}
        </div>
        <div class="flex gap-2 mt-2">
          <mdicon name="clock" />
          {{ new Date(event.eventDate).toLocaleTimeString("en-US") }}
        </div>
        <div class="mt-10">
          <button v-if="!isSubsribe" @click="book(event)"
            class="bg-primary text-white  text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0  mb-3 ease-linear transition-all duration-150 mt-2"
            type="button">
            Book Now
          </button>
          <p v-else class="mt-2"> You already subscibe link class has been sended to your email</p>
        </div>
        <hr class="h-px my-8 ">
        <p>{{ event.desc }}</p>
      </div>
    </div>
  </div>
</template>