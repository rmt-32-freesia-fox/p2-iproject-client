<script>
import { RouterLink, RouterView } from 'vue-router'
import NavbarVue from './components/Navbar.vue';
  export default {
    components:{
      NavbarVue
    }
  }
</script>
  
<template>
  <NavbarVue/>
  <RouterView />
</template>
