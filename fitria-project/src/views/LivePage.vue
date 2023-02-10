<script>
import LiveList from "../components/LiveList.vue"
import NavBar from '../components/NavBar.vue'

export default {
    name:"LivePage",
    components:{ LiveList, NavBar }
}
</script>

<template>
    <NavBar />
    <LiveList />
</template>