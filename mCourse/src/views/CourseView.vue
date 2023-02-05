<script>
import card from "../components/card.vue";
import quotes from "../components/quotes.vue";
import searchBox from "../components/searchBox.vue";
export default {
  components: {
    card,
    quotes,
    searchBox,
  },
};
</script>
<template>
  <div class="container mx-auto mt-7">
    <div class="m-3">
      <!----tempat quotes-->
      <quotes />
    </div>
    <searchBox />
    <!----tempat serach box-->
  </div>
  <div class="grid grid-cols-4 gap-3 mt-5 p-5">
    <!---Tempat Card-->
    <card />
  </div>
</template>
