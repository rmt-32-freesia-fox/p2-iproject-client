<script>
import Navbar from "./components/Navbar.vue";
import { RouterLink, RouterView } from "vue-router";
export default {
  components: {
    Navbar,
  },
};
</script>

<template>
  <div class="bg-gray-300">
    <!-- ====== Navbar Section Start -->
    <Navbar />
    <!-- ====== Navbar Section End -->
    <div class="pt-[30px]">
      <router-view></router-view>
    </div>
  </div>
</template>
