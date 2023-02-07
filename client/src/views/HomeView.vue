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
      code: ''
    };
  },
  beforeMount() {
    this.code = this.$route.query.code
  },
  created() {
    
  },
  watch: {
    
  },
  computed: {
    ...mapState(useDataStore, ["movies"]),
    ...mapWritableState(useDataStore, ["isLogin"]),
  },
  methods: {
    ...mapActions(useDataStore, ["login"]),
    tes() {  
    },
  },
};



 

</script>


<template>
  
  <p>my code: {{ code }}</p>
  
</template>