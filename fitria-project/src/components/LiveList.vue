<script>
import LiveDetail from './LiveDetail.vue';
import { mapState } from 'pinia';
import { useHoloStore } from '../stores/holomember';
export default {
  name: 'HoloList',
  components: { LiveDetail },
  computed: {
    ...mapState(useHoloStore, ['lives']),
  },
};
</script>
<template>
  <div>
    <LiveDetail v-for="live in lives" :key="live.id" :live="live" />
  </div>
</template>
