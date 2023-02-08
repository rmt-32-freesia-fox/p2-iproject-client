<script>
import { mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(useCounterStore, ["loginHandler", "googleLoginHandler"]),

    submitHandler() {
      const newInput = {
        email: this.email,
        password: this.password,
      };

      this.loginHandler(newInput);
    },
  },
};
</script>

<template>
  <section class="vh-100" style="background-color: rgb(47, 126, 216)">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-lg-12 col-xl-11">
          <div class="card text-black" style="border-radius: 80px">
            <div class="card-body p-md-5">
              <div class="row justify-content-center">
                <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                  <h1 class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                    Log In
                  </h1>

                  <form class="mx-1 mx-md-4" @submit.prevent="submitHandler">
                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <label class="form-label" for="form3Example1c"
                          >Email</label
                        >
                        <label class="text-danger text-end fw-bold">*</label>
                        <input
                          type="text"
                          id="login-email"
                          class="form-control"
                          placeholder="Enter email address"
                          autocomplete="off"
                          required
                          v-model="email"
                        />
                      </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <label class="form-label" for="form3Example4c"
                          >Password</label
                        >
                        <label class="text-danger text-end fw-bold">*</label>
                        <input
                          type="password"
                          id="login-password"
                          class="form-control"
                          placeholder="Enter password"
                          autocomplete="off"
                          required
                          v-model="password"
                        />
                      </div>
                    </div>

                    <div
                      class="d-flex justify-content-center mx-4 mb-3 mb-lg-4"
                    >
                      <button
                        class="btn btn-lg btn-primary rounded-pill w-100 p-2"
                        type="submit"
                      >
                        Log In
                      </button>
                      <!-- <reusableButton
                        :buttonType="'submit'"
                        :buttonClass="'btn btn-lg btn-primary rounded-pill w-100 p-2'"
                        buttonTitle="Log In"
                      /> -->
                    </div>
                  </form>

                  <!-- GOOGLE LOGIN -->
                  <div
                    id="google-button"
                    style="
                      padding: 20px;
                      display: flex;
                      justify-content: center;
                    "
                  >
                    <GoogleLogin :callback="googleLoginHandler" />
                  </div>

                  <div
                    class="col-12"
                    style="
                      padding: 20px;
                      display: flex;
                      justify-content: center;
                    "
                  >
                    <p class="medium mb-0">
                      Don't have account?
                      <a href="" @click.prevent="$router.push('/register')"
                        >Create an account</a
                      >
                    </p>
                  </div>
                </div>
                <div
                  class="
                    col-md-10 col-lg-6 col-xl-7
                    d-flex
                    align-items-center
                    order-1 order-lg-2
                  "
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                    class="img-fluid"
                    alt="Sample image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>