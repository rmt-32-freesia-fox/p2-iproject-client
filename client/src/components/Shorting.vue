<script>
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  data() {
    return {
      search: "",
      name: "",
      page: "",
    };
  },
  computed: {
    ...mapState(useCounterStore, ["exercise"]),
    getPageRouter() {
      return this.$route.query;
    },
  },
  methods: {
    ...mapActions(useCounterStore, ["getExercise"]),

    handleShorting() {
      //   console.log(data);
      const input = {
        search: this.search,
        name: this.name ? this.name : "",
        page: this.page,
      };
      console.log(input);
      this.getExercise(input);
      this.$router.push({
        path: "/exercise",
        query: {
          search: this.search,
          name: this.name ? this.name : "",
          page: this.page,
        },
      });
    },
  },
  created() {
    this.getExercise();
  },
};
</script>

<template>
  <div style="justify-content: center">
    <form @submit.prevent="handleShorting">
      <input
        style="
          width: 30%;
          border-radius: 4rem;
          margin: 1rem 2.2rem;
          padding: 0.5rem;
        "
        type="text"
        placeholder="Search Exercise By Name.."
        v-model="search"
      />
      <button
        style="
          width: 10rem;
          border-radius: 4rem;
          background-color: #fb5b21;
          color: white;
          padding: 0.5rem;
        "
        type="submit"
      >
        Search
      </button>
    </form>

    <ul class="filters_menu">
      <select
        name=""
        style="
          border-radius: 4rem;
          background-color: #fb5b21;
          padding: 0.5rem;
          color: white;
        "
        class="form-select"
        v-model="name"
        @click.prevent="handleShorting"
      >
        <option value="" selected>---Sort By Category---</option>
        <option :value="''">All</option>
        <option :value="'bisep'">Bisep</option>
        <option :value="'cruch'">Cruch</option>
        <option :value="'abs'">Abs</option>
        <option :value="'back'">Back</option>
        <option :value="'body'">Body</option>
        <option :value="'shoulder'">Shoulder</option>
      </select>
    </ul>
  </div>
</template>
