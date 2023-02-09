<script>
import { useAuthDota } from '../stores/useAuthDota';
import { mapState, mapActions } from 'pinia';
import Players from '../components/Players.vue';
export default {
  components: {
    Players,
  },
  created() {
    this.fetchPlayers();
  },

  computed: {
    ...mapState(useAuthDota, ['getdota2']),
  },

  methods: {
    ...mapActions(useAuthDota, ['fetchPlayers']),
  },
};
</script>

<template>
  <div class="Page">
    <div class="Bar">Game Info</div>
    <div class="Summary">
      <h1>Summary</h1>
      <section>
        Dota 2 is a multiplayer online battle arena video game and the stand-alone sequel to the Defense of the Ancients (DotA) mod. Developed by Valve Corporation, the game was officially released on July 9, 2013 as a free-to-play title
        for Microsoft Windows, concluding a beta testing phase that began in 2011. OS X and Linux versions of Dota 2 were released on July 18, 2013. In most regions, Dota 2 is exclusively available through Valve's content delivery platform,
        Steam.
      </section>

      <section>
        Each match of Dota 2 involves two teams, both containing five players and occupying a fortified stronghold at either end of the map. Victory is achieved by destroying the enemy's Ancient, which is invulnerable until certain
        objectives are achieved. Each player controls a "Hero" character and focuses on leveling up, acquiring items and fighting against the other team to achieve victory during each match.
      </section>

      <section>
        Development of Dota 2 began in 2009, with the hiring of DotA developer "IceFrog" to serve as the sequel's lead designer. Dota 2 was praised by video game critics, who lauded it for remaining faithful to its predecessor while also
        increasing the level of production quality, as well as for its engaging and rewarding gamheplay experience. However, Dota 2 was criticized for its steep learning curve and inhospitable community. The game has become the most played
        on Steam, with daily peaks of over 550,000 concurrent players.
      </section>
    </div>
    <div class="Videos">
      <h1>Videos</h1>
      <iframe width="560" height="315" src="//www.youtube.com/embed/tMzpLnQtVuE" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="Players">
      <h1>Players</h1>
      <Players v-for="item in getdota2" :key="item.account_id" :item="item" />
    </div>
    <div class="Info">
      <div class="Game Picture"><img src="https://tse4.mm.bing.net/th?id=OIP.K78_zR49gEb4zx-zjbsp9wHaEK&pid=Api&P=0" /></div>
      <div class="Title">Dota 2</div>
    </div>
    <video autoplay>
      <source src="/audio/videoplayback.mp4" type="video/mp4" />
    </video>
  </div>
</template>
