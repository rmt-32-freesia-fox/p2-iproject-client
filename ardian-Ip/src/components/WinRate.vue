<script>
import { useAuthDota } from '../stores/useAuthDota';
import { mapState, mapActions } from 'pinia';
import Rate from '../components/Rate.vue';
export default {
  components: {
    Rate,
  },
  created() {
    this.fetchTeamById();
  },

  computed: {
    ...mapState(useAuthDota, ['getById']),
  },

  methods: {
    ...mapActions(useAuthDota, ['fetchTeamById']),
  },
};
</script>

<template>
  <div>
    <Rate :item="getById" />
  </div>
</template>
