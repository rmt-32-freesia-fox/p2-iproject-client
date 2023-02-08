<script >
import { mapState, mapActions } from 'pinia'
import { useAnimeStore } from '../stores/anime'
export default {
    props : ["data"],
    data() {
        return {
            isClicked : false
        }
    },
    methods: {
        ...mapActions(useAnimeStore, ['updatePlaylist']),
        submitUpdate(AnimeId, watchedEpisodes){
            this.isClicked = false
            this.updatePlaylist(AnimeId, watchedEpisodes)
        },
    }
}
</script>

<template>
 
            <div
                class="relative p-px overflow-hidden transition duration-300 transform  rounded shadow-sm hover:scale-105 group hover:shadow-xl">
                <div
                    class="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0  group-hover:scale-x-100">
                </div>
                <div
                    class="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0  group-hover:scale-y-100">
                </div>
                <div
                    class="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0  group-hover:scale-x-100">
                </div>
                <div
                    class="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0  group-hover:scale-y-100">
                </div>
                <div
                    class="relative flex flex-col h-full p-5 bg-gray-800 text-white rounded-sm lg:items-center lg:flex-row">
                    <div class="w-1/4 mb-6 mr-6 lg:mb-0">
                        <div class="flex items-center justify-center">
                            <img :src="data.Anime.image" class="w-full h-full" />

                        </div>
                    </div>
                    <div class="w-3/4 flex flex-col justify-between flex-grow">
                        <strong v-if="data.status == 'Watched'"
                            class="w-24 mb-3 rounded text-center border-indigo-500 bg-red-500 px-3 py-1 text-md font-medium text-white">
                            {{ data.status }}
                        </strong>
                        <strong v-if="data.status != 'Watched'"
                            class="w-48 mb-3 rounded text-center border-indigo-500 bg-indigo-500 px-3 py-1 text-md font-medium text-white">
                            {{ data.status }}
                        </strong>
                        <div>
                            <h6 class="mb-2 font-semibold leading-5">
                                {{ data.Anime.title }}
                            </h6>
                            <p class="mb-2 text-sm ">
                                Total Episodes : {{ data.totalEpisodes }}
                            </p>
                        </div>
                        <div v-show="isClicked==true">
                            <label for="price" class="block text-sm font-medium ">Watched Episodes : {{
                                data.watchedEpisodes
                            }}</label>
                            <div class="flex mt-1 rounded-md shadow-sm">
                                <button v-show="data.watchedEpisodes > 0" @click.prevent="data.watchedEpisodes--"
                                    class="uppercase block w-12 p-2 text-lg rounded bg-indigo-500 hover:bg-indigo-600 focus:outline-none">
                                    - </button>
                                <input v-model="data.watchedEpisodes" class="text-center font-bold text-gray-900"
                                    type="text">
                                <button v-show="data.watchedEpisodes < data.totalEpisodes"
                                    @click.prevent="data.watchedEpisodes++"
                                    class="uppercase block w-12 p-2 text-lg rounded bg-indigo-500 hover:bg-indigo-600 focus:outline-none">
                                    + </button>
                                <div class="flex space-x-2 justify-center">
                                    <button @click.prevent="submitUpdate(data.AnimeId, data.watchedEpisodes)"
                                        type="button"
                                        class="ml-6 inline-block px-4 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">SAVE</button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div v-show="isClicked==false" class="flex space-x-2 justify-center">
                            <button @click.prevent="isClicked=true"
                                type="button"
                                class="ml-6 inline-block px-4 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">EDIT</button>
                        </div>
                </div>
            </div>
   
</template>
