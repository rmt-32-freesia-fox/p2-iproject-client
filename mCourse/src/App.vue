<script setup>
import { RouterView } from "vue-router";
import navbar from "./components/navbar.vue";
import loader from "./components/loader.vue";
</script>

<template>
  <navbar />
  <loader />
  <RouterView />
</template>

<style>
body {
  background-color: rgb(241 245 249);
  font-family: "Poppins", sans-serif;
}
</style>
