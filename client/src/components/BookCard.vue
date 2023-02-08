<script>
import { RouterLink } from "vue-router";
import { mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  data() {
    return {};
  },
  props: ["perBook"],
  methods: {
    ...mapActions(useCounterStore, ["fetchBooksByID", "addToMyBook"]),
  },
};
</script>

<template>
  <!-- CARD UNTUK HOME -->
  <div class="col-3 mt-4 ml-2 mr-2 mb-2 d-flex">
    <div class="card" rounded style="width: 20rem">
      <img class="card-img-top" :src="perBook.imageUrl" alt="Job image" />

      <div class="card-body d-flex flex-column">
        <h5 class="card-title mb-1">{{ perBook.title }}</h5>
        <p class="card-text mt-3 mb-0">
          <strong>Author:</strong> {{ perBook.author }}
        </p>

        <hr />

        <div class="d-flex flex-row justify-content-center mt-auto">
          <!-- <RouterLink to="/detail" class="btn btn-primary text-light mx-2"
            >See Details</RouterLink
          > -->
          <a
            href="#"
            class="btn btn-primary text-light mx-2 mt-auto"
            @click.prevent="$router.push(`/detail/${perBook.id}`)"
            >See Details</a
          >
          <a
            href="#"
            class="btn btn-warning text-light mx-2 mt-auto"
            @click.prevent="addToMyBook(perBook.id)"
            >Add To Cart</a
          >
        </div>
      </div>
    </div>
  </div>
</template>