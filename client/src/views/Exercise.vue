<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import CardExercise from "../components/CardExercise.vue";

import { useCounterStore } from "../stores/counter";
import { mapActions, mapState } from "pinia";

export default {
  components: {
    Navbar,
    Footer,
    CardExercise,
  },

  data() {
    return {
      currentPage: 1,
    };
  },
  computed: {
    ...mapState(useCounterStore, ["exercise", "pagination"]),
    getRouteQuery() {
      return this.$route.query;
    },
  },

  methods: {
    ...mapActions(useCounterStore, ["getExercise"]),
    onClickHandler(page) {
      const input = {
        page: page ? page - 1 : 0,
        search: this.getRouteQuery.search,
        filter: this.getRouteQuery.filter,
      };
      this.getExercise(input);
      this.$router.push({
        path: "/exercise",
        query: {
          page,
          search: this.getRouteQuery.search,
          filter: this.getRouteQuery.filter,
        },
      });
    },
  },

  created() {
    this.getExercise(this.getRouteQuery);
    this.onClickHandler();
  },
};
</script>

<template>
  <Navbar />

  <!-- Class Timetable Start -->
  <div class="container-fluid p-5">
    <div class="mb-5 text-center">
      <h2 class="text-primary text-uppercase">List Movement Exercise</h2>
      <br />
    </div>
    <div class="tab-class text-center">
      <div class="tab-content">
        <div id="tab-1" class="tab-pane fade show p-0 active">
          <div class="row g-5">
            <CardExercise
              v-for="item in exercise"
              :key="item.length"
              :item="item"
            />
          </div>
        </div>
      </div>
      <vue-awesome-paginate
        class="d-flex justify-content-center"
        :total-items="pagination.currentPage ? pagination.currentPage : 1"
        :itemsPerPage="6"
        :maxPages="6"
        v-model="currentPage"
        @click.prevent="onClickHandler"
      />
    </div>
  </div>
  <!-- Class Timetable Start -->

  <Footer />
</template>
<style>
.pagination-container {
  display: flex;
  column-gap: 20px;
  margin-top: 3rem;
}
.paginate-buttons {
  height: 40px;
  width: 40px;
  border-radius: 20px;
  cursor: pointer;
  background-color: rgb(242, 242, 242);
  border: 1px solid rgb(217, 217, 217);
  color: black;
}
.paginate-buttons:hover {
  background-color: #d8d8d8;
}
.active-page {
  background-color: #ffbe33;
  border: 1px solid #ffbe33;
  color: white;
}
.active-page:hover {
  background-color: #ffbe33;
}
</style>
