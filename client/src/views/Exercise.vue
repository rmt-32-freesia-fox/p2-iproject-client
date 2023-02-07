<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import CardExercise from "../components/CardExercise.vue";

export default {
  components: {
    Navbar,
    Footer,
    CardExercise,
  },
};
</script>

<template>
  <Navbar />

  <!-- Class Timetable Start -->
  <div class="container-fluid p-5">
    <div class="mb-5 text-center">
      <h2 class="text-primary text-uppercase">List Movement Exercise</h2>
      <br />
    </div>
    <div class="tab-class text-center">
      <div class="tab-content">
        <div id="tab-1" class="tab-pane fade show p-0 active">
          <div class="row g-5">
            <CardExercise />
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Class Timetable Start -->

  <Footer />
</template>
