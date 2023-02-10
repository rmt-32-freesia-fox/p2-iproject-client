<script>
import UpcomingList from "../components/UpcomingList.vue"
import NavBar from "../components/NavBar.vue";

export default {
    name:"UpcomingPage",
    components:{ UpcomingList, NavBar }
}
</script>

<template>
    <NavBar />
    <UpcomingList />
</template>