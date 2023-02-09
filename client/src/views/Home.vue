<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import Hero_Grid from "../components/Hero-big.vue";
import second_Grid from "../components/block_grid_2.vue";
import third_Grid from "../components/block_grid_3.vue";
import last_Grid from "../components/last_grid.vue";

import { useFunctionStore } from "../stores/counter";
import { mapActions, mapState } from "pinia";

export default {
  components: {
    Navbar,
    Hero_Grid,
    second_Grid,
    third_Grid,
    last_Grid,
    Footer,
  },
  methods: {
    ...mapActions(useFunctionStore, ["fetchAll"]),
  },
  computed: {
    ...mapState(useFunctionStore, ["heroData"]),
  },

  created() {
    this.fetchAll();
  },
};
</script>


<template>
  <div>
    <div class="text-gray-700 pt-9 sm:pt-10">
      <!-- ========== { HEADER }==========  -->

      <!-- nav menu -->
      <Navbar />

      <!-- end header -->

      <!-- =========={ MAIN }==========  -->
      <main>
        <!-- advertisement -->
        <!-- <Ads /> -->

        <!-- hero big grid -->
        <Hero_Grid />

        <!-- block news -->
        <second_Grid />

        <!-- block news -->
        <third_Grid />

        <!-- block news -->
        <last_Grid />
      </main>
      <!-- end main -->

      <!-- =========={ FOOTER }==========  -->
      <Footer />
    </div>
  </div>
</template>