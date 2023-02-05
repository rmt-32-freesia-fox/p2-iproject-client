<script setup>
import { RouterView } from "vue-router";
import navbar from "./components/navbar.vue";
</script>

<template>
  <navbar />
  <RouterView />
</template>

<style>
body {
  background-color: rgb(241 245 249);
}
</style>
