<script>
export default {
  data() {
    return {};
  },
  props: ["perMyBook"],
};
</script>

<template>
  <!-- CARD UNTUK MYBOOK -->
  <div class="card" style="width: 18rem">
    <img
      class="card-img-top"
      :src="perMyBook.Book.imageUrl"
      alt="Card image cap"
    />
    <div class="card-body">
      <h5 class="card-title">{{ perMyBook.Book.title }}</h5>
      <p class="card-text mt-3 mb-0">
        <strong>Author:</strong> {{ perMyBook.Book.author }}
      </p>

      <hr />

      <a href="#" class="btn btn-primary text-light mx-1">See Details</a>
      <a href="#" class="btn btn-success text-light mx-1">Checkout!</a>
    </div>
  </div>
</template>