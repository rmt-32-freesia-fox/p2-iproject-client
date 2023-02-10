<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { useDataStore } from "../stores/counter";
import { RouterLink, RouterView } from "vue-router";
import router from '../router'

  export default {
    data() {
      return {
        url:  `https://accounts.spotify.com/authorize?client_id=29694d93e1d24518aec34551ed349c5e&response_type=code&redirect_uri=http://localhost:3000/redirect/&scope=user-top-read%20user-read-recently-played%20user-read-currently-playing%20user-read-private`
        // url:  `https://accounts.spotify.com/authorize?client_id=29694d93e1d24518aec34551ed349c5e&response_type=code&redirect_uri=https://macspotify-production.up.railway.app/redirect/&scope=user-top-read%20user-read-recently-played%20user-read-currently-playing%20user-read-private`
        // url:  'https://accounts.spotify.com/authorize?client_id=29694d93e1d24518aec34551ed349c5e&response_type=code&redirect_uri=http://localhost:5173/auth/&scope=user-top-read%20user-read-recently-played%20user-read-currently-playing'
      }
    },
    methods: {
      ...mapActions(useDataStore, ["getClientId"]),

      popup(url) {
        return window.open(url)
      },
      login(){ 
        // const width = 600;
        // const height = 800;
        // const left = (screen.width - width) / 2;
        // const top = (screen.height - height) / 2;
        // window.open(this.url, "Login with Spotify", `width=${width}, height=${height}, left=${left}, top=${top}`);
      }    
    } ,
    beforeMount() {
      if(this.$route.query.token) {
        localStorage.setItem('token', this.$route.query.token)
        // Set expiration time in milliseconds
        var expirationTime = 30 * 60 * 1000; // 30 minutes 
        var currentTime = new Date().getTime();  
        var expirationDate = new Date(currentTime + expirationTime); 
        localStorage.setItem("expiration", expirationDate);
        this.$router.push("/") 
      } else {
        window.location.assign(this.url)
      }
      // window.close()
      // console.log(this.$route.query.code);
    }
}


</script>

<template>
  
  <!-- <a :href="url">Log in </a> -->
  
  <!-- <button @click="login()" >Log In</button> -->
  
  <!-- <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/5CsIkUE6vCweXEIQwC7DhP?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>   -->
  
</template>



