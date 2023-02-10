<script>
export default {
  name: "UpcomingDetail",
  props: ["upcoming"],
  data(){
    return{
      yt_url:`https://www.youtube.com/embed/${this.upcoming.yt_video_key}`
    }
  }
  
};
</script>
<template>
  <div v-if="upcoming">
    <div class="container">
      <div class="row">
        <iframe
          width="400"
          height="441"
          :src="yt_url"
          :title="upcoming.title"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div class="col-md-6 align-self-center">
          <h1>{{ upcoming.title }}</h1>
          <h2>{{ upcoming.status }}</h2>
        </div>
      </div>
    </div>
  </div>
  <div v-else-if="!upcoming">
    <h1>No Upcoming Stream</h1>
  </div>
</template>
