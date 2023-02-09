<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { useCounterStore } from "../stores/counter";
import router from "../router";

export default {

    computed: {
        ...mapState(useCounterStore, ["Tologin"]),
    },
    data() {
        return {
            registerdata: {
                email: "",
                password: "",

            }
        }
    },
    methods: {
        ...mapActions(useCounterStore, ["REGIST"]),
        submit() {
            const data = {
                email: this.registerdata.email,
                password: this.registerdata.password,

            }
            this.REGIST(data)
                .then(({ data }) => {
                    this.$swal("Account Created!", "Please login first", "success");
                    this.$router.push("/login");
                })
                .catch((error) => {
                    this.$swal({
                        icon: "error",
                        title: "error",
                        text: error.response.data.message,
                    });
                })
        },
        GOIN() {

            router.push("/login")
        }
    },



}
</script>

<template>
    <section id="register">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div
                class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-red-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1
                        class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Create account
                    </h1>
                    <form @submit.prevent="submit" class="space-y-4 md:space-y-6" action="#">

                        <div>
                            <label for="email"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input v-model="registerdata.email" type="email" name="email" id="email"
                                class="bg-white  border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-white dark:placeholder-gray-400 dark:text-black dark:focus:ring-red-500 dark:focus:border-red-500"
                                placeholder="Input email" required="" />
                        </div>
                        <div>
                            <label for="password"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input v-model="registerdata.password" type="type" name="password" id="password"
                                placeholder="jangan sampe lupa"
                                class="bg-white  border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-white dark:placeholder-gray-400 dark:text-black dark:focus:ring-red-500 dark:focus:border-red-500"
                                required="" />
                        </div>



                        <button type="submit"
                            class="w-full text-yellow-700 hover:text-white border border-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 dark:border-yellow-500 dark:text-yellow-500 dark:hover:text-white dark:hover:bg-yellow-600 dark:focus:ring-orange-800">
                            Create account
                        </button>


                        <!-- <button type="button"
                                class="w-full text-orange-700 hover:text-white border border-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 dark:border-orange-500 dark:text-orange-500 dark:hover:text-white dark:hover:bg-orange-600 dark:focus:ring-orange800">
                                Cancel
                            </button> -->

                        <button @click="GOIN" type="button"
                            class="w-full text-orange-700 hover:text-white border border-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 dark:border-orange-500 dark:text-orange-500 dark:hover:text-white dark:hover:bg-orange-600 dark:focus:ring-orange800"
                            to="/login">

                            Cancel

                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>

</template>
