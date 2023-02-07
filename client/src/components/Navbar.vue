<script>

</script>

<template>
  <nav
    class="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
    <div class="container max-w-[80rem] px-4 mx-auto flex flex-wrap items-center justify-between">
      <div class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
        <RouterLink to="/"
          class="text-slate-900 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase">
          I LIKE IT
        </RouterLink>
        <button
          class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none">
          <!-- type="button" onClick={()=> setNavbarOpen(!navbarOpen)} -->
          <i class="fas fa-bars"></i>
        </button>
      </div>
      <!-- class={ "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" + (navbarOpen ? " block"
        : " hidden" ) }  -->
      <div class="lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" id="example-navbar-warning">
        <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">

          <li class="flex items-center">
            <RouterLink to="/"
              class="hover:text-slate-900 text-slate-900 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">
              <span class="inline-block ml-2">Star</span>
            </RouterLink>
          </li>

          <li class="flex items-center">
            <RouterLink to="/"
              class="hover:text-slate-900 text-slate-900 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">
              <span class="inline-block ml-2">Star</span>
            </RouterLink>
          </li>

          <li class="flex items-center">
            <RouterLink to="/login">
              <button
                class="bg-primary text-white active:bg-primary text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                type="button">
                Login
              </button>
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>