<script>
import { RouterView } from 'vue-router';
import { useUserStore } from './stores/user';
import { mapActions } from 'pinia';
export default {
  components: {
    RouterView,
  },
  methods: {
    ...mapActions(useUserStore, ['changeStatusIsLogin']),
  },
  created() {
    this.changeStatusIsLogin();
  },
};
</script>

<template>
  <RouterView />
</template>

<style></style>
