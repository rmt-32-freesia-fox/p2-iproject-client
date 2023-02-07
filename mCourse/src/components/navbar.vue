<script>
import { mapActions } from "pinia";

export default {
  computed: {
    getName() {
      return this.$route.name;
    },
  },
  methods: {
    btnLogout() {
      localStorage.clear();
      this.$router.push("/");
    },
  },
};
</script>
<template>
  <nav class="bg-black w-full text-white p-2 sticky top-0 z-50">
    <div class="grid grid-cols-6">
      <div>
        <RouterLink class="font-bold text-3xl" to="/">mCourse.net</RouterLink>
      </div>
      <div class="col-span-4">
        <div class="flex justify-center gap-2">
          <RouterLink
            to="/register"
            v-if="
              getName == 'login' || getName == 'register' || getName == 'home'
            "
            class="w-20 bg-white text-black p-1 px-2 font-bold hover:bg-slate-800 hover:text-white text-center"
          >
            Register
          </RouterLink>

          <RouterLink
            to="/login"
            v-if="
              getName == 'login' || getName == 'register' || getName == 'home'
            "
            class="w-20 bg-white text-black p-1 px-2 font-bold hover:bg-slate-800 hover:text-white text-center"
          >
            Login
          </RouterLink>
          <RouterLink
            to="/favorites"
            v-if="
              getName != 'login' && getName != 'register' && getName != 'home'
            "
            class="w-20 bg-white text-black p-1 px-2 font-bold hover:bg-slate-800 hover:text-white text-center"
          >
            Favorite
          </RouterLink>
          <a
            @click.prevent="btnLogout"
            v-if="
              getName != 'login' && getName != 'register' && getName != 'home'
            "
            class="w-20 bg-white text-black p-1 px-2 font-bold hover:bg-slate-800 hover:text-white text-center"
          >
            Logout
          </a>
        </div>
      </div>
      <div></div>
    </div>
  </nav>
</template>
