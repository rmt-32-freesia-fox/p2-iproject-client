<script>
import {mapStores} from 'pinia'
import { useUserStore } from '../stores/user';
export default {
    name:'Navbar',
    computed:{
      ...mapStores(useUserStore)
    }
}
</script>
<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <RouterLink class="navbar-brand" to="/"><i class="bi bi-alexa fs-3"></i>SPARTA COURSE</RouterLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <RouterLink class="nav-link active" aria-current="page" to="courses">Courses</RouterLink>
        </li>
        <li class="nav-item">
            <RouterLink class="nav-link active" aria-current="page" to="/categories">Categories</RouterLink>
        </li>


        <li class="nav-item dropdown" v-if="userStore.isLogin">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {{ userStore.username }}
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><RouterLink class="dropdown-item" to="/your-course">Your Courses</RouterLink></li>
            <li><hr class="dropdown-divider"></li>
            <li><a style="cursor:pointer" @click.prevent="userStore.logOut()" class="dropdown-item">Logout</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown" v-else>
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Account
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><RouterLink class="dropdown-item" to="/login-std">Sign In As Student</RouterLink></li>
            <li><RouterLink class="dropdown-item" to="/login">Sign In As Teacher</RouterLink></li>
            <li><RouterLink class="dropdown-item" to="/register">Sign Up</RouterLink></li>
          </ul>
        </li>


      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search Course..." aria-label="Search">
        <button class="btn btn-outline-primary" type="submit"><i class="bi bi-search"></i></button>
      </form>
    </div>
  </div>
</nav>
</template>