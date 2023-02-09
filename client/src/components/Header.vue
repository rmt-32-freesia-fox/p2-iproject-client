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
      search: '',
      languages: [
        {
          no: "16",
          name: "English",
          native: "English",
          code: "en",
        }
      ],
      selectedLanguage: "en",
      texts: [],
      // texts: '',
      iframeSrc: ''
    };
  },
  beforeMount() {
    const token = localStorage.getItem('token')
    if (token) { 
      
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
    join(arr) {
      return arr.join(',')
    },
  },
};
</script>


<template>
  
  <header
    class="w-full h-20 shadow-xl   rounded-3xl grid grid-flow-col justify-evenly items-center  grid-cols-[1fr_1fr_1fr] ">
    <div class=" pl-5 w-full h-full flex items-center  " >
      <!-- <p>SlowLify</p> -->
      <img src="https://img.freepik.com/premium-vector/note-music-logo-design_93835-645.jpg?w=2000" width="50" height="50"  alt="">
    </div>
    <div class=" flex justify-center gap-5  " >  <!--border border-black -->
      <RouterLink to="/">
        <a href="#">Home</a>
      </RouterLink>
      <RouterLink to="/search">
        <a href="#">Search</a>
      </RouterLink>
    </div>
    <div class=" grid grid-flow-col justify-center items-center gap-5   " >
      <div class="w-20 h-6  border border-green-800 text-green-800  rounded-sm flex justify-center items-center ">
        <p>{{ (spotifyProfile.isPaid) ? "Premium" : "Free" }}</p>
      </div>
      <div class="w-12 h-12 rounded-full border border-black overflow-hidden ">
        <img :src="spotifyProfile?.spotify?.images[0]?.url" width="100" height="100" alt="">
      </div>
    </div>

  </header>
  
</template>