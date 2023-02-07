<script>
import { mapState, mapActions } from 'pinia'
import { useFunctionStore } from '../stores/counter'
export default {
    computed: {
        ...mapState(useFunctionStore, ['currentUser'])
    },
    methods: {
        ...mapActions(useFunctionStore, ['handleLogout'])
    }
}
</script>

<template>
    <div>
        <ul class="navbar hidden lg:flex lg:flex-row text-gray-400 text-sm items-center font-bold">

            <li class="active relative border-l border-gray-800 hover:bg-gray-900">
                <a class="block py-3 px-6 border-b-2 border-transparent" href="index.html">Home</a>
            </li>

            <li class="relative border-l border-gray-800 hover:bg-gray-900">
                <a class="block py-3 px-6 border-b-2 border-transparent" href="#">Sport</a>
            </li>

            <li class="relative border-l border-gray-800 hover:bg-gray-900">
                <a class="block py-3 px-6 border-b-2 border-transparent" href="#">Travel</a>
            </li>

            <li class="relative border-l border-gray-800 hover:bg-gray-900">
                <a class="block py-3 px-6 border-b-2 border-transparent" href="#">Techno</a>
            </li>
            <li class="relative border-l border-gray-800 hover:bg-gray-900">
            </li>
            <li v-if="!currentUser" class="relative border-l border-gray-800 hover:bg-gray-900">
                <a @click.prevent="$router.push('/login')" class="block py-3 px-6 border-b-2 border-transparent "
                    href="#"><span class=" text-blue-500 text-2xl ">
                        Login</span>
                </a>
            </li>

            <li v-if="currentUser" class="relative border-l border-gray-800 hover:bg-gray-900">
                <a @click.prevent="handleLogout" class="block py-3 px-6 border-b-2 border-transparent " href="#"><span
                        class=" text-red-500 text-2xl ">
                        Logout</span>
                </a>
            </li>
        </ul>
    </div>
</template>