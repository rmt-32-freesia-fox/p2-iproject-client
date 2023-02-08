<script>

import { RouterLink, RouterView } from 'vue-router'
import Navbar from "../src/components/Navbar.vue"


export default {
  components: {
    Navbar
  }
}
</script>

<template>


  <Navbar />


  <RouterView />

</template>