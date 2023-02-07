<script>

  export default {
    data() {
      return {
        code: ''
      }
    },
    beforeMount() {
      this.code = this.$route.query.code
    }
  }

</script>


<template>
  
  <p>my code: {{ code }}</p>
  
</template>