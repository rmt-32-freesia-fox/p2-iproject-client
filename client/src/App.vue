<script>
import { mapActions } from 'pinia'
import { RouterView } from 'vue-router'
import MainLayout from './components/layouts/MainLayout.vue'
import { useUserStore } from './stores/user'
import Notification from './components/molecules/Notification.vue'

export default {
  components: {
    RouterView,
    MainLayout,
    Notification
  },
  methods: mapActions(useUserStore, ['init']),
  created() {
    this.init()
  },
}
</script>

<template>
  <MainLayout>
    <Notification />
    <RouterView />
  </MainLayout>
</template>
