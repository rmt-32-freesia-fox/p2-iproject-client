<script>
import { mapStores } from 'pinia';
import {useCourseStore} from '../stores/course'
import CourseCard from '../components/CourseCard.vue';
export default {
    name:'CoursesView',
    components:{
        CourseCard
    },
    computed:{
        ...mapStores(useCourseStore)
    },
    created(){
        this.courseStore.fetchCourses()
    }
}

</script>
<template>
    <div class="container">
    <div class="row text-center">
        <h5 class="fs-4">Courses</h5>
        <p class="fs-5">Choose Your Online Course</p>
    </div>
     <div class="row justify-content-start">
         <CourseCard v-for="course in courseStore.courses" :key="course" :course="course"/>
     </div>
    </div>
</template>