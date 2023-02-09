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
      iframeSrc: ''
    };
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
    playSong(id) {
      this.iframeSrc = `https://open.spotify.com/embed/track/${id}?utm_source=generator`
      // document.getElementById('spotify-iframe').contentWindow.postMessage('play', 'https://open.spotify.com');
    },
     async download(id) { 
      const link = await this.getDownloadLink(id)
      window.location.href = link;
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

   <!-- <input v-model="search"   id="search_spotify" type="text" name="" > <button @click="searchSongs(search)" >Search a song </button> -->

  
  <div class="hidden" >
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
  
  <form  @submit.prevent="searchSongs(search)" class="flex items-center">   
    <label for="voice-search" class="sr-only">Search</label>
    <div class="relative w-full">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div>
        <input v-model="search" type="text" id="voice-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  " placeholder="Search Songs..." required>
        <button @click="toggleRecording" type="button" class="absolute inset-y-0 right-0 flex items-center pr-3">
            <svg aria-hidden="true" class="w-4 h-4 text-gray-500  hover:text-gray-900 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clip-rule="evenodd"></path></svg>
        </button>
    </div>
    <button type="submit" class="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
        <svg aria-hidden="true" class="w-5 h-5 mr-2 -ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>Search
    </button>
</form>
 
  

  <header v-if="searchList" v-for="each in searchList.tracks.items" class="w-full h-20 shadow-xl border border-black  rounded-3xl grid grid-flow-col justify-evenly items-center " >
    <div class="w-12 h-12 rounded-sm border border-black overflow-hidden " >
      <img :src="each.album.images[1].url" width="100" height="100" alt="">
    </div> 
    <div class="">
      <p> <b>{{ each.name }} </b> </p>
      <p>{{ each.artists[0].name }}  </p> 
    </div> 
    <div class="">
      <p>{{ msToTimeFormat(each.duration_ms) }}</p>
      <button   @click="playSong(each.id)" >Play</button>
      <button v-if="(spotifyProfile.isPaid)"  @click="download(each.id)" >Download</button>  
    </div> 
  
  </header>


 <!-- <ul v-if="searchList" > 
    <li v-for="each in searchList.tracks.items" > 
      <img :src="each.album.images[1].url"  width="50" height="50" alt="">  
      {{ each.name }} -  {{ each.artists[0].name }} -  {{ each.album.name }} -  {{ msToTimeFormat(each.duration_ms) }}
      <button v-if="(spotifyProfile.isPaid)"  @click="getDownloadLink(each.track.id)" >{{ each.id }}</button>      
    </li> 
  </ul> -->
 
  
  
   
</template>

<style>
 
 .items{
            display:block;
            width:100%;
            overflow: hidden;
        }
        .container{
            width:100%;
            margin:auto;
            border:1px solid rgb(73, 55, 107);
            list-style: none;
            display:grid;
            grid-template-columns:repeat(auto-fill,minmax(200px,1fr));
            grid-auto-rows: 200px;
            grid-gap:3px;
        }

</style>