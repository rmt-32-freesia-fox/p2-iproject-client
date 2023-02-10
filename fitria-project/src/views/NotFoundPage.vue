<script>
export default {
  name: "NotFoundPage",
};
</script>
<template>
  <main>
    <div class="container">
      <div class="row">
        <img
          src="https://pbs.twimg.com/media/FcmdyjRaMAAyYNc?format=jpg&name=4096x4096"
          class="col-md-6 align-self-center"
        />
        <div class="col-md-6 align-self-center">
          <h1>404</h1>
          <h2>UH OH! You're lost.</h2>
          <p>
            The page you are looking for does not exist. How you got here is a
            mystery. But you can click the button below to go back to the
            homepage.
          </p>
          <RouterLink to="/" role="button" class="btn btn-primary"
            >HOME</RouterLink
          >
        </div>
      </div>
    </div>
  </main>
</template>
