<script>
import quotes from "../components/quotes.vue";
import card from "../components/card.vue";
export default {
  components: {
    quotes,
    card,
  },
};
</script>
<template>
  <div class="m-3">
    <quotes />
  </div>
  <h1 class="font-bold ml-5 text-3xl w-full border-b">Favorite List</h1>
  <div class="grid grid-cols-4 gap-3 mt-5 p-5">
    <card />
  </div>
</template>
