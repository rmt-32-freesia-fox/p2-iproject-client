<script>
import { useUserStore } from "../stores/user";
import { mapActions } from "pinia";
export default {
  name: "RegisterPage",
  data() {
    return {
      credential: {
        username: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(useUserStore, ["register"]),
    localRegister() {
      console.log("dsakjdisajdisaj");
      this.register(this.credential);
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
                  <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                    Create Your Account!!!
                  </p>

                  <form class="mx-1 mx-md-4">
                    <div
                      class="d-flex flex-row align-items-center mb-4"
                      @submit.prevent="localRegister"
                    >
                      <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input
                          type="text"
                          id="username-input"
                          class="form-control"
                          v-model="credential.username"
                        />
                        <label class="form-label" for="form3Example1c"
                          >Username</label
                        >
                      </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input
                          type="email"
                          id="email-input"
                          class="form-control"
                          v-model="credential.email"
                        />
                        <label class="form-label" for="form3Example3c"
                          >Email</label
                        >
                      </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input
                          type="password"
                          id="password-input"
                          class="form-control"
                          v-model="credential.password"
                        />
                        <label class="form-label" for="form3Example4c"
                          >Password</label
                        >
                      </div>
                    </div>

                    <div
                      class="d-flex justify-content-center mx-4 mb-3 mb-lg-4"
                    >
                      <button
                        type="button"
                        class="btn btn-primary btn-lg"
                        @click.prevent="localRegister"
                      >
                        Register
                      </button>
                      <RouterLink
                        role="button"
                        class="btn btn-warning btn-lg"
                        to="/login"
                      >
                        Cancel
                      </RouterLink>
                    </div>
                  </form>
                </div>
                <div
                  class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2"
                >
                  <img
                    src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/17640b0c-8132-4084-8fdb-cae33518f795/dealn8o-b6d74e0b-4e18-48e9-8d42-0be8329b2c7e.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzE3NjQwYjBjLTgxMzItNDA4NC04ZmRiLWNhZTMzNTE4Zjc5NVwvZGVhbG44by1iNmQ3NGUwYi00ZTE4LTQ4ZTktOGQ0Mi0wYmU4MzI5YjJjN2UuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.5kiYnXGFsaNgJtw_QiiZmYNwmzDdwBH9AfJUN21Vrdc"
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
  </div>
</template>
