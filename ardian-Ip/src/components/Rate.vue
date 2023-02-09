<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'vue-chartjs';
ChartJS.register(ArcElement, Tooltip, Legend);
export default {
  props: ['item'],
  data() {
    return {
      data: {
        labels: ['Win', 'Lose'],
        datasets: [
          {
            label: `${this.item.name}`,
            data: [this.item.wins, this.item.losses], // win dan lose lempar variabel
            backgroundColor: ['green', 'red'],
            circumference: 500,
          },
        ],
      },
      options: {
        responsive: true,
      },
    };
  },

  computed: {
    urlQr() {
      return window.location.href;
    },
  },

  components: {
    Doughnut,
  },
};
</script>

<template>
  <div class="Page">
    <div class="Bar">Game Win Rate</div>
    <div class="Summary">
      <h1>{{ item.name }}</h1>
      <section>Rating: {{ item.rating }}</section>

      <section>Last Match Time: {{ item.last_match_time }}</section>

      <section>ID Team: {{ item.team_id }}</section>
    </div>
    <div class="Videos">
      <h1>{{ item.name }} {{ item.tag }}</h1>
      <iframe width="560" height="315" :src="item.logo_url" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="Players">
      <h3>For QR code</h3>
      <img :src="`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${urlQr}`" class="min-h-full" :alt="urlQr" />
    </div>
    <div class="Info">
      <div class="Title">{{ item.tag }}</div>
      <Doughnut :data="data" :options="options" />
    </div>
  </div>
</template>
