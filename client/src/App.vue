<script>
import { mapActions } from 'pinia'
import { RouterView } from 'vue-router'
import MainLayout from './components/layouts/MainLayout.vue'
import { useUserStore } from './stores/user'
export default {
  components: {
    RouterView,
    MainLayout,
  },
  methods: mapActions(useUserStore, ['init']),
  created() {
    this.init()
  },
}
</script>

<template>
  <MainLayout>
    <RouterView />
  </MainLayout>
</template>
