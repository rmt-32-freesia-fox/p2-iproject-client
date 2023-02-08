<script>
import { mapStores } from "pinia";
import { useCourseStore } from "../stores/course";
import CourseCard from "../components/CourseCard.vue";
export default {
  name: "CoursesView",
  components: {
    CourseCard,
  },
  computed: {
    ...mapStores(useCourseStore),
  },
  created() {
    this.courseStore.fetchCategories();
  },
};
</script>
<template>
  <div class="container" style="padding: 5rem">
    <div class="alert alert-dark text-center fs-3">
      Select The Category You Want To Learn
    </div>
    <div class="row justify-content-center">
      <RouterLink class="alert alert-primary col-2 m-4 text-center" v-for="category in courseStore.categories" :key="category.id" :to="`/categories/${category.id}`" >
        {{category.name}}
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.alert.alert-primary:hover{
    background-color: wheat;
    transform: translateY(-10px);
}


</style>
