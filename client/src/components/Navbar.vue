<script>
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  computed: {
    ...mapState(useCounterStore, ["isLogin", "status", "statusPatch"]),
  },
  data() {
    return {
      username: localStorage.getItem("username"),
    };
  },

  methods: {
    ...mapActions(useCounterStore, [
      "doneLogin",
      "handleLogout",
      "subscribe",
      "doneSubscribe",
    ]),

    handleSubscribe() {
      this.subscribe();
    },

    logout() {
      this.handleLogout();
    },
  },
  created() {
    this.doneLogin();
    this.doneSubscribe();
    this.statusPatch;
  },
};
</script>

<template>
  <div class="container-fluid bg-dark px-0">
    <div class="row gx-0">
      <div class="col-lg-3 bg-dark d-none d-lg-block">
        <a
          href="index.html"
          class="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center"
        >
          <h1 class="m-0 display-4 text-primary text-uppercase">Gymster</h1>
        </a>
      </div>
      <div class="col-lg-9">
        <div class="row gx-0 bg-secondary d-none d-lg-flex">
          <div class="col-lg-7 px-5 text-start">
            <div class="h-100 d-inline-flex align-items-center py-2 me-4">
              <i class="fa fa-envelope text-primary me-2"></i>
              <h6 class="mb-0">gymster.official1@gmail.com</h6>
            </div>
            <div class="h-100 d-inline-flex align-items-center py-2">
              <i class="fa fa-phone-alt text-primary me-2"></i>
              <h6 class="mb-0">02187654567</h6>
            </div>
          </div>
          <div class="col-lg-5 px-5 text-end">
            <div
              class="d-inline-flex align-items-center py-2"
              v-if="isLogin == 'true'"
            >
              <h5 v-if="this.status == 'false'">
                hi,
                {{ username }}
              </h5>
              <h5 v-if="this.status == 'true'" style="color: #fb5b21">
                hi, {{ statusPatch }}
                {{ username }}
              </h5>
            </div>
          </div>
        </div>
        <nav
          class="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0 px-lg-5"
        >
          <a href="index.html" class="navbar-brand d-block d-lg-none">
            <h1 class="m-0 display-4 text-primary text-uppercase">Gymster</h1>
          </a>
          <button
            type="button"
            class="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarCollapse"
          >
            <div class="navbar-nav">
              <a
                v-if="this.isLogin == 'true'"
                href="index.html"
                class="nav-item nav-link"
                @click.prevent="this.$router.push('/')"
                >Home</a
              >
              <a
                v-if="this.isLogin == 'true'"
                href="about.html"
                class="nav-item nav-link"
                @click.prevent="this.$router.push('/about')"
                >About</a
              >
              <a
                v-if="this.isLogin == 'true'"
                href="class.html"
                class="nav-item nav-link"
                @click.prevent="this.$router.push('/exercise')"
                >Exercise</a
              >
              <a
                v-if="this.isLogin == 'true'"
                href="class.html"
                class="nav-item nav-link"
                @click.prevent="this.$router.push('/bmi')"
                >BMI calculator</a
              >
              <a
                v-if="this.isLogin == 'true'"
                href="class.html"
                class="nav-item nav-link"
                @click.prevent="this.$router.push('/myexercise')"
                >Favorite</a
              >
              <a
                v-if="this.isLogin == 'true'"
                href="class.html"
                class="nav-item nav-link"
                @click.prevent="logout"
                >Logout</a
              >
              <a
                v-if="this.isLogin == 'false'"
                href="class.html"
                class="nav-item nav-link"
                @click.prevent="this.$router.push('/register')"
                >Sign Up</a
              >
              <a
                v-if="this.isLogin == 'false'"
                href="class.html"
                class="nav-item nav-link"
                @click.prevent="this.$router.push('/login')"
                >Sign In</a
              >
            </div>
            <!-- <a
              v-if="isLogin == 'false'"
              @click.prevent="this.$router.push('/register')"
              class="btn btn-primary py-md-3 px-md-5 d-none d-lg-block"
              >Sign Up</a
            ><a
              v-if="isLogin == 'false'"
              @click.prevent="this.$router.push('/login')"
              class="btn btn-primary py-md-3 px-md-5 d-none d-lg-block"
              style="margin-left: 1rem"
              >Sign In</a
            > -->
          </div>
        </nav>
      </div>
    </div>
  </div>

  <!-- Carousel Start -->
  <div class="container-fluid p-0 mb-5">
    <div id="header-carousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="w-100" src="../assets/img/carousel-1.jpg" alt="Image" />
          <div
            class="carousel-caption d-flex flex-column align-items-center justify-content-center"
          >
            <div class="p-3" style="max-width: 900px">
              <h5 class="text-white text-uppercase">Best Gym Center</h5>
              <h1 class="display-2 text-white text-uppercase mb-md-4">
                Build Your Body Strong With Gymster
              </h1>
              <div v-if="isLogin == 'true'">
                <a
                  v-if="this.status == 'false'"
                  @click.prevent="handleSubscribe"
                  style="border-radius: 4rem"
                  class="btn btn-primary py-md-3 px-md-5 me-3"
                  >Join Member</a
                >
                <br />
                <h2
                  v-if="this.status == 'true'"
                  class="text-white text-uppercase"
                >
                  You are Member Now
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <img
            class="w-100"
            src="https://www.sfidn.com/image/catalog/01Fitness/sfidn-cara-membentuk-otot-dengan-program-fitness-phul-2.jpg"
            alt="Image"
          />
          <div
            class="carousel-caption d-flex flex-column align-items-center justify-content-center"
          >
            <div class="p-3" style="max-width: 900px">
              <h5 class="text-white text-uppercase">Best Gym Center</h5>
              <h1 class="display-2 text-white text-uppercase mb-md-4">
                Grow Your Strength With Our Trainers
              </h1>
              <a
                v-if="isLogin == 'true' && status == 'false'"
                @click.prevent="handleSubscribe"
                style="border-radius: 4rem"
                href=""
                class="btn btn-primary py-md-3 px-md-5 me-3"
                >Join Member</a
              >
              <br />
              <h2
                v-if="isLogin == 'true' && status == 'true'"
                class="text-white text-uppercase"
              >
                You are Member Now
              </h2>
            </div>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#header-carousel"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#header-carousel"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  <!-- Carousel End -->
</template>
