<script>

  export default {
    data() {
      return {
        // url:  'https://accounts.spotify.com/authorize?client_id=29694d93e1d24518aec34551ed349c5e&response_type=code&redirect_uri=http://localhost:3000/redirect/&scope=user-top-read%20user-read-recently-played%20user-read-currently-playing'
        url:  'https://accounts.spotify.com/authorize?client_id=29694d93e1d24518aec34551ed349c5e&response_type=code&redirect_uri=http://localhost:5173/auth/&scope=user-top-read%20user-read-recently-played%20user-read-currently-playing'
      }
    },
    methods: {
      popup(url) {
        return window.open(url)
      },
      login(){ 
        const width = 600;
        const height = 800;
        const left = (screen.width - width) / 2;
        const top = (screen.height - height) / 2;
        window.open(this.url, "Login with Spotify", `width=${width}, height=${height}, left=${left}, top=${top}`);
      }    
    } ,
    beforeMount() {
      window.close()
      console.log(this.$route.query.code);
    }
}


</script>

<template>
  
  <!-- <a :href="url">Log in </a> -->
  
  <button @click="login()" >Log In</button>
  
  <!-- <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/5CsIkUE6vCweXEIQwC7DhP?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>   -->
  
</template>



