<script>
export default {
  props: ["item"],
};
</script>

<template>
  <div class="col-lg-3 col-md-4 col-sm-6">
    <div class="rounded text-center py-5 px-3" style="background-color: black">
      <h6 class="text-uppercase text-light mb-3"></h6>
      <h4 class="text-uppercase text-primary">{{ item }}</h4>
    </div>
  </div>
</template>
