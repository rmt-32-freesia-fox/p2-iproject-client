<script>
import { mapActions, mapState } from 'pinia';
import { useUserStore } from '../stores/user';
export default {
  name: 'LoginPage',
  data() {
    return {
      credential: { email: '', password: '' },
    };
  },
  computed: {
    ...mapState(useUserStore, ['isLogin']),
  },
  methods: {
    ...mapActions(useUserStore, ['loginHandler']),
    localLoginHandler() {
      this.loginHandler(this.credential);
    },
  },
};
</script>
<template>
  <div class="vh-100" style="background-color: #eee">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-lg-12 col-xl-11">
          <div class="card text-black" style="border-radius: 25px">
            <div class="card-body p-md-5">
              <div class="row justify-content-center">
                <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                  <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>
                  <form class="mx-1 mx-md-4" method="post" @submit.prevent="localLoginHandler">
                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input type="email" id="form3Example3c" class="form-control" v-model="credential.email" />
                        <label class="form-label" for="form3Example3c">Email</label>
                      </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input type="password" id="form3Example4c" class="form-control" v-model="credential.password" />
                        <label class="form-label" for="form3Example4c">Password</label>
                      </div>
                    </div>

                    <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      <button type="button" class="btn btn-primary btn-lg" @click.prevent="localLoginHandler">Log In</button>
                    </div>
                  </form>
                  <p class="text-muted">
                    Don't have an account?
                    <RouterLink to="/register" href="" class="register-direct text-decoration-none" role="button">Register Here</RouterLink>
                  </p>
                </div>
                <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                  <img src="https://ih1.redbubble.net/image.2361595205.3347/st,small,507x507-pad,600x600,f8f8f8.jpg" class="img-fluid" alt="Sample image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
