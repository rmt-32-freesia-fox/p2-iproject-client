<script>
import { mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  data() {
    return {
      code: this.$route.query.code,
    };
  },
  methods: {
    ...mapActions(useCounterStore, ["githubLogin"]),
  },
  created() {
    this.githubLogin(this.code);
  },
};
</script>
<template>
  <div></div>
</template>
