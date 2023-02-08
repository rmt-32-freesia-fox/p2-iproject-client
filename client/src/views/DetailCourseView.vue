<script>
import { mapStores } from "pinia";
import { useCourseStore } from "../stores/course";
export default {
  name: "CoursesView",
  computed: {
    ...mapStores(useCourseStore),
  },
  created(){
    this.courseStore.fetchCourseById(this.$route.params.id)
  }
};
</script>
<template>
  <div class="container px-5">
    <div class="row align-items-center">
      <div class="col">
        <div class="row align-items-center">
          <img
            class="col"
            style="max-height: 120px;max-width: 120px; object-fit:cover "
            :src="courseStore.courseById.imgUrl"
            alt=""
          />
          <div class="col fs-3">{{courseStore.courseById.name}}</div>
        </div>
        <div class="p-3">
          <p class="fs-5">
            {{courseStore.courseById.description}}
          </p>
        </div>
        <h4>Material List</h4>
        <ul class="list-group">
          <!-- --------------- -->
          <li class="list-group-item py-2" v-for="material in courseStore.courseById.Materials">
            <i class="bi bi-play-circle-fill"></i>
            {{material.name}}
          </li>
        </ul>
      </div>
      <div class="col">
        <div class="card" style="width: 100% min-width: 18rem;">
          <img style="max-height: 200px; object-fit:cover " :src="courseStore.courseById.imgUrl" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{{courseStore.courseById.name}}</h5>
            <p class="card-text">
                {{courseStore.courseById.description}}
            </p>
            <p class="fs-2">
                Rp. 200.000
            </p>
            <div class="m-5 row justify-content-between">
                <RouterLink to="/" class="btn btn-primary col" style="max-width: fit-content;">Add To Favorite</RouterLink>
                <RouterLink to="/" class="btn btn-primary col" style="max-width: fit-content;">Join Course</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
