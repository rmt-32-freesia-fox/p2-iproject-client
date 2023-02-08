<script>
export default {
  props: ["item"],
};
</script>

<template>
  <div class="col-lg-3 col-md-4 col-sm-6">
    <div
      class="rounded text-center py-5 px-3"
      style="
        background: url('https://cdn-ami-drupal.heartyhosting.com/sites/muscleandfitness.com/files/styles/full_node_image_1090x614/public/media/dumbbell-curl_2_2.jpg?itok=TGV8jtrH');
      "
    >
      <span class="material-symbols-outlined"> fitness_center </span>
      <h6 class="text-uppercase text-light mb-3"></h6>
      <h4 class="text-uppercase text-primary">{{ item.name }}</h4>
    </div>
  </div>
</template>
