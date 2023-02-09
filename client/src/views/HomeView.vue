<script>
import Header from "../components/Header.vue";
import Items from "../components/Items.vue";
import Navbar from "../components/Navbar.vue";
export default {
  components: {
    Header,
    Navbar,
    Items,
  },
};
</script>

<template>
  <Header />
  <Navbar />
  <!-- breadcrumb -->
  <div class="container py-4 flex items-center gap-3">
    <a href="../index.html" class="text-primary text-base">
      <i class="fa-solid fa-house"></i>
    </a>
    <span class="text-sm text-gray-400">
      <i class="fa-solid fa-chevron-right"></i>
    </span>
    <p class="text-gray-600 font-medium">Items</p>
  </div>
  <!-- ./breadcrumb -->
  <Items />
</template>
