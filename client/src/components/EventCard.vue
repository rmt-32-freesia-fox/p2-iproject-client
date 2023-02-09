<script >
import { mapState, mapActions } from 'pinia'
import { useAnimeStore } from '../stores/anime'
export default {
    props : ["data"],
    methods: {
        ...mapActions(useAnimeStore, ['createMyEvent']),
    }
}
</script>

<template>
 

<div class=" grid place-items-center font-mono bg-gray-900">
      
      <div class="bg-white h-64 rounded-md bg-gray-800 shadow-lg">
        <div class="md:flex px-4 leading-none max-w-4xl">
          <div class="flex-none ">
           <img
            src="https://cdn.idntimes.com/content-images/community/2020/08/jiraiya-54fe090728de1db4c1918fc8ed31a6f4_600x400.jpg"
            alt="pic"
            class=" w-56 h-48 rounded-md shadow-2xl border-gray-300 shadow-lg"
          />      
          <div class="text-xs">
              <button @click.prevent="createMyEvent(data.id)" type="button" class="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">BUY TICKET</button>
            </div>     
          </div>

          <div class="flex-col text-gray-300">
   
            <p class="pt-4 ml-4 text-2xl font-bold">{{data.name}}</p>
            <div class="text-md flex justify-between px-4 my-2">
              <span class="font-bold">{{data.date}}</span>
              <span class="font-bold"></span>
            </div>
            <p class="hidden md:block px-4 my-4 text-sm text-left">{{data.description}} </p>
            
            <p class="flex text-md px-4 my-2">
              Location : {{data.location}}
            </p>
            
         

          
          </div>
        </div>
        
      </div>
    </div>
   
</template>
<style scoped>

body {
  text-align: center;
}

.hr-text {
  line-height: 1em;
  position: relative;
  outline: 0;
  border: 0;
  color: black;
  text-align: center;
  height: 1.5em;
  opacity: 0.5;
}
.hr-text:before {
  content: "";
  background: linear-gradient(to right, transparent, #818078, transparent);
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  height: 1px;
}
.hr-text:after {
  content: attr(data-content);
  position: relative;
  display: inline-block;
  color: black;
  padding: 0 0.5em;
  line-height: 1.5em;
  color: #818078;
  background-color: #fcfcfa;
}</style>