<script>
import NavBar from "../components/Navbar.vue";
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  data() {
    return {
      word: "",
      amount: "",
    };
  },
  components: {
    NavBar,
  },
  computed: {
    ...mapState(useCounterStore, [
      "booksById",
      "translateResult",
      "converterResult",
    ]),
  },
  methods: {
    ...mapActions(useCounterStore, [
      "fetchBooksByID",
      "translateWord",
      "currencyConvert",
      "addToMyBook",
    ]),
  },
  created() {
    this.fetchBooksByID(this.$route.params.id);
  },
};
</script>

<template>
  <div>
    <NavBar />
    <section
      class="col-md-9 ms-sm-auto col-lg-10 px-md-4"
      id="new-job-section"
      style="margin: auto"
    >
      <div
        class="
          justify-content-between
          align-items-center
          pt-3
          pb-2
          mb-3
          border-bottom
        "
      >
        <!-- TRANSLATE BAR -->
        <div class="text-align:center">
          <form
            class="row g-2 text-align:center justify-content-center"
            @submit.prevent="this.translateWord(word)"
          >
            <div class="col-5">
              <input
                type="text"
                class="form-control"
                placeholder="Translate words/sentences that you don't understand here"
                v-model="word"
              />
            </div>
            <div class="col-auto">
              <button type="submit" class="btn btn-primary mb-3">
                Translate
              </button>
            </div>
          </form>
        </div>
        <!-- TRANSLATE BAR -->

        <!-- TRANSLATE RESULT -->
        <h6 class="text-center">
          <strong> Translate Result: </strong>{{ this.translateResult.data }}
        </h6>
        <!-- TRANSLATE RESULT -->

        <!-- CURRENCY CONVERTER BAR -->
        <div class="text-align:center">
          <form
            class="row g-2 text-align:center justify-content-center"
            @submit.prevent="this.currencyConvert(amount)"
          >
            <div class="col-5">
              <input
                type="text"
                class="form-control"
                placeholder="Find out the book's price to IDR (Input USD Price here)"
                v-model="amount"
              />
            </div>
            <div class="col-auto">
              <button type="submit" class="btn btn-danger mb-3">Convert</button>
            </div>
          </form>
        </div>
        <!-- CURRENCY CONVERTER BAR -->

        <!-- CONVERTER RESULT -->
        <h6 class="text-center">
          <strong> Book's price in IDR: </strong>{{ this.converterResult.data }}
        </h6>
        <!-- CONVERTER RESULT -->

        <hr />

        <h1
          class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4"
          style="margin: auto; text-align: center"
        >
          Book Details
        </h1>
      </div>
      <div class="row" style="margin: auto; width: 50%">
        <div class="col my-auto px-5">
          <img :src="booksById.imageUrl" alt="" height="250" />
          <hr />
          <h5>Scan QR Code:</h5>
          <img :src="booksById.qrCodeGenerator" alt="" height="150" />
        </div>

        <div class="col">
          <h5>Title</h5>
          <p class="lead">{{ booksById.title }}</p>

          <h5>Author</h5>
          <p class="lead">{{ booksById.author }}</p>

          <h5>Publisher</h5>
          <p class="lead">{{ booksById.publisher }}</p>

          <h5>Price (In USD)</h5>
          <p class="lead">{{ booksById.price }}</p>

          <h5>Review</h5>
          <p class="lead">{{ booksById.review }}</p>
        </div>

        <hr />

        <a
          href="#"
          class="
            btn btn-warning
            text-light
            mx-2
            mb-5
            justify-content-center
            d-flex
          "
          @click.prevent="addToMyBook(booksById.id)"
          >Add To Cart</a
        >
      </div>
    </section>
  </div>
</template>