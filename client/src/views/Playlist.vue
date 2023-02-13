<script >
import { mapState, mapActions } from 'pinia'
import { useAnimeStore } from '../stores/anime'
import PlaylistCard from '../components/PlaylistCard.vue'
export default {
    components : {PlaylistCard},
    methods: {
        ...mapActions(useAnimeStore, ['fetchPlaylist']),
    },
    computed: {
        ...mapState(useAnimeStore, ['playlistResult']),
    },
    created() {
        this.fetchPlaylist()
    }
}
</script>

<template>
    <section class=" bg-gray-900">
        <div class="mx-auto max-w-screen-xl pt-24  lg:flex  lg:items-center">
            <div class="mx-auto max-w-xl text-center">
                <h1 class="text-4xl text-gray-50 font-extrabold">
                    Anime Playlist
                    <strong class="font-extrabold text-red-400 sm:block">
                        Save now, watch them later
                    </strong>
                </h1>

                <p class="mt-4 text-gray-50 sm:text-xl sm:leading-relaxed">
                    Track your playlist, organize them, watch later, Easy !!
                </p>
            </div>
        </div>
    </section>

    <div class="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
        <div class="grid gap-8 row-gap-5 md:grid-cols-2">
            <PlaylistCard v-for="data in playlistResult" :data="data" />
        </div>
    </div>
</template>
