<script>
export default {
    props: ["course"],
}
</script>
<template>
<RouterLink to="/" class="col-3 m-2">
    <div class="card" style="width: 18rem;">
      <img src="https://image.web.id/images/ajax.png" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{course.name}}</h5>
        <p class="card-text">{{course.description}}</p>
        <small>#web development</small>
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