<script>
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  computed: {
    ...mapState(useCounterStore, ["qrCode"]),
  },
  methods: {
    ...mapActions(useCounterStore, ["qrCodeLink"]),
  },

  created() {
    this.qrCodeLink("https://gymsterofficial.web.app/generate-midtrans-token");
  },
};
</script>

<template>
  <!-- Footer Start -->
  <div class="container-fluid bg-dark text-secondary px-5 mt-5">
    <div class="row gx-5">
      <div class="col-lg-8 col-md-6">
        <div class="row gx-5">
          <div class="col-lg-4 col-md-12 pt-5 mb-5">
            <h4 class="text-uppercase text-light mb-4">Location</h4>
            <div class="d-flex mb-2">
              <i class="bi bi-geo-alt text-primary me-2"></i>
              <p class="mb-0">Jakarta</p>
            </div>
            <div class="d-flex mb-2">
              <i class="bi bi-envelope-open text-primary me-2"></i>
              <p class="mb-0">gymsterofficial1@gmail.com</p>
            </div>
            <div class="d-flex mb-2">
              <i class="bi bi-telephone text-primary me-2"></i>
              <p class="mb-0">+62 877 6786</p>
            </div>
            <div class="d-flex mt-4">
              <a class="btn btn-primary btn-square rounded-circle me-2" href="#"
                ><i class="fab fa-twitter"></i
              ></a>

              <a class="btn btn-primary btn-square rounded-circle" href="#"
                ><i class="fab fa-instagram"></i
              ></a>
            </div>
          </div>
          <div class="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
            <h4 class="text-uppercase text-light mb-4">Quick Links</h4>
            <div class="d-flex flex-column justify-content-start">
              <a class="text-secondary mb-2" href="#"
                ><i class="bi bi-arrow-right text-primary me-2"></i>Home</a
              >
              <a class="text-secondary mb-2" href="#"
                ><i class="bi bi-arrow-right text-primary me-2"></i>About Us</a
              >
              <a class="text-secondary mb-2" href="#"
                ><i class="bi bi-arrow-right text-primary me-2"></i>Class
                Schedule</a
              >
              <a class="text-secondary mb-2" href="#"
                ><i class="bi bi-arrow-right text-primary me-2"></i>Our
                Trainers</a
              >

              <a class="text-secondary" href="#"
                ><i class="bi bi-arrow-right text-primary me-2"></i>Contact
                Us</a
              >
            </div>
          </div>
          <div class="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
            <h4 class="text-uppercase text-light mb-4">Popular Links</h4>
            <div class="d-flex flex-column justify-content-start">
              <a class="text-secondary mb-2" href="#"
                ><i class="bi bi-arrow-right text-primary me-2"></i>Home</a
              >
              <a class="text-secondary mb-2" href="#"
                ><i class="bi bi-arrow-right text-primary me-2"></i>About Us</a
              >
              <a class="text-secondary mb-2" href="#"
                ><i class="bi bi-arrow-right text-primary me-2"></i>Class
                Schedule</a
              >
              <a class="text-secondary mb-2" href="#"
                ><i class="bi bi-arrow-right text-primary me-2"></i>Our
                Trainers</a
              >

              <a class="text-secondary" href="#"
                ><i class="bi bi-arrow-right text-primary me-2"></i>Contact
                Us</a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-8">
        <div class="d-flex justify-content-center">
          <img style="max-width: 55%; margin: 2rem 2rem" :src="qrCode" alt="" />
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid py-4 py-lg-0 px-5" style="background: #111111">
    <div class="row gx-5">
      <div class="col-lg-12">
        <div class="py-lg-4 text-center">
          <p class="text-secondary mb-0">
            &copy; <a class="text-light fw-bold" href="#">Gymster</a>.Official.
          </p>
        </div>
      </div>
    </div>
  </div>
  <!-- Footer End -->
</template>
