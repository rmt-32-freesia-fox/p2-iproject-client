<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Navbar,
    Footer,
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
      <div class="col-lg-4 col-md-6">
        <div class="bg-light rounded text-center p-5">
          <i class="flaticon-six-pack display-1 text-primary"></i>
          <h3 class="text-uppercase my-4">Body Building</h3>
          <p>
            Sed amet tempor amet sit kasd sea lorem dolor ipsum elitr dolor amet
            kasd elitr duo vero amet amet stet
          </p>
          <a class="text-uppercase" href=""
            >Read More <i class="bi bi-arrow-right"></i
          ></a>
        </div>
      </div>
      <div class="col-lg-4 col-md-6">
        <div class="bg-light rounded text-center p-5">
          <i class="flaticon-barbell display-1 text-primary"></i>
          <h3 class="text-uppercase my-4">Weight Lefting</h3>
          <p>
            Sed amet tempor amet sit kasd sea lorem dolor ipsum elitr dolor amet
            kasd elitr duo vero amet amet stet
          </p>
          <a class="text-uppercase" href=""
            >Read More <i class="bi bi-arrow-right"></i
          ></a>
        </div>
      </div>
      <div class="col-lg-4 col-md-6">
        <div class="bg-light rounded text-center p-5">
          <i class="flaticon-bodybuilding display-1 text-primary"></i>
          <h3 class="text-uppercase my-4">Muscle Building</h3>
          <p>
            Sed amet tempor amet sit kasd sea lorem dolor ipsum elitr dolor amet
            kasd elitr duo vero amet amet stet
          </p>
          <a class="text-uppercase" href=""
            >Read More <i class="bi bi-arrow-right"></i
          ></a>
        </div>
      </div>
      <div class="col-lg-12 col-md-6 text-center">
        <h1 class="text-uppercase text-light mb-4">
          30% Discount For This Summer
        </h1>
        <a href="" class="btn btn-primary py-3 px-5">Become A Member</a>
      </div>
    </div>
  </div>

  <Footer />
</template>
