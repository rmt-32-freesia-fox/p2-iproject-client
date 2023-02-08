<script>
import { mapStores } from 'pinia';
import { usePublitioStore } from './stores/publitio'
export default {
  computed:{
    ...mapStores(usePublitioStore)
  },
  methods:{
    ok(){
      console.log(this.publitioStore.file)
    }
  }
}
</script>

<template>
  <!-- <RouterView /> -->
  <button @click="publitioStore.upload()">Triger me</button>

  <form enctype="multipart/form-data">

    <input type="file" ref="upfile" @change="()=> publitioStore.file = $refs.upfile.files[0]">
  </form>
</template>

<style scoped>
</style>
