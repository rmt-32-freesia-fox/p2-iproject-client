<script>
import { mapStores } from "pinia";
import { useUserStore } from "../stores/user";
export default {
  name: "RegisterView",
  data() {
    return {
      toggle: true,
    };
  },
  computed: {
    ...mapStores(useUserStore),
  },
  created(){
    this.userStore.errMsg = ''
  }
};
</script>
<template>
  <div class="login-page bg-light">
    <div class="container">
      <div class="row">
        <div class="col-lg-10 offset-lg-1">
          <h3 class="">Register First Learn Next</h3>
          <div class="bg-white shadow rounded">
            <div class="row">
              <div class="col-md-7 pe-0">
                <div class="form-left h-100 py-5 px-5">
                  <form
                    @submit.prevent="userStore.register('students')"
                    class="row g-4"
                  >
                    <div class="col-12">
                      <label>Username<span class="text-danger">*</span></label>
                      <div class="input-group">
                        <div class="input-group-text">
                          <i class="bi bi-person-fill"></i>
                        </div>
                        <input
                          v-model="userStore.username"
                          type="text"
                          class="form-control"
                          placeholder="Enter Username"
                        />
                      </div>
                    </div>

                    <div class="col-12">
                      <label>Email<span class="text-danger">*</span></label>
                      <div class="input-group">
                        <div class="input-group-text">
                          <i class="bi bi-envelope-at-fill"></i>
                        </div>
                        <input
                          v-model="userStore.email"
                          type="text"
                          class="form-control"
                          placeholder="Enter Email"
                        />
                        <span>{{ userStore.errMsg }}</span>
                      </div>
                    </div>

                    <div class="col-12">
                      <label>Password<span class="text-danger">*</span></label>
                      <div class="input-group">
                        <div class="input-group-text">
                          <i class="bi bi-lock-fill"></i>
                        </div>
                        <input
                          v-model="userStore.password"
                          type="text"
                          class="form-control"
                          placeholder="Enter Password"
                        />
                    </div>
                    <small class="text-danger">{{ userStore.errMsg }}</small>
                    </div>

                    <div class="col-sm-6">
                      <div class="form-check">
                        <small class="container-fluid"
                          >Or
                          <RouterLink to="/login" class="text-danger"
                            >Sign In</RouterLink
                          ></small
                        >
                      </div>
                    </div>

                    <div class="col-12">
                      <button
                        type="submit"
                        class="btn btn-primary px-4 float-end mt-4"
                      >
                        Sign Up
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div class="col-md-5 ps-0 d-none d-md-block">
                <div
                  class="form-right h-100 bg-dark text-white text-center pt-5"
                >
                  <i class="bi bi-alexa"></i>
                  <h2 class="fs-1">
                    Be Member Of <span class="text-warning">SPARTA</span>Course
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
}
.login-page {
  width: 100%;
  height: 100vh;
  display: inline-block;
  display: flex;
  align-items: center;
}
.form-right i {
  font-size: 100px;
}
.alert.alert-primary {
  cursor: pointer;
}
.alert.alert-primary:hover {
  background-color: wheat;
  transform: translateY(-10px);
}
</style>
