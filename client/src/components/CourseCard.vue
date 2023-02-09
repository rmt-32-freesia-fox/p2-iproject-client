<script>
export default {
    props: ["course"],
}
</script>
<template>
<RouterLink :to="`/c-detail/${course.id}`" class="col-3 m-2">
    <div class="card" style="width: 18rem;">
        <div class=""></div>
      <img :src="course.imgUrl" style="max-height: 150px; object-fit: cover;" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{course.name}}</h5>
        <p class="card-text">{{course.description}}</p>
        <hr>
            <small class="col-5"><i class="bi bi-tag"></i> {{course.Category.name}}</small><br>
            <small class="col-2 text-right"><i class="bi bi-file-earmark"></i> {{course.Materials.length}} Lectures</small>
        
      </div>
    </div>
</RouterLink>
</template>

<style scoped>
.card:hover{
    background-color: paleturquoise;
    padding: 5px;
}
</style>