<script>
import NavBar from "../components/Navbar.vue";
import MyBookCard from "../components/MyBookCard.vue";
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  components: {
    NavBar,
    MyBookCard,
  },
  computed: {
    ...mapState(useCounterStore, ["listOfMyBook"]),
  },
  methods: {
    ...mapActions(useCounterStore, ["readMyBook"]),
  },
  created() {
    this.readMyBook();
  },
};
</script>

<template>
  <div>
    <div>
      <NavBar />
    </div>

    <h2 class="text-center mt-5 mb-5">This is your cart:</h2>

    <div class="container">
      <div class="row">
        <MyBookCard
          v-for="item in listOfMyBook"
          :key="item.id"
          :perMyBook="item"
        />
      </div>
    </div>
  </div>
</template>;
