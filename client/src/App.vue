<script >
import { RouterLink, RouterView } from "vue-router";
import Navbar from './components/Navbar.vue'

export default {
  component: {
    Navbar
  }
}

</script>

<template>
  <header>
    <div>
      <Navbar />
    </div>
    <div>
      <RouterView />
    </div>
  </header>
</template>
