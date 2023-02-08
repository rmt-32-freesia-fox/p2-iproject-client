<script>
  import { mapActions, mapState, mapWritableState } from "pinia";
import { useDataStore } from "../stores/counter";
import { RouterLink, RouterView } from "vue-router";
import router from '../router'
export default {
  components: {
    
  },
  data() {
    return {
      token: '',
      search:''
    };
  },
  beforeMount() {
    const token = localStorage.getItem('token')
    if(token) {
      this.token = token
      // this.login(code)
      this.getProfile()
      this.getTopTracks()
      this.getTopArtists()
      this.getRecentlyPlayed() 
      this.getTopGlobal()
    }
  },
  created() {
    
  },
  watch: {
    
  },
  computed: {
    ...mapState(useDataStore, ["spotifyProfile", "spotifyTopTracks", "recentlyPlayed", "topArtists", "searchList", "topGlobal"]),
    // ...mapWritableState(useDataStore, ["access_token"]),
  },
  methods: {
    ...mapActions(useDataStore, ["login", "getProfile", "getTopTracks", "getTopArtists", "getRecentlyPlayed", "searchSongs", "getTopGlobal", "snap", "getDownloadLink"]),
    tes() {  
    },
      msToTimeFormat(milliseconds) {
      var minutes = Math.floor(milliseconds / (1000 * 60));
      var seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);
      return minutes + ":" + (seconds < 10 ? "0" + seconds : seconds);
    },
    getEmbedLink(id) {
      return `https://open.spotify.com/embed/track/${id}?utm_source=generator`
    },
     download() { 
      window.location.href = "https://api.spotifydown.com/dl/Omer%20Adam%20-%20%D7%90%D7%A0%D7%99.mp3";
    }, 
    join(arr) {
      return arr.join(',')
    }
    
  },
};



 

</script>


<template>
  <p>my code: {{ token }}</p>
  
  <h1>Hi, {{ spotifyProfile.spotify.display_name }}</h1>
  <img :src="spotifyProfile.spotify.images[0].url" width="100" height="100" alt="">
  <h1>status: {{ (spotifyProfile.isPaid) ? "premium" : "unpaid"  }}</h1>
  <!-- <a href="https://api.spotifydown.com/dl/Omer%20Adam%20-%20%D7%90%D7%A0%D7%99.mp3" target="_blank" >Download</a> -->
  <button @click="snap()" id="pay-button">Pay!</button>
  <button @click="download()" >downlaod</button>
  <br> 
  
  <input  v-model="search" type="text" name="" id=""> <button @click="searchSongs(search)" >Search a song </button>
  
  <ul>
    <li>
      <img :src="topGlobal.images[0].url" width="50" height="50" alt="">  - {{ topGlobal.name }}
    </li>
    <li v-for="each in topGlobal.tracks.items" >
      <img :src="each.track.album.images[1].url" alt="" width="50" height="50" >  
      {{ each.track.name }} - {{ each.track.artists[0].name }} - {{ each.track.album.name }} - {{ msToTimeFormat(each.track.duration_ms) }}
      <button v-if="(spotifyProfile.isPaid)"  @click="getDownloadLink(each.track.id)" >{{ each.id }}</button>      
      
    </li>
  </ul>
  
  
  <ul v-if="searchList" > 
    <li v-for="each in searchList.tracks.items" > 
      <img :src="each.album.images[1].url"  width="50" height="50" alt="">  
      {{ each.name }} -  {{ each.artists[0].name }} -  {{ each.album.name }} -  {{ msToTimeFormat(each.duration_ms) }}
      <button v-if="(spotifyProfile.isPaid)"  @click="getDownloadLink(each.track.id)" >{{ each.id }}</button>      
    </li> 
  </ul>
  
  <ul>
    <li>you favourite artists</li>
    <li v-for="each in topArtists.items" > 
      <img :src="each.images[1].url"  width="50" height="50" alt="">  
      {{ each.name }} followers: {{ each.followers.total  }} popularity: {{ each.popularity }} {{ each.genres.join(', ') }}
    </li>
    
  </ul>
  
  <ul>
    <li>your reccently played</li>
    <li v-for="each in recentlyPlayed.items" > 
      <img :src="each.track.album.images[1].url"  width="50" height="50" alt="">  
      {{ each.track.name }} - {{ each.track.artists[0].name }} - {{ msToTimeFormat(each.track.duration_ms)  }}  
      <button v-if="(spotifyProfile.isPaid)"  @click="getDownloadLink(each.track.id)" >{{ each.track.id }}</button>      
    </li>
  </ul>
  
  <ul>
    <li>your top tracks</li>
    <li v-for="each in spotifyTopTracks.items" > 
      <img :src="each.album.images[1].url"  width="50" height="50" alt="">  
      {{ each.name }}  - {{ each.artists[0].name }} - {{ msToTimeFormat(each.duration_ms)  }} - 
      <button v-if="(spotifyProfile.isPaid)"  @click="getDownloadLink(each.id)" >{{ each.id }}</button> - 
      <!-- <iframe style="border-radius:12px" :src="getEmbedLink(each.id)" width="500px" height="50px" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> -->
      
    </li>
  </ul>
  
</template>

<style>
 

</style>