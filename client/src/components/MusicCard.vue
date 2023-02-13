<script>

export default {
  props: ['data'],
  methods: {
    msToTimeFormat(milliseconds) {
      var minutes = Math.floor(milliseconds / (1000 * 60));
      var seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);
      return minutes + ":" + (seconds < 10 ? "0" + seconds : seconds);
    },
  }
}

</script>


<template>

  <div
    class=" mt-3 w-80 h-20 shadow-xl border border-green-800 rounded-3xl grid grid-flow-col justify-evenly items-center ">
    <div class="w-12 h-12 rounded-sm border border-black overflow-hidden ">
      <img :src="data.album.images[1].url" width="100" height="100" alt="">
    </div>
    <div class="">
      <p> <b>{{ data.name }} </b> </p>
      <p>{{ data.artists[0].name }} </p>
    </div>
    <div class="">
      <p>{{ msToTimeFormat(data.duration_ms) }}</p>
    </div>


  </div>

</template>