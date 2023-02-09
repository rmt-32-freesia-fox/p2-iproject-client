<script>
import { mapStores } from "pinia";
import { useCourseStore } from "../stores/course";
export default {
  name: "CoursesView",
  data() {
    return {
      courses: [],
    };
  },
  computed: {
    ...mapStores(useCourseStore),
  },
  created() {
    this.courseStore
      .getOwnCourse()
      .then((response) => {
        this.courses = response.data.map((e) => e.Course);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
<template>
  <div class="container">
    <div class="row text-center">
      <h5 class="fs-4">Courses</h5>
      <p class="fs-5">Choose Your Online Course</p>
    </div>

    <div class="row justify-content-center">
      <RouterLink v-for="course in courses" :to="`/player/${course.id}`" class="col-3 m-2">
        <div class="card" style="width: 18rem">
          <div class=""></div>
          <img
            :src="course.imgUrl"
            style="max-height: 150px; object-fit: cover"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">{{ course.name }}</h5>
            <p class="card-text">{{ course.description }}</p>
            <hr />
          </div>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.card:hover{
    background-color: paleturquoise;
    padding: 5px;
}
</style>