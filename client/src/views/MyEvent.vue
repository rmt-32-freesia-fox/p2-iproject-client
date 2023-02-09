<script >
import { mapState, mapActions } from 'pinia'
import { useAnimeStore } from '../stores/anime'
import MyEventCard from '../components/MyEventCard.vue'
export default {
    components : {MyEventCard},
    methods: {
        ...mapActions(useAnimeStore, ['fetchMyEvent']),
    },
    computed: {
        ...mapState(useAnimeStore, ['myEventResult']),
    },
    created() {
        this.fetchMyEvent()
    }
}
</script>

<template>
    <section class="bg-gray-900">
        <div class="mx-auto max-w-screen-xl pt-24  lg:flex  lg:items-center">
            <div class="mx-auto max-w-xl text-center">
                <h1 class="text-4xl text-gray-50 font-extrabold">
                    Your Agenda of Events
                    <strong class="font-extrabold text-red-400 sm:block">
                        Entertainments, Sosialize, Together
                    </strong>
                </h1>

                <p class="mt-4 text-gray-50 sm:text-xl sm:leading-relaxed">
                    Set Alarm !!! We're gonna have fun together
                </p>
            </div>
        </div>
    </section>

    <div class="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
        <div class="grid gap-8 row-gap-5 md:grid-cols-2">
            <!-- CARD -->
            <MyEventCard v-for="data in myEventResult" :data="data"/>
        </div>
    </div>
</template>
