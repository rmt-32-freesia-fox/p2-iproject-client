<script >
import { mapState, mapActions } from 'pinia'
import { useAnimeStore } from '../stores/anime'
import EventCard from '../components/EventCard.vue'
export default {
    components : {EventCard},
    methods: {
        ...mapActions(useAnimeStore, ['fetchEvents']),
    },
    computed: {
        ...mapState(useAnimeStore, ['eventResult']),
    },
    created() {
        this.fetchEvents()
    }
}
</script>

<template>
    <section class="bg-gray-900">
        <div class="mx-auto max-w-screen-xl pt-24  lg:flex  lg:items-center">
            <div class="mx-auto max-w-xl text-center">
                <h1 class="text-4xl text-gray-50 font-extrabold">
                    Exciting Events
                    <strong class="font-extrabold text-red-400 sm:block">
                        Entertainments, Sosialize, Together
                    </strong>
                </h1>

                <p class="mt-4 text-gray-50 sm:text-xl sm:leading-relaxed">
                    Many Events that are interesting to be attended
                </p>
            </div>
        </div>
    </section>

    <div class="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
        <div class="grid gap-8 row-gap-5 md:grid-cols-2">
            <!-- CARD -->
            <EventCard v-for="data in eventResult" :data="data"/>
        </div>
    </div>
</template>
