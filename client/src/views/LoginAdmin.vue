<script>

import { mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
    data() {
        return {
            login: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        ...mapActions(useCounterStore, ['LOGIN']),

        ToSubmit() {
            const datalogin = {
                email: this.email,
                password: this.password,
            }
            this.LOGIN(datalogin)
        },
    }
}


</script>


<template>

    <!-- login -->
    <section id="login-page">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div
                class="flex items-center mb-6 text-2xl font-semibold bg-gradient-to-r from-green-500 to-green-400 bg-clip-text text-transparent">
                Welcome to Arinanda Garden
            </div>
            <div
                class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-green-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1
                        class="text-xl font-bold leading-tight tracking-tight  text-gray-900 md:text-2xl dark:text-white">
                        Admin Login
                    </h1>
                    <form id="form-login" class="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                email</label>
                            <input v-model="email" type="email" name="email" id="login-email"
                                class="bg-white  border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-white dark:placeholder-gray-400 dark:text-black dark:focus:ring-red-500 dark:focus:border-red-500"
                                placeholder="Input Email" required="" />
                        </div>
                        <div>
                            <label for="password"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input v-model="password" type="password" name="password" id="login-password"
                                placeholder="input password"
                                class="bg-white  border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-white dark:placeholder-gray-400 dark:text-black dark:focus:ring-red-500 dark:focus:border-red-500"
                                required="" />
                        </div>
                        <div class="flex items-center justify-between"></div>
                        <button @click.prevent="ToSubmit" type="submit"
                            class="w-full text-yellow-700 hover:text-white border border-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 dark:border-yellow-500 dark:text-yellow-500 dark:hover:text-white dark:hover:bg-yellow-600 dark:focus:ring-orange-800">
                            Sign in
                        </button>
                        <!-- <GoogleLogin :callback="callback" class="mx-9" /> -->




                        <router-link type="button"
                            class="w-full text-orange-700 hover:text-white border border-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 dark:border-orange-500 dark:text-orange-500 dark:hover:text-white dark:hover:bg-orange-600 dark:focus:ring-orange800"
                            to="/login">

                            Cancel

                        </router-link>
                    </form>
                </div>
            </div>
        </div>
    </section>
    <!-- END login -->

</template>