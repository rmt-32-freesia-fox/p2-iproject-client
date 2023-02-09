<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import CardMyFavorite from "../components/CardMyFavorit.vue";

import { useCounterStore } from "../stores/counter";
import { mapActions, mapState } from "pinia";

export default {
  components: {
    Navbar,
    Footer,
    CardMyFavorite,
  },
  computed: {
    ...mapState(useCounterStore, ["myexercise"]),
  },

  methods: {
    ...mapActions(useCounterStore, ["getMyExercise"]),
  },

  created() {
    this.getMyExercise();
  },
};
</script>

<template>
  <Navbar />

  <!-- Class Timetable Start -->

  <div class="container-fluid p-5">
    <div class="mb-5 text-center">
      <h2 class="text-primary text-uppercase">
        List Favorite Movement Exercise
      </h2>
      <br />
    </div>
    <div class="tab-class text-center">
      <div class="tab-content">
        <div id="tab-1" class="tab-pane fade show p-0 active">
          <div class="row g-5">
            <CardMyFavorite
              v-for="item in myexercise"
              :key="item.id"
              :item="item"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Class Timetable Start -->

  <Footer />
</template>
