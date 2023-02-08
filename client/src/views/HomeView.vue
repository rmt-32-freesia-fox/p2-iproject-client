<script>
  import { mapActions, mapState, mapWritableState } from "pinia";
import { useDataStore } from "../stores/counter";
import { RouterLink, RouterView } from "vue-router";
import router from '../router'

let SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition,
recognition,
recording = false;


export default {
  components: {
    
  },
  data() {
    return {
      token: '',
      search:'',
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
    },
    speechToText() {
      try {
        recognition = new SpeechRecognition();
        recognition.lang = this.selectedLanguage;
        recognition.interimResults = true;
        this.recording = true;
        recognition.start();
        recognition.onresult = (event) => {
          const speechResult = event.results[0][0].transcript;
          if (event.results[0].isFinal) {
            this.texts.push(speechResult);
            this.search +=   speechResult
          } else {
            document.querySelector(".interim").innerHTML = " " + speechResult;
          }
        };
        recognition.onspeechend = () => {
          this.speechToText();
        };
        recognition.onerror = (event) => {
          this.stopRecording();
          if (event.error === "no-speech") {
            console.log("No speech was detected. Stopping...");
          } else if (event.error === "audio-capture") {
            console.log(
              "No microphone was found. Ensure that a microphone is installed."
            );
          } else if (event.error === "not-allowed") {
            console.log("Permission to use microphone is blocked.");
          } else if (event.error === "aborted") {
            console.log("Listening Stopped.");
          } else {
            console.log("Error occurred in recognition: " + event.error);
          }
        };
      } catch (error) {
        this.recording = false;
        console.log(error);
      }
    }, 
    toggleRecording() {
      if (!this.recording) {
        this.speechToText();
      } else {
        this.stopRecording();
      }
    },
    stopRecording() {
      this.searchSongs(this.search)
      recognition.stop();
      this.recording = false;
    },
  },
};


</script>


<template>
  
  
  <div>
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
  </div>
    
  <p>my code: {{ token }}</p>
  
  <h1>Hi, {{ spotifyProfile.spotify.display_name }}</h1>
  <img :src="spotifyProfile.spotify.images[0].url" width="100" height="100" alt="">
  <h1>status: {{ (spotifyProfile.isPaid) ? "premium" : "unpaid"  }}</h1>
  <!-- <a href="https://api.spotifydown.com/dl/Omer%20Adam%20-%20%D7%90%D7%A0%D7%99.mp3" target="_blank" >Download</a> -->
  <button @click="snap()" id="pay-button">Pay!</button>
  <button @click="download()" >downlaod</button>
  <br> 
  
  <input v-model="search"   id="search_spotify" type="text" name="" > <button @click="searchSongs(search)" >Search a song </button>
  
  <ul v-if="searchList" > 
    <li v-for="each in searchList.tracks.items" > 
      <img :src="each.album.images[1].url"  width="50" height="50" alt="">  
      {{ each.name }} -  {{ each.artists[0].name }} -  {{ each.album.name }} -  {{ msToTimeFormat(each.duration_ms) }}
      <button v-if="(spotifyProfile.isPaid)"  @click="getDownloadLink(each.track.id)" >{{ each.id }}</button>      
    </li> 
  </ul>
  
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