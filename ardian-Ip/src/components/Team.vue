<script>
import { useAuthDota } from '../stores/useAuthDota';
import { mapState, mapActions } from 'pinia';
export default {
  props: ['item'],
  methods: {
    ...mapActions(useAuthDota, ['fetchTeamById', 'buyStiker', 'sendMail']),

    buttonId(value) {
      this.fetchTeamById(value);
    },

    forBuySticker() {
      this.buyStiker();
    },
  },
};
</script>

<template>
  <div class="card 1">
    <div class="card_image">
      <a href="" @click.prevent="buttonId(item.team_id)">
        <img :src="item.logo_url" />
      </a>
      <div class="px-5">
        <button @click="forBuySticker" class="rounded-lg px-8 py-2 text-xl bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300">Buy A Sticker</button>
      </div>
    </div>
  </div>
</template>
