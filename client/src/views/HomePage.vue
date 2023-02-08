<script>
import NavBar from "../components/Navbar.vue";
import BookCard from "../components/BookCard.vue";
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  components: {
    NavBar,
    BookCard,
  },
  data() {
    return {
      book: "",
    };
  },
  computed: {
    ...mapState(useCounterStore, ["books", "resultSearchBook"]),
    datum() {
      return this.resultSearchBook[0];
    },
  },
  methods: {
    ...mapActions(useCounterStore, ["fetchBooks", "searchBook"]),
  },

  created() {
    this.fetchBooks();
  },
};
</script>

<template>
  <div>
    <NavBar />

    <!-- HEADER -->
    <div class="bg-dark py-5">
      <div class="container px-4 px-lg-5 m-3">
        <div class="text-center text-white">
          <h1 class="display-4 fw-bolder text-warning">
            Welcome to 'Berliterasi'
          </h1>
          <p class="lead fw-normal mb-0">
            Get any review on most popular books around the world and buy it
            within 1 click!
          </p>
        </div>
      </div>
    </div>

    <br />

    <!-- BOOK CARD -->
    <div class="container">
      <div class="row">
        <BookCard v-for="item in books" :key="item.id" :perBook="item" />
      </div>
    </div>

    <hr />

    <!-- SEARCH BOOK -->
    <div class="text-align:center">
      <h5 class="text-justify text-align:center text-center">
        Search Trivia About Your Favorite Book Here
      </h5>
      <p class="text-justify text-align:center text-center">
        Tips: search with combination of full title and author
      </p>
      <form
        class="row g-2 text-align:center justify-content-center"
        @submit.prevent="searchBook(book)"
      >
        <div class="col-5">
          <input
            v-model="book"
            type="text"
            class="form-control"
            placeholder="e.g. Harry Potter J. K. Rowling"
          />
        </div>
        <div class="col-auto">
          <button type="submit" class="btn btn-success mb-3">Search</button>
        </div>
      </form>
    </div>

    <!-- RESULT SEARCH BOOK -->
    <div class="text-justify text-align:center text-center">
      <h6><strong> Title: </strong>{{ datum?.name }}</h6>

      <h6><strong> GoodReads URL: </strong> {{ datum?.url }}</h6>

      <h6><strong> Author Name: </strong>{{ datum?.authors[0] }}</h6>

      <h6><strong> Rating: </strong>{{ datum?.rating }}</h6>

      <h6><strong> First Year Published: </strong>{{ datum?.year }}</h6>
    </div>

    <hr />

    <!-- PAGE - PAGINATION -->
    <nav aria-label="Page navigation example" class="justify-content-center">
      <ul class="pagination justify-content-center">
        <li class="page-item">
          <a class="page-link" href="#" @click.prevent="">Previous</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#" @click.prevent="">1</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#" @click.prevent="">2</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#" @click.prevent="">3</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#" @click.prevent="">Next</a>
        </li>
      </ul>
    </nav>
  </div>
</template>