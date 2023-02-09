<script>
import { mapState, mapWritableState, mapActions } from "pinia";
import router from "../router";
import { useCounterStore } from "../stores/counter";


export default {
    computed: {

        ...mapState(useCounterStore, ['email', 'isLogin']),
        ...mapWritableState(useCounterStore, ['isLogin', 'email', 'userrole', 'carts']),
        location() {
            return this.$route.name
        }
    },

    methods: {
        ...mapActions(useCounterStore, ['check', 'ALLPLANT']),

        LOGOUT() {
            localStorage.clear()
            this.check()
            this.isLogin = "false"
            this.$router.push('/login')

        },


    },

    created() {
        this.check()
    }
}


</script>


<template>

    <!-- Navbar -->

    <section v-if="location != 'login' && location != 'loginAdmin'" class="sticky top-0 z-50" id="navbar">
        <nav class="p-3 border-gray-200 rounded bg-gray-50 dark:bg-green-900 dark:border-gray-700">
            <div class="container flex flex-wrap items-center justify-between mx-auto">
                <a href="#" class="flex items-center">
                    <img src="data:image/png;base64,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"
                        class="h-6 mr-3 sm:h-10" alt="Flowbite Logo" />
                    <span
                        class="self-center text-xl font-semibold whitespace-nowrap bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">Arinanda's
                        Garden</span>
                    <p
                        class="pl-4 self-center text-xl font-semibold whitespace-nowrap bg-gradient-to-r from-green-500 to-teal-400 bg-clip-text text-transparent">
                        Selamat Datang,
                        <span id="email"> {{ email }} </span>
                    </p>
                </a>

                <button data-collapse-toggle="navbar-solid-bg" type="button"
                    class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-solid-bg" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clip-rule="evenodd"></path>
                    </svg>
                </button>
                <div class="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
                    <ul
                        class="flex flex-col mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">

                        <li style="margin-top:10px">
                            <a href='https://wa.me/6287832368313?text=Halo,%20mau%20tanya%20terkait%20tanaman%20hias%20nih? 
' class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800">
                                Contact Us
                            </a>
                        </li>


                        <li v-if="isLogin == 'true'">
                            <router-link to="/" type="button"
                                class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800">
                                Home
                            </router-link>
                        </li>
                        <li v-if="isLogin == 'true'">

                            <router-link to="/mycarts" type="button"
                                class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800">
                                Cart
                            </router-link>

                        </li>


                        <li v-if="isLogin == 'true'">
                            <router-link to="/location" type="button"
                                class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800">
                                Location
                            </router-link>
                        </li>
                        <li v-if="isLogin == 'true'">
                            <button @click.prevent="LOGOUT" type="button"
                                class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-800">
                                Log Out
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </section>
    <!-- Navbar section end -->





</template>