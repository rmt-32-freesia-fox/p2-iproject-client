<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import CardExercise from "../components/CardExercise.vue";
import CardBody from "../components/CardBody.vue";

import { useCounterStore } from "../stores/counter";
import { mapActions, mapState } from "pinia";

export default {
  components: {
    Navbar,
    Footer,
    CardExercise,
    CardBody,
  },

  computed: {
    ...mapState(useCounterStore, ["bodyParts"]),
  },
  methods: {
    ...mapActions(useCounterStore, ["getBodyPart"]),
  },
  created() {
    this.getBodyPart();
  },
};
</script>

<template>
  <Navbar />
  <!-- Programe Start -->
  <div
    class="container-fluid programe position-relative px-5 mt-5"
    style="margin-bottom: 180px"
  >
    <div class="row g-5 gb-5">
      <h2
        class="text-uppercase text-bg mb-4"
        style="text-align: center; color: black"
      >
        Equipment
      </h2>
      <CardBody v-for="item in bodyParts" :key="item.id" :item="item" />
      <div class="col-lg-12 col-md-6 text-center">
        <h1 class="text-uppercase text-light mb-4">
          subscribe if you want to see movement tutorials
        </h1>
        <a href="" class="btn btn-primary py-3 px-5">Become A Member</a>
      </div>
    </div>
  </div>

  <Footer />
</template>
