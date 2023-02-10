<script >
import { mapState, mapActions, mapWritableState } from 'pinia'
import { useAnimeStore } from '../stores/anime'
import MyEventCard from '../components/MyEventCard.vue'
export default {
  components: { MyEventCard },
  // data(){
  //   return{
  //     thisPage : 1
  //   }
  // },
  methods: {
    ...mapActions(useAnimeStore, ['fetchNews']),
  },
  computed: {
    ...mapWritableState(useAnimeStore, ['newsResult']),
    ...mapWritableState(useAnimeStore, ['newsPagination']),
  },
  // watch: {
  //   thisPage(){
  //     this.fetchNews(this.thisPage)
  //   },
  // },
  created() {
    this.fetchNews()
  }
}
</script>

<template>
  <section class="bg-gray-900">
    <div class="mx-auto max-w-screen-xl pt-24  lg:flex  lg:items-center">
      <div class="mx-auto max-w-xl text-center">
        <h1 class="text-4xl text-gray-50 font-extrabold">
          News and Schedules
          <strong class="font-extrabold text-red-400 sm:block">
            On Air Animes
          </strong>
        </h1>

        <p class="mt-4 text-gray-50 sm:text-xl sm:leading-relaxed">
          Prepare the snack for awesome next anime
        </p>
      </div>
    </div>
  </section>

  <div class="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
    <div class="grid gap-8 row-gap-5 md:grid-cols-2">
      <article v-for="data in newsResult" class=" w-full mb-3  rounded-xl  bg-gray-800 text-white">

        <div>

          <div class="flex items-start p-4">
            <img alt="poster" :src="data.images.jpg.image_url" class="h-full w-30 rounded-lg object-cover" />

            <div class="ml-4">
              <h3 class="font-medium sm:text-lg hover:underline mb-2">
                {{ data.title }}

              </h3>
              <div class="mt-2 sm:flex sm:items-center sm:gap-2">
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                  <p class="ml-1 text-xs">Type : {{ data.type }} </p>
                </div>

                <span class="hidden sm:block" aria-hidden="true">&middot;</span>

                <p class="hidden sm:block sm:text-xs sm:text-gray-500">
                  <span>
                    Rating : {{ data.rating }}
                  </span>
                </p>
              </div>
              <div class="mt-2 sm:flex sm:items-center sm:gap-2">
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                  <p class="ml-1 text-xs">Episode : {{ data.episodes }} </p>
                </div>

                <span class="hidden sm:block" aria-hidden="true">&middot;</span>

                <p class="hidden sm:block sm:text-xs sm:text-gray-500">
                  <span>
                    Source : {{ data.source }}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div class="flex justify-end">
            <strong
              class="-mr-[2px] -mb-[2px] inline-flex items-center gap-1 rounded-tl-xl rounded-br-xl bg-green-600 py-1.5 px-3 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>

              <span class="text-[10px] font-medium sm:text-xs">{{ data.status }}</span>
            </strong>
          </div>
        </div>
        <div class="mt-2 mb-2 p-4 sm:items-center sm:gap-2">
                    <div class="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                      </svg>
                      <p class="ml-1 text-xs">Duration : {{ data.duration }} </p>
                    </div>


                    <p class="hidden sm:block sm:text-xs sm:text-gray-500">
                      <span>
                        Background : {{ data.background }}
                      </span>
                    </p>
                  </div>
      </article>
    </div>
  </div>
  <div class="flex justify-center">
  <nav aria-label="Page navigation example">
    <ul class="flex list-style-none">
      <li v-show="newsPagination.current_page>1" class="page-item"><a
        @click.prevent="fetchNews(newsPagination.current_page-1)" class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 focus:shadow-none"
          href="#">Previous</a></li>
      <li  v-for="page in newsPagination.last_visible_page" class="page-item" @click.prevent="fetchNews(page)" ><a 
          class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
          href="#">{{ page }}</a></li>
      <li v-show="newsPagination.has_next_page==true" @click.prevent="fetchNews(newsPagination.current_page+1)" class="page-item"><a
          class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
          href="#">Next</a></li>
    </ul>
  </nav>
</div>
</template>
