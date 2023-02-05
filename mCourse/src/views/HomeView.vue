<script>
import "@splidejs/vue-splide/css";
export default {};
</script>
<template>
  <section class="bg-slate-100 h-full mt-16">
    <div class="container mx-auto">
      <div class="grid grid-cols-2">
        <div class="pt-6">
          <img
            src="https://blog.udemy.com/wp-content/uploads/2021/07/reading-girl-2.png"
            alt=""
          />
        </div>
        <div>
          <div class="mb-5">
            <h1 class="font-extrabold text-5xl mb-3">
              Where possibilities <br />
              begin
            </h1>
            <p class="font-semibold">
              We’re a leading marketplace platform <br />for learning and
              teaching online.<br />
              Explore some of our most popular content and learn something new.
            </p>
          </div>
          <div>
            <label class="font-bold">Our Top Course</label>
            <Splide
              :options="{ rewind: true }"
              aria-label="My Favorite Images"
              class="shadow-lg rounded-md"
            >
              <SplideSlide>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzTgf6bmASfhKC6Pv6nf5YwwdzNleKoM41dxkSg0s7Sg&s"
                  alt="Sample 1"
                  class="object-fill w-full h-64 rounded-lg"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src="https://www.ucsfhealth.org/-/media/project/ucsf/ucsf-health/education/hero/top-ten-foods-for-health-2x.jpg"
                  alt="Sample 2"
                  class="object-fill w-full h-64 rounded-lg"
                />
              </SplideSlide>
            </Splide>
          </div>
        </div>
      </div>
      <!----Suport by---->
    </div>
    <div
      class="bg-slate-100 grid grid-rows-2 place-items-center p-5 pb-20 mt-1"
    >
      <div class="font-bold text-center text-gray-500">Support</div>
      <marquee>
        <div class="grid grid-cols-6 gap-4 pb-2 justify-center">
          <div class="justify-center pb-2">
            <img
              src="../assets/supabase.png"
              alt=""
              class="object-fill h-16 grayscale opacity-80"
            />
          </div>
          <div class="justify-center">
            <img
              src="../assets/hactive8.png"
              alt=""
              class="object-fill h-11 grayscale opacity-80"
            />
          </div>
          <div class="justify-center">
            <img
              src="../assets/railway.png"
              alt=""
              class="object-fill h-10 grayscale opacity-80"
            />
          </div>
          <div class="p-2">
            <img
              src="../assets/taillwind.png"
              alt=""
              class="object-fill h-6 grayscale opacity-80"
            />
          </div>
          <div class="mx-14">
            <img
              src="../assets/sequelize.png"
              alt=""
              class="object-fill h-10 grayscale opacity-80"
            />
          </div>
          <div class="flex flex-col-2 mt-1 justify-center">
            <img
              src="../assets/vue.png"
              alt=""
              class="object-fill h-7 grayscale opacity-80"
            />
            <span class="font-bold text-gray-500">vue.js</span>
          </div>
        </div>
      </marquee>
    </div>
  </section>
</template>
<style scoped>
.slide {
  box-shadow: 0 6px 15px -3px rgb(0 0 0/0.3);
  padding: 25px;
  border-radius: 5px;
}
</style>
