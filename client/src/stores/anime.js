import { defineStore } from "pinia";
import axios from "axios"

export const useAnimeStore = defineStore('anime', {
  state: () => ({ 
    animeSearchResult: [], 
   }),
  // getters: {
  //   doubleCount: (state) => state.count * 2,
  // },
  actions: {
    searchAnime(value) {
      const options = {
        method: 'GET',
        url: 'https://anime-db.p.rapidapi.com/anime',
        params: {
          page: '1',
          size: '10',
          search: value,
          // genres: 'Fantasy,Drama',
          sortBy: 'ranking',
          sortOrder: 'asc'
        },
        headers: {
          'X-RapidAPI-Key': '179e0bdf60mshabb49e1432f32b9p194a9ejsn92b309969690',
          'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
        }
      };
      
      axios.request(options).then( (response)=> {
        console.log(response.data);
        this.animeSearchResult = response.data.data
      }).catch(function (error) {
        console.error(error);
      });
    },
  },
})