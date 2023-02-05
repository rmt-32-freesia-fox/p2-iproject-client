<script></script>
<template>
  <nav class="bg-black w-full text-white p-2 sticky top-0 z-50">
    <div class="grid grid-cols-6">
      <div>
        <RouterLink class="font-bold text-3xl" to="/">mCourse.net</RouterLink>
      </div>
      <div class="col-span-3"></div>
      <div class="col-span-2">
        <div class="grid grid-cols-4 gap-2">
          <RouterLink
            to="/register"
            class="bg-white text-black p-1 px-2 font-bold border hover:bg-slate-100 hover:border hover:border-red-600 hover:text-slate-700 text-center"
          >
            Register
          </RouterLink>

          <RouterLink
            to="/login"
            class="bg-white text-black p-1 px-2 font-bold hover:bg-slate-800 hover:text-white text-center"
          >
            Login
          </RouterLink>
          <RouterLink
            to="/favorites"
            class="bg-white text-black p-1 px-2 font-bold hover:bg-slate-800 hover:text-white text-center"
          >
            Favorite
          </RouterLink>
          <RouterLink
            to="/"
            class="bg-white text-black p-1 px-2 font-bold hover:bg-slate-800 hover:text-white text-center"
          >
            Logout
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>
