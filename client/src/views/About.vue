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

  <!-- About Start -->
  <div class="container-fluid p-5">
    <div class="row gx-5">
      <div class="col-lg-5 mb-5 mb-lg-0" style="min-height: 500px">
        <div class="position-relative h-100">
          <img
            class="position-absolute w-100 h-100 rounded"
            src="../assets/img/about.jpg"
            style="object-fit: cover"
          />
        </div>
      </div>
      <div class="col-lg-7">
        <div class="mb-4">
          <h5 class="text-primary text-uppercase">About Us</h5>
          <h1 class="display-3 text-uppercase mb-0">Welcome to Gymster</h1>
        </div>
        <h4 class="text-body mb-4">
          Diam dolor diam ipsum tempor sit. Clita erat ipsum et lorem stet no
          labore lorem sit clita duo justo magna dolore
        </h4>
        <p class="mb-4">
          Nonumy erat diam duo labore clita. Sit magna ipsum dolor sed ea duo at
          ut. Tempor sit lorem sit magna ipsum duo. Sit eos dolor ut sea rebum,
          diam sea rebum lorem kasd ut ipsum dolor est ipsum. Et stet amet justo
          amet clita erat, ipsum sed at ipsum eirmod labore lorem.
        </p>
        <div class="rounded bg-dark p-5">
          <div class="tab-content">
            <div class="tab-pane fade show active" id="pills-1">
              <p class="text-secondary mb-0">
                Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam
                dolor diam ipsum et, tempor voluptua sit consetetur sit.
                Aliquyam diam amet diam et eos sadipscing labore. Clita erat
                ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus
                clita duo justo et tempor consetetur takimata eirmod, dolores
                takimata consetetur invidunt magna dolores aliquyam dolores
                dolore. Amet erat amet et magna
              </p>
            </div>
            <div class="tab-pane fade" id="pills-2">
              <p class="text-secondary mb-0">
                Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam
                dolor diam ipsum et, tempor voluptua sit consetetur sit.
                Aliquyam diam amet diam et eos sadipscing labore. Clita erat
                ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus
                clita duo justo et tempor consetetur takimata eirmod, dolores
                takimata consetetur invidunt magna dolores aliquyam dolores
                dolore. Amet erat amet et magna
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
    <br />
    <br />
    <div class="row gx-7 justify-content-center" style="margin: auto">
      <div class="col-lg-8" style="width: 18rem">
        <img
          class="card-img-top"
          src="https://freedesignfile.com/upload/2017/01/Fitness-coach-to-guide-girls-fitness-movements-Stock-Photo-05.jpg"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">Subscription in one week</h5>
          <p class="card-text">
            Get the ideal body shape as picture. if not now then when
          </p>
          <a href="#" class="btn btn-primary">Join Here</a>
        </div>
      </div>
      <div class="col-lg-8" style="width: 18rem">
        <img
          class="card-img-top"
          src="https://el124.com/wp-content/uploads/2016/08/hombre-fitness-14.jpg"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">Subscription in one mounth</h5>
          <p class="card-text">
            Get the ideal body shape as photographed and you can improve it
          </p>
          <a href="#" class="btn btn-primary">Join Here</a>
        </div>
      </div>
      <div class="col-lg-8" style="width: 18rem">
        <img
          class="card-img-top"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/0838fe18108113.562c3fe94fce7.jpg"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">Subscription in one year</h5>
          <p class="card-text">
            And now you already get the result if you subscribe for one year
          </p>
          <a href="#" class="btn btn-primary">Join Here</a>
        </div>
      </div>
    </div>
  </div>
  <!-- About End -->

  <Footer />
</template>
