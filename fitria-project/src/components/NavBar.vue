<script>
import { mapActions, mapState } from 'pinia';
import { useUserStore } from '../stores/user';

export default {
  computed: {
    ...mapState(useUserStore, ['isLogin']),
  },
  methods: {
    ...mapActions(useUserStore, ['logoutHandler']),
    localLogout() {
      this.logoutHandler();
    },
  },
};
</script>
<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link active" aria-current="page">Home</RouterLink>
          </li>
        </ul>
        <div>
          <div>
            <div class="d-flex">
              <RouterLink to="/payment" class="btn btn-outline-success"> Become Premium </RouterLink>
            </div>
          </div>
          <button @click.prevent="localLogout" class="btn btn-outline-success">Logout</button>
        </div>
        <div>
          <div class="d-flex">
            <RouterLink to="/login" role="button" class="btn btn-outline-success"> Login </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
