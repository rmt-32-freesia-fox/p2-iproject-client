<script>
import { mapStores } from "pinia";
import { useCourseStore } from "../stores/course";
import { usePublitioStore } from "../stores/publitio";
export default {
  name: "PlayerVue",
  computed: {
    ...mapStores(useCourseStore, usePublitioStore),
  },
  created() {
      this.courseStore.fetchCourseById(this.$route.params.id);
      this.publitioStore.getVideo();
  },
};
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <div>
          <div
            style="
              left: 0;
              width: 100%;
              height: 0;
              position: relative;
              padding-bottom: 56.21%;
            "
          >
            <figure
              style="
                left: 0;
                width: 100%;
                height: 0;
                position: relative;
                padding-bottom: 56.21%;
                margin-block-end: 0;
                margin-block-start: 0;
                margin-inline-start: 0;
                margin-inline-end: 0;
              "
            >
              <iframe
                id="pv_64AgV9TW"
                :src="publitioStore.file.url_stream"
                scrolling="no"
                style="
                  border: 0;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100%;
                  position: absolute;
                  overflow: hidden;
                "
                allowfullscreen="true"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
              ></iframe>
            </figure>
          </div>
        </div>
        <h4 class="p-2">Material 2 part 1</h4>
        <span>
            <small>@</small>{{courseStore.courseById.Teacher.username  }}
        </span>
      </div>
      <div class="col-4">
        <h4>{{ courseStore.courseById.name }}</h4>
        <hr />
        <p>{{ courseStore.courseById.description }}</p>
        <ul class="list-group">
          <!-- --------------- -->
          <li
            class="list-group-item py-3"
            style="cursor:pointer"
            v-for="(material, index) in courseStore.courseById.Materials"
          >
            <span class="fs-5">#{{ index + 1 }}- </span>
            <i class="bi bi-play-circle-fill"></i>
            {{ material.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style>
.list-group-item:hover{
    background-color: wheat;
}
</style>
