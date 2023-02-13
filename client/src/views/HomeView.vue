<script>
import { RouterLink, RouterView } from "vue-router";

</script>
<template>
  <section
    class="relative bg-[url(https://pic-bstarstatic.akamaized.net/ugc/425325d18f3d9eeecc9a2e34ed99819e.jpeg@960w_540h_1e_1c_1f.webp)] bg-cover bg-center bg-no-repeat">
    <div class="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25">
    </div>

    <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
      <div class="max-w-xl text-center sm:text-left">
        <h1 class="text-3xl font-extrabold sm:text-5xl">
          Enjoy Anime and Manga

          <strong class="block font-extrabold text-rose-700">
            Redefined
          </strong>
        </h1>

        <p class="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
          One Portal For All, Welcome to Biggest Future Cummonity of Anime and Manga Lovers All Over The World
        </p>

        <div class="mt-8 flex flex-wrap gap-4 text-center">
          <RouterLink to="/login">
            <a href="#"
            class="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto">
            Get Started, Sign in
          </a>
        </RouterLink>
        
        <RouterLink to="/animefinder">
          <a href="#"
          class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto">
          Find Anime
        </a>
      </RouterLink>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="max-w-screen-xl px-4 py-8 text-white mx-auto sm:px-6 sm:py-12 lg:px-8">
      <header class="text-center">
        <h2 class="text-xl font-bold  sm:text-3xl">
          Welcome To ANIMIX Community
        </h2>

        <p class="max-w-md mx-auto mt-4 ">
          Hai Nakama, What's Up !!
        </p>
      </header>

      <ul class="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
        <li>
          <RouterLink to="/events">
            <a href="#" class="relative block group">
              <video autoplay loop muted src="../assets/comicon.mp4" alt=""
              class="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90">Your browser does
              not support the video tag.
            </video>
            
            <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
              <h3 class="text-xl font-medium text-white">Events</h3>
              
              <span
              class="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
              Explore More
            </span>
          </div>
        </a>
      </RouterLink>
        </li>

        <li>
          <RouterLink to="/news">
            <a href="#" class="relative block group">
              <img src="https://i.pinimg.com/736x/00/a7/81/00a781cc93f26bc0b753e18b240673e2.jpg" alt=""
              class="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90" />
              
              <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 class="text-xl font-medium text-white"> Manga and Anime News</h3>
                
                <span
                class="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                Explore More
              </span>
            </div>
          </a>
        </RouterLink>
        </li>

        <li class="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
          <RouterLink to="/animefinder">
            <a href="#" class="relative block group">
              <video autoplay loop muted src="../assets/aot.mp4" alt=""
              class="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90">Your browser does
              not support the video tag.
            </video>
            
            <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
              <h3 class="text-xl font-medium text-white ">Find Anime </h3>
              
              <span
              class="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
              Explore More
            </span>
          </div>
        </a>
      </RouterLink>
        </li>
      </ul>
    </div>
  </section>


</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
