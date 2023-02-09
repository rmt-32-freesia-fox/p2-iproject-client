<script>
import { mapActions, mapWritableState } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapWritableState(useCounterStore, ["isLogin"]),
  },
  methods: {
    ...mapActions(useCounterStore, ["logoutHandler"]),
    toLoginPage() {
      console.log("To Login Page");
      this.$router.push("/login");
    },
  },
  created() {
    if (localStorage.access_token) {
      this.isLogin = true;
    }
  },
};
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container px-4 px-lg-5">
      <a class="navbar-brand"
        ><img
          src="../assets/ip-logo.png"
          width="50"
          class="d-inline-block me-2"
          alt="Link-Link"
      /></a>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
          <!-- HOME - JOBS CARD -->
          <li class="nav-item mx-1">
            <RouterLink to="/" class="nav-link active" aria-current="page"
              >Home</RouterLink
            >
          </li>
          <!-- BOOKMARKED JOBS -->
          <li class="nav-item mx-1">
            <!-- <a
              class="nav-link active"
              aria-current="page"
              @click.prevent="$router.push('/bookmark')"
              >Bookmarked Jobs</a
            > -->
            <RouterLink to="/mybook" class="nav-link active" aria-current="page"
              >My Book</RouterLink
            >
          </li>
        </ul>
        <form class="d-flex mx-2" @submit.prevent="toLoginPage" v-if="!isLogin">
          <button class="btn btn-outline-dark" type="submit">
            <i class="bi-cart-fill me-1"></i>
            Log In
            <!-- <span class="badge bg-dark text-white ms-1 rounded-pill">User</span> -->
          </button>
        </form>
        <form class="d-flex" @submit.prevent="logoutHandler" v-if="isLogin">
          <button class="btn btn-outline-dark" type="submit">
            <i class="bi-cart-fill me-1"></i>
            Log Out
            <!-- <span class="badge bg-dark text-white ms-1 rounded-pill">User</span> -->
          </button>
        </form>
      </div>
    </div>
  </nav>
</template>