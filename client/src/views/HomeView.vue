<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { useDataStore } from "../stores/counter";
import { RouterLink, RouterView } from "vue-router";
import router from '../router'

import ArtistCard from "../components/ArtistCard.vue"

import MusicTable from "../components/Table.vue"
import MusicCard from "../components/MusicCard.vue"
 
export default {
  components: {
    ArtistCard,
    MusicTable,
    MusicCard
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
      iframeSrc: '',
      isPaused: false,
      spotifyId: 'spotify:episode:43cbJh4ccRD7lzM2730YK3',
      player: null
    };
  },
  async beforeMount() {
    // const token = localStorage.getItem('token')
    // if (token) {
    //   this.token = token
    //   // this.login(code)
    //   this.getProfile()
    //   this.getTopTracks()
    //   this.getTopArtists()
    //   this.getRecentlyPlayed()
    //   this.getTopGlobal()
    // }
  },
  mounted() {
    
  },
  created() {
    const token = localStorage.getItem('token')
    if (token) {
      this.token = token
      // this.login(code)
      this.getProfile()
      this.getTopTracks()
      this.getTopArtists()
      this.getRecentlyPlayed()
      this.getTopGlobal()
    }
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
    playSong(id) {
      this.iframeSrc = `https://open.spotify.com/embed/track/${id}?utm_source=generator` 
      // document.getElementById('spotify-iframe').contentWindow.postMessage('play', 'https://open.spotify.com');
    },
    async download(id) {
      const link = await this.getDownloadLink(id)
      window.location.href = "https://api.spotifydown.com/dl/Omer%20Adam%20-%20%D7%90%D7%A0%D7%99.mp3";
    },
    join(arr) {
      return arr.join(',')
    },
  },
};


</script>












<template class="" >  
  
  <p class="mt-5 text-[2rem] ">My Top Song</p>
  <div v-if="spotifyTopTracks.items?.length" class="mt-5 w-full h-[30rem] shadow-xl  rounded-3xl border border-black overflow-hidden grid">

    <div style="z-index:0" class=" h-[100%] w-[100%] overflow-hidden row-start-1 col-start-1">  
      <img :src="spotifyTopTracks.items[0].album.images[1].url" class=" w-[100%] blur-lg scale-125 brightness-[0.2]  ">
    </div>
    
    <div style="filter:brightness(1); box-shadow: inset 93px 33px 201px 5px black;" class="row-start-1 col-start-1 grid grid-flow-col grid-cols-[1fr_max-content] ">
      <div class=" pl-16 text-white  grid items-center " >
        <p class="text-[10rem] self-end " >{{ spotifyTopTracks.items[0].name }}</p>
        <div class="self-start" >
          <p class="font-bold" >By {{ spotifyTopTracks.items[0].artists[0].name }}</p> 
          <p class="" >{{ msToTimeFormat(spotifyTopTracks.items[0].duration_ms) }}</p> 
          <button @click="playSong(spotifyTopTracks.items[0].id)" type="button" class=" mt-4 focus:outline-none text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Play</button>        
        </div>
      </div>
      <div class=" my-8 mr-16 " >
        <img :src="spotifyTopTracks.items[0].album.images[1].url" class=" h-[100%] ">
      </div>
    </div>
  
</div>
<div v-else>
  <p>No data is currently available</p>
</div>


<p class="mt-5  text-[2rem]">My Top Artist</p>
  <div v-if="topArtists.items?.length" class="mt-5 w-full h-[30rem] shadow-xl  overflow-hidden grid">

    <div style="z-index:0" class=" h-[100%] w-[100%] overflow-hidden row-start-1 col-start-1">  
      <img :src="topArtists.items[0].images[1].url" class=" w-[100%] blur-lg scale-125 brightness-[0.2]  ">
    </div>
    
    <div style="filter:brightness(1); " class=" p-5 m-12 rounded-[50px] bg-white row-start-1 col-start-1 grid grid-flow-col grid-cols-[max-content_1fr] ">
     
        <img :src="topArtists.items[0].images[1].url" class=" ml-16 rounded-[250px]  h-[100%] ">
        <div class=" pl-16 text-gray-800  grid items-center " > 
          <p class="text-[6rem] self-end " >{{ topArtists.items[0].name }}</p>
          <div class="self-start" >
            <p class="font-bold" > {{ topArtists.items[0].genres.join(' - ') }}</p> 
          </div>
        </div> 
      
    </div>
  
</div>
<div v-else>
  <p>No data is currently available</p>
</div>

 



  <div v-if="topArtists.items?.length" class=" box mt-10">
    <ArtistCard v-for="each,index in topArtists.items" v-bind:artist="each" :key="index" />
  </div>
  <div v-else>
    <p>No data is currently available</p>
  </div>
  

  <!-- <header v-if="spotifyTopTracks.items?.length" v-for="each in spotifyTopTracks.items"
    class="w-full h-20 shadow-xl border border-black  rounded-3xl grid grid-flow-col justify-evenly items-center ">
    <div class="w-12 h-12 rounded-sm border border-black overflow-hidden ">
      <img :src="each.album.images[1].url" width="100" height="100" alt="">
    </div>
    <div class="">
      <p> <b>{{ each.name }} </b> </p>
      <p>{{ each.artists[0].name }} </p>
      <p>{{ each.album.name }} </p>
    </div>
    <div class="">
      <p>{{ msToTimeFormat(each.duration_ms) }}</p>
      <button @click="playSong(each.id)">Play</button>
      <button v-if="(spotifyProfile.isPaid)" @click="download(each.id)">Download</button> 
    </div>

  </header>
  <div v-else>
    <p>No data is currently available</p>
  </div> -->
  
  
  <div class="mt-10  text-[2rem]">
    <p>Recently played</p>
  </div>
  <MusicCard v-if="recentlyPlayed.items?.length" :data="recentlyPlayed.items[0].track" />
  <div v-else>
    <p>No data is currently available</p>
  </div>
    
  
  <MusicTable/>



  <header v-if="iframeSrc" class=" h-20 shadow-xl  w-[] rounded-3xl grid grid-flow-col justify-evenly items-center fixed bottom-5 ">
    <iframe style="border-radius:12px" :src="iframeSrc" class="w-[90vw]" frameborder="0" allowtransparency="true"
      allow="encrypted-media" autoplay></iframe>
    <!-- <iframe id="spotify-iframe" :src="iframeSrc" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe> -->
    <!-- <button onclick="">Play</button> -->
  </header>


  <!-- <div>
    <select v-model="selectedLanguage" id="language">
      <option v-for="language in languages" :value="language.code">{{ language.name }}</option>
    </select>
    <button class="record" @click="toggleRecording">
      <p>Start Listening</p>
    </button>
    <div class="result">
      <p v-for="text in texts">{{ text }}</p>
    </div>
    <button class="download" :disabled="texts.length === 0" @click="download">Download</button>
    <button class="clear" @click="clear">Clear</button>
  </div> -->
  <p>my code: {{ token }}</p>
  <!-- <p>my code: {{ token }}</p>
  
  <h1>Hi, {{ spotifyProfile.spotify.display_name }}</h1>
  <img :src="spotifyProfile.spotify.images[0].url" width="100" height="100" alt="">
  <h1>status: {{ (spotifyProfile.isPaid) ? "premium" : "unpaid"  }}</h1>
  <button @click="snap()" id="pay-button">Pay!</button>
  <button @click="download()" >downlaod</button>
  <br>  -->

  <!-- <input v-model="search"   id="search_spotify" type="text" name="" > <button @click="searchSongs(search)" >Search a song </button> -->

  <!-- <ul v-if="searchList" > 
    <li v-for="each in searchList.tracks.items" > 
      <img :src="each.album.images[1].url"  width="50" height="50" alt="">  
      {{ each.name }} -  {{ each.artists[0].name }} -  {{ each.album.name }} -  {{ msToTimeFormat(each.duration_ms) }}
      <button v-if="(spotifyProfile.isPaid)"  @click="getDownloadLink(each.track.id)" >{{ each.id }}</button>      
    </li> 
  </ul> -->

  <!-- <ul>
    <li>
      <img :src="topGlobal.images[0].url" width="50" height="50" alt="">  - {{ topGlobal.name }}
    </li>
    <li v-for="each in topGlobal.tracks.items" >
      <img :src="each.track.album.images[1].url" alt="" width="50" height="50" >  
      {{ each.track.name }} - {{ each.track.artists[0].name }} - {{ each.track.album.name }} - {{ msToTimeFormat(each.track.duration_ms) }}
      <button v-if="(spotifyProfile.isPaid)"  @click="getDownloadLink(each.track.id)" >{{ each.id }}</button>      
      
    </li>
  </ul> -->


  <!-- <ul> 
    <li>you favourite artists</li>
    <li v-for="each in topArtists.items" > 
      <img :src="each.images[1].url"  width="50" height="50" alt="">  
      {{ each.name }} followers: {{ each.followers.total  }} popularity: {{ each.popularity }} {{ each.genres.join(', ') }}
    </li>
    
  </ul> -->

  <!-- <ul> recentlyPlayed.items[0].track.name
    <li>your reccently played</li>
    <li v-for="each in recentlyPlayed.items" > 
      <img :src="each.track.album.images[1].url"  width="50" height="50" alt="">  
      {{ each.track.name }} - {{ each.track.artists[0].name }} - {{ msToTimeFormat(each.track.duration_ms)  }}  
      <button v-if="(spotifyProfile.isPaid)"  @click="getDownloadLink(each.track.id)" >{{ each.track.id }}</button>      
    </li>
  </ul> -->

  <!-- <ul> 
    <li>your top tracks</li> 
    <li v-for="each in spotifyTopTracks.items" > 
      <img :src="each.album.images[1].url"  width="50" height="50" alt="">  
      {{ each.name }}  - {{ each.artists[0].name }} - {{ msToTimeFormat(each.duration_ms)  }} - 
      <button v-if="(spotifyProfile.isPaid)"  @click="getDownloadLink(each.id)" >{{ each.id }}</button> - 
      <iframe style="border-radius:12px" :src="getEmbedLink(each.id)" width="500px" height="50px" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      
    </li>
  </ul> -->
<!-- 
  
  <div>
    <div id="embed-iframe"></div>
    <button @click="playEpisode">Play Episode</button>
  </div>  -->

</template>

<style>
.items {
  display: block;
  width: 100%;
  /* overflow: hidden; */
}

.box {
  width: 100%;
  /* margin: auto; */  
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: 250px;
  grid-gap: 35px;
}
  

:root {
    --button-height: 2rem;
    --button-color: #edd;
}


.fake-player {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4rem;
    height: 4rem;
    padding: 2rem;
    border: 0.2rem solid var(--button-color);
    border-radius: 50%;
    filter: drop-shadow(0 0 3.1rem rgba(255,255,255, 0.8));
}

button {
    margin: 0;
    padding: 0;
}

.play {
    height: 0;
    width: 0;
    margin-left: calc(2 * 0.14 * var(--button-height));
    /*margin-left: 17px;*/
    background: none;
    border: none;
    border-top: var(--button-height) solid transparent;
    border-bottom: var(--button-height) solid transparent;
    border-left: calc(var(--button-height) * 2 * 0.86) solid var(--button-color);
    
}

.pause {
    position: relative;
    background: none;
    border: none;
    height: calc(var(--button-height) * 2);
    width: calc(var(--button-height) * 2 * 0.86);
}
.pause:before, .pause:after {
    content: "";
    position: absolute;
    top: 0;
    height: 100%;
    width: 33%;
    background: var(--button-color);
}
.pause:before {
    left: 0;
}
.pause:after {
    right: 0;
}

.hidden {
    display:none;
}
</style>