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
        this.courseStore.fetchCategoyById(this.$route.params.id)
    }
}

</script>
<template>
    <div class="container">
        <div class=""></div>
    <div class="row text-center">
        <h5 class="fs-4 text-capitalize">{{ courseStore.categoriesById.name }} Course's</h5>
        <p class="fs-5">Choose Your Online Course</p>
    </div>
     <div class="row justify-content-center">
         <CourseCard v-for="course in courseStore.categoriesById.Courses" :key="course" :course="course"/>
     </div>
    </div>
</template>