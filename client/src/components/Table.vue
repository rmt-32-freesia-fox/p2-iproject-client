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
        
    };
  },
  async beforeMount() {
    
  },
  mounted() {
    
  },
  created() { 
    
  },
  watch: {

  },
  computed: {
    ...mapState(useDataStore, ["spotifyProfile", "spotifyTopTracks"]),
  },
  methods: {
    ...mapActions(useDataStore, ["getDownloadLink"]),
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
    }
  },
};
 

</script>


<template>
  
  <div v-if="spotifyTopTracks.items?.length" class="relative overflow-x-auto mt-10 ">
    <table class="w-full text-sm text-left text-black">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
                <th scope="col" class="px-6 py-3 w-5 ">
                    #
                </th>
                <th scope="col" class="px-6 py-3">
                    Song
                </th>
                <th scope="col" class="px-6 py-3">
                    Album
                </th>
                <th scope="col" class="px-6 py-3">
                    Duration
                </th>
                <th scope="col" class="px-6 py-3">
                    
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="each,index in spotifyTopTracks.items" class="bg-white border-b">
                <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap">
                    {{ ++index }}
                </th>
                <td class="px-6 py-2 flex ">
                  <img :src="each.album.images[1].url" width="50" height="50" alt="">
                  <div class="ml-2 p-0  grid  " >
                    <p class="font-bold top-0 text-[1.1rem] flex " >{{ each.name }}</p>
                    <p class="self-end" >{{ each.artists[0].name }}</p>
                  </div>
                </td>
                <td class="px-6 py-2">
                  {{ each.album.name }}
                </td>
                <td class="px-6 py-2">
                    {{ msToTimeFormat(each.duration_ms) }}
                </td>
                <td>
                  <button @click="playSong(each.id)" type="button" class=" mt-4 focus:outline-none text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Play</button>        
                  <button v-if="(spotifyProfile.isPaid)" @click="download(each.id)" class=" mt-4 focus:outline-none text-white bg-cyan-700 hover:bg-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2" >Download</button>   
                </td>
            </tr>
        </tbody>
    </table>
</div>
<div v-else>
    <p>No data is currently available</p>
</div>
  
</template>