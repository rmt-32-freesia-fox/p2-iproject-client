<script>
import { mapStores } from 'pinia';
import {useCourseStore} from '../stores/course'
export default {
    name:'CoursesView',
    computed:{
        ...mapStores(useCourseStore)
    }
}
</script>
<template>
<h1>DetailCourseView</h1>
</template>

