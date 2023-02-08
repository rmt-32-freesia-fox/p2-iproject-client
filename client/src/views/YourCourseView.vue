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
    <p>Your course</p>
</template>