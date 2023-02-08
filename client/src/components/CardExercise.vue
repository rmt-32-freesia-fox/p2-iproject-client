<script>
export default {
  props: ["item"],
};
</script>

<template>
  <div class="col-lg-4 col-md-6">
    <div class="bg-light rounded text-center p-5">
      <img :src="item.gifUrl" alt="" />
      <h3 class="text-uppercase my-4">{{ item.name }}</h3>
      <h5 class="text-uppercase my-4" style="color: #fb5b21">
        {{ item.bodyPart }}
      </h5>
      <p class="text-uppercase">target: {{ item.target }}</p>
      <a class="text-uppercase" style="color: blue"
        >Read More <i class="bi bi-arrow-right"></i
      ></a>
    </div>
  </div>
</template>
