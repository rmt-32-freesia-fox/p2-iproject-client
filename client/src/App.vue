<script>
import Navbar from './components/Navbar.vue';

export default {
  components: {
    Navbar
  }
}
</script>

<template>
  <Navbar v-if="!['login', 'register'].includes($route.name)" />
  <RouterView />
</template>