<script>
import { mapActions, mapState } from 'pinia';
import { useCounterStore } from '../stores/counter';
import Card from "../components/Card.vue"

export default {
    components: {
        Card

    },
    methods: {
        ...mapActions(useCounterStore, ['ALLPLANT'])
    },
    computed: {
        ...mapState(useCounterStore, ['plants'])
    },
    created() {
        this.ALLPLANT()
    }
}
</script>





<template>


    <!-- <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-400 dark:border-gray-300">
        <a href="#">
            <img class="rounded-t-lg"
                src="https://akcdn.detik.net.id/community/media/visual/2019/04/24/de2758a6-ea38-4ae9-8c4b-f2b395a81a22_43.png?w=700&q=90"
                alt="" />
        </a>
        <div class="p-5">
            <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                    Noteworthy technology acquisitions 2021
                </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021 so far,
                in reverse chronological order.
            </p>

            <div class="bg-blue-600 w-fit mx-auto pr-3 rounded-r-xl">
                <a href="#"
                    class="inline-flex items-center px-3 py-2 text-sm font-bold text-center text-white bg-green-500 rounded-r-lg hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                    <button
                        class="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-4" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                        </svg>
                    </button>
                    <div
                        class="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none">
                        2
                    </div>
                    <button
                        class="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-4" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                        </svg>
                    </button>

                </a>



                <a href="" class="mx-1 font-bold text-white hover:text-green-600">AddCart</a>
            </div>
        </div>
    </div>

    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-400 dark:border-gray-300">
        <a href="#">
            <img class="rounded-t-lg"
                src="https://akcdn.detik.net.id/community/media/visual/2019/04/24/de2758a6-ea38-4ae9-8c4b-f2b395a81a22_43.png?w=700&q=90"
                alt="" />
        </a>
        <div class="p-5">
            <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                    Noteworthy technology acquisitions 2021
                </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021 so far,
                in reverse chronological order.
            </p>

            <div class="bg-blue-600 w-fit mx-auto pr-3 rounded-r-xl">
                <a href="#"
                    class="inline-flex items-center px-3 py-2 text-sm font-bold text-center text-white bg-green-500 rounded-r-lg hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                    <button
                        class="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-4" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                        </svg>
                    </button>
                    <div
                        class="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none">
                        2
                    </div>
                    <button
                        class="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-4" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                        </svg>
                    </button>

                </a>



                <a href="" class="mx-1 font-bold text-white hover:text-green-600">AddCart</a>
            </div>
        </div>
    </div> -->

    <div class="container my-12 items-center justify-center pt-20 mx-auto px-4 md:px-12">
        <div class="flex items-center flex-wrap -mx-1 lg:-mx-4">

            <Card v-for="item in plants" :key="item.id" :item="item" />

        </div>
    </div>


</template>