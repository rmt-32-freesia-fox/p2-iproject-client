
<script>

  export default {
    beforeMount() {
      // this.$router.push('/')
      const code = this.$route.query.code
      window.opener.location = "http://localhost:5173/?code=" + code;
      window.close()
    }
    
  } 

</script>


<template>
  
   <button>tes</button>
   
   
</template>
 


