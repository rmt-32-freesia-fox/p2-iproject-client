<script>

  export default {
    props:['artist']
  }

</script>


<template>

  <div  
    class="items border border-[rgba(112, 112, 112, 0.36)] shadow-xl  p-2 rounded-bl-xl rounded-br-xl  ">
    <div class="h-[200px]  overflow-hidden ">
      <img :src="artist.images[1].url" alt="" class="border border-[rgba(112, 112, 112, 0.36)]">
    </div>
    <div>
      <p class="font-bold">
        {{ artist.name }}
      </p>
    </div>
  </div>

</template>