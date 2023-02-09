<script>
import { mapStores } from "pinia";
import { useCourseStore } from "../stores/course";
import { useUserStore } from "../stores/user";
export default {
  name: "CoursesView",
  computed: {
    ...mapStores(useCourseStore, useUserStore),
  },
  created() {
    this.courseStore.fetchCourseById(this.$route.params.id);
    
  },
};
</script>
<template>
  <div class="container px-5">
    <div class="row align-items-center">
      <div class="col">
        <div class="row align-items-center">
          <img
            class="col"
            style="max-height: 120px; max-width: 120px; object-fit: cover"
            :src="courseStore.courseById.imgUrl"
            alt=""
          />
          <div class="col fs-3">{{ courseStore.courseById.name }}</div>
        </div>
        <div class="p-3">
          <p class="fs-5">
            {{ courseStore.courseById.description }}
          </p>
          <hr />
        </div>
        <h4>Material List</h4>
        <ul class="list-group">
          <!-- --------------- -->
          <li
            style="cursor: pointer"
            class="list-group-item py-3"
            v-for="material in courseStore.courseById.Materials"
        
          >
          <div>
            <i class="bi bi-play-circle-fill"></i>
            {{ material.name }}
            <i class="bi bi-lock"></i>
          </div>
          </li>
        </ul>
      </div>
      <div class="col">
        <div class="card" style="width: 100% min-width: 18rem;">
          <img
            style="max-height: 200px; object-fit: cover"
            :src="courseStore.courseById.imgUrl"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title text-center">Join This Course</h5>
            <hr>
            <p class="card-text"></p>
            <p class="fs-2">{{ courseStore.formatRupiah(courseStore.courseById.price) }}</p>
            <div class="m-5 row justify-content-center">

              <div
                @click.prevent="this.courseStore.payThenJoinToCourse(userStore.id, courseStore.courseById.id, courseStore.courseById.price)"
                class="btn btn-primary col"
                style="max-width: fit-content"
                >Join Course</div
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.list-group-item:hover {
  background-color: wheat;
}
</style>
