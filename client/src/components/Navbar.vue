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
              <h6 class="mb-0">info@example.com</h6>
            </div>
            <div class="h-100 d-inline-flex align-items-center py-2">
              <i class="fa fa-phone-alt text-primary me-2"></i>
              <h6 class="mb-0">+012 345 6789</h6>
            </div>
          </div>
          <div class="col-lg-5 px-5 text-end">
            <div class="d-inline-flex align-items-center py-2">
              <a class="btn btn-light btn-square rounded-circle me-2" href="">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a class="btn btn-light btn-square rounded-circle me-2" href="">
                <i class="fab fa-twitter"></i>
              </a>
              <a class="btn btn-light btn-square rounded-circle me-2" href="">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a class="btn btn-light btn-square rounded-circle me-2" href="">
                <i class="fab fa-instagram"></i>
              </a>
              <a class="btn btn-light btn-square rounded-circle" href="">
                <i class="fab fa-youtube"></i>
              </a>
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
            class="collapse navbar-collapse justify-content-between"
            id="navbarCollapse"
          >
            <div class="navbar-nav mr-auto py-0">
              <a
                href="index.html"
                class="nav-item nav-link active"
                @click.prevent="this.$router.push('/')"
                >Home</a
              >
              <a
                href="about.html"
                class="nav-item nav-link"
                @click.prevent="this.$router.push('/about')"
                >About</a
              >
              <a
                href="class.html"
                class="nav-item nav-link"
                @click.prevent="this.$router.push('/targetMuscle')"
                >Classes</a
              >
            </div>
            <a
              @click.prevent="this.$router.push('/register')"
              class="btn btn-primary py-md-3 px-md-5 d-none d-lg-block"
              >Sign Up</a
            ><a
              @click.prevent="this.$router.push('/login')"
              class="btn btn-primary py-md-3 px-md-5 d-none d-lg-block"
              style="margin-left: 1rem"
              >Sign In</a
            >
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
              <a href="" class="btn btn-primary py-md-3 px-md-5 me-3"
                >Join Us</a
              >
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <img class="w-100" src="../assets/img/carousel-2.jpg" alt="Image" />
          <div
            class="carousel-caption d-flex flex-column align-items-center justify-content-center"
          >
            <div class="p-3" style="max-width: 900px">
              <h5 class="text-white text-uppercase">Best Gym Center</h5>
              <h1 class="display-2 text-white text-uppercase mb-md-4">
                Grow Your Strength With Our Trainers
              </h1>
              <a href="" class="btn btn-primary py-md-3 px-md-5 me-3"
                >Join Us</a
              >
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
