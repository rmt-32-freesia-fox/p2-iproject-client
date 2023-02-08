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
          <br />
          <a href="#" class="btn btn-primary">Join Here</a>
        </div>
      </div>
      <div class="col-lg-7">
        <div class="mb-4">
          <h1 class="display-3 text-uppercase mb-0">Welcome to Gymster</h1>
        </div>
        <h4 class="text-body mb-4">
          Sejarah singkat apa itu GYMSTER yaitu berasal dari susunan kata yang
          diawali dari kata Gym dan Diakhiri kata MASTER
        </h4>
        <p class="mb-4">
          Gym sendiri merupakan akronim dari gymnasium. Secara harfiah, gym
          dapat kita artikan sebagai tempat atau lokasi untuk melakukan kegiatan
          latihan dan olahraga, seperti layanan senam, atletik, dan kardio.
        </p>
        <div class="rounded bg-dark p-5">
          <div class="tab-content">
            <div class="tab-pane fade show active" id="pills-1">
              <p class="text-secondary mb-0">
                ‘ Gym ‘ adalah singkatan dari kata Gymnasium yang berarti pusat
                kebugaran. Gym juga bisa berarti ‘fitness centre’. Sedangkan
                ‘fitness’ berarti sebuah kondisi tubuh yang sehat dan bugar.
              </p>
            </div>
            <div class="tab-pane fade" id="pills-2">
              <p class="text-secondary mb-0">
                Sedangkan fitness adalah sebuah gaya hidup atau lifestyle yang
                seimbang untuk menjaga pola hidup sehat dan kebugaran tubuh.
                Namun, kebugaran di sini lebih beragam karena ada 3 faktor
                utama, yaitu olahraga (latihan), asupan nutrisi (makanan), dan
                juga istirahat.
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
        </div>
      </div>
    </div>
  </div>
  <!-- About End -->

  <Footer />
</template>
