<script >
import { mapState, mapActions } from 'pinia'
import { useAnimeStore } from '../stores/anime'
export default {
  data() {
    return {
      inputSearch: '',

      imageDetail: "",
      titleDetail: 'insert search data',
      synopsisDetail: 'the detail of anime youre searching for will be shown here',
      episodesDetail: '',
    }
  },
  methods: {
    ...mapActions(useAnimeStore, ['searchAnime']),
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  },
  computed: {
    ...mapState(useAnimeStore, ['animeSearchResult']),
  }
}



</script>

<template>
  <div class="bg-gray-900 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-4">
    <div class="flex flex-col lg:flex-row">
      <div class="w-1/3  mx-auto ">
        <div class="  py-4 px-4 pt-16 mb-4 w-full">
          <form @submit.prevent="searchAnime(inputSearch)">
            <div class="max-w-xl">

              <div class="flex space-x-4">
                <div class="flex rounded-md overflow-hidden w-full">
                  <input v-model="inputSearch" type="text"
                    class="bg-white font-bold px-2 text-xl w-full rounded-md rounded-r-none" />
                  <button type="submit"
                    class="bg-indigo-600 text-white px-6 text-lg font-semibold py-1 rounded-r-md">Go</button>
                </div>
                <button @click.prevent="inputSearch = ''"
                  class="bg-white px-2 text-sm font-semibold py-1 rounded-md">Clear</button>
              </div>
            </div>
          </form>
        </div>
        <div>
          <img v-if="imageDetail == ''" class="object-cover w-full  rounded shadow-lg " src="../assets/confused.jpg"
            alt="" />
          <img v-if="imageDetail !== ''" class="object-cover w-full  rounded shadow-lg " :src="imageDetail" alt="" />
        </div>
        <div class="px-4 text-white mt-2 w-full">
          <div class=" gap-12 row-gap-8 lg:grid-cols-2">
            <div class="flex flex-col justify-center">
              <div class=" max-w-xl mb-1">
                <h2 class="max-w-lg mb-1  font-sans text-3xl font-bold tracking-tight  sm:text-4xl sm:leading-none">
                  {{ titleDetail }}<br class="hidden md:block" />
                </h2>
                <div  v-if="imageDetail !== ''" class="mt-3 flex gap-5 items-center justify-center">
                  <div class="flex items-center justify-center gap-4">
                    <div class="flex items-center justify-center w-5 h-5  rounded-full bg-indigo-50">
                      <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true">
                        <path clip-rule="evenodd" fill-rule="evenodd"
                          d="M1 4.75C1 3.784 1.784 3 2.75 3h14.5c.966 0 1.75.784 1.75 1.75v10.515a1.75 1.75 0 01-1.75 1.75h-1.5c-.078 0-.155-.005-.23-.015H4.48c-.075.01-.152.015-.23.015h-1.5A1.75 1.75 0 011 15.265V4.75zm16.5 7.385V11.01a.25.25 0 00-.25-.25h-1.5a.25.25 0 00-.25.25v1.125c0 .138.112.25.25.25h1.5a.25.25 0 00.25-.25zm0 2.005a.25.25 0 00-.25-.25h-1.5a.25.25 0 00-.25.25v1.125c0 .108.069.2.165.235h1.585a.25.25 0 00.25-.25v-1.11zm-15 1.11v-1.11a.25.25 0 01.25-.25h1.5a.25.25 0 01.25.25v1.125a.25.25 0 01-.164.235H2.75a.25.25 0 01-.25-.25zm2-4.24v1.125a.25.25 0 01-.25.25h-1.5a.25.25 0 01-.25-.25V11.01a.25.25 0 01.25-.25h1.5a.25.25 0 01.25.25zm13-2.005V7.88a.25.25 0 00-.25-.25h-1.5a.25.25 0 00-.25.25v1.125c0 .138.112.25.25.25h1.5a.25.25 0 00.25-.25zM4.25 7.63a.25.25 0 01.25.25v1.125a.25.25 0 01-.25.25h-1.5a.25.25 0 01-.25-.25V7.88a.25.25 0 01.25-.25h1.5zm0-3.13a.25.25 0 01.25.25v1.125a.25.25 0 01-.25.25h-1.5a.25.25 0 01-.25-.25V4.75a.25.25 0 01.25-.25h1.5zm11.5 1.625a.25.25 0 01-.25-.25V4.75a.25.25 0 01.25-.25h1.5a.25.25 0 01.25.25v1.125a.25.25 0 01-.25.25h-1.5zm-9 3.125a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z">
                        </path>
                      </svg>
                    </div>
                    <h6 class=" font-semibold leading-5">
                      Episodes
                    </h6>
                    <p class="text-sm ">
                      {{ episodesDetail }}
                    </p>
                  </div>
                  <div class="flex items-center justify-center gap-4">
                    <div class="flex items-center justify-center w-5 h-5  rounded-full bg-indigo-50">
                      <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true">
                        <path clip-rule="evenodd" fill-rule="evenodd"
                          d="M1 4.75C1 3.784 1.784 3 2.75 3h14.5c.966 0 1.75.784 1.75 1.75v10.515a1.75 1.75 0 01-1.75 1.75h-1.5c-.078 0-.155-.005-.23-.015H4.48c-.075.01-.152.015-.23.015h-1.5A1.75 1.75 0 011 15.265V4.75zm16.5 7.385V11.01a.25.25 0 00-.25-.25h-1.5a.25.25 0 00-.25.25v1.125c0 .138.112.25.25.25h1.5a.25.25 0 00.25-.25zm0 2.005a.25.25 0 00-.25-.25h-1.5a.25.25 0 00-.25.25v1.125c0 .108.069.2.165.235h1.585a.25.25 0 00.25-.25v-1.11zm-15 1.11v-1.11a.25.25 0 01.25-.25h1.5a.25.25 0 01.25.25v1.125a.25.25 0 01-.164.235H2.75a.25.25 0 01-.25-.25zm2-4.24v1.125a.25.25 0 01-.25.25h-1.5a.25.25 0 01-.25-.25V11.01a.25.25 0 01.25-.25h1.5a.25.25 0 01.25.25zm13-2.005V7.88a.25.25 0 00-.25-.25h-1.5a.25.25 0 00-.25.25v1.125c0 .138.112.25.25.25h1.5a.25.25 0 00.25-.25zM4.25 7.63a.25.25 0 01.25.25v1.125a.25.25 0 01-.25.25h-1.5a.25.25 0 01-.25-.25V7.88a.25.25 0 01.25-.25h1.5zm0-3.13a.25.25 0 01.25.25v1.125a.25.25 0 01-.25.25h-1.5a.25.25 0 01-.25-.25V4.75a.25.25 0 01.25-.25h1.5zm11.5 1.625a.25.25 0 01-.25-.25V4.75a.25.25 0 01.25-.25h1.5a.25.25 0 01.25.25v1.125a.25.25 0 01-.25.25h-1.5zm-9 3.125a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z">
                        </path>
                      </svg>
                    </div>
                    <h6 class=" font-semibold leading-5">
                      Episodes
                    </h6>
                    <p class="text-sm ">
                      {{ episodesDetail }}
                    </p>
                  </div>
                </div>
                <p class=" mt-2 text-base md:text-lg">
                  {{ synopsisDetail }}
                </p>
              </div>


            </div>

          </div>
        </div>
      </div>
      <div class=" w-2/3 ml-5 pt-16 sm:grid-cols-2">
        <article v-for="data in animeSearchResult" :key="data.id"
          class=" w-full mb-3  rounded-xl  bg-gray-800 text-white">
          <a @click.prevent="titleDetail = data.title, synopsisDetail = data.synopsis, imageDetail = data.image, episodesDetail = data.episodes"
            href="">
            <div @click.prevent="scrollToTop">

              <div class="flex items-start p-6">
                <a href="#" class="block shrink-0">
                  <img alt="poster" :src="data.thumb" class="h-32 w-20 rounded-lg object-cover" />
                </a>
                <div class="ml-4">
                  <h3 class="font-medium sm:text-lg hover:underline mb-2">
                      {{ data.title }}
                   
                  </h3>

                  <p class="text-sm line-clamp-2">
                    {{ data.synopsis }}
                  </p>

                  <div class="mt-2 sm:flex sm:items-center sm:gap-2">
                    <div class="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                      </svg>
                      <p class="ml-1 text-xs">{{ data.episodes }} episodes</p>
                    </div>

                    <span class="hidden sm:block" aria-hidden="true">&middot;</span>

                    <p class="hidden sm:block sm:text-xs sm:text-gray-500">
                      Genre
                      <span v-for="genre in data.genres"  class="font-medium  ">
                        {{ genre }}  &nbsp
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
          </a>
        </article>


      </div>
    </div>
  </div>
</template>
