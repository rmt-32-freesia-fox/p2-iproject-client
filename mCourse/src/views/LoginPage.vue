<script></script>
<template>
  <div class="container mx-auto">
    <div class="mx-auto">
      <h1 class="text-center font-bold text-xl mt-16">
        Login To Account mCourse
      </h1>
    </div>
    <div
      class="p-5 border border-black bg-white w-2/5 mx-auto mt-2 shadow pt-10"
    >
      <div class="mx-auto text-center">
        <button
          class="bg-white p-2 m-1 border border-black text-black font-bold w-3/4 hover:bg-slate-50 hover:border hover:border-black hover:text-black text-center"
        >
          <p class="text-center">
            <img
              src="../assets/linkin.svg"
              alt=""
              class="object-fill h-4 mx-auto"
            />
            <span class="px-2"> Login With Linkedin</span>
          </p>
        </button>
        <button
          class="bg-white p-2 border border-black text-black font-bold w-3/4 hover:bg-slate-50 hover:border hover:border-black hover:text-black text-center"
        >
          <p class="text-center">
            <img
              src="../assets/google icon.svg"
              alt=""
              class="object-fill h-4 mx-auto"
            />
            <span class="px-2"> Login With Google</span>
          </p>
        </button>
        <input
          type="text"
          class="bg-white border border-black w-3/4 p-2 px-2 m-1 placeholder:text-black placeholder:font-semibold"
          placeholder="Email"
        />
        <input
          type="Password"
          class="bg-white border border-black w-3/4 p-2 px-2 m-1 placeholder:text-black placeholder:font-semibold focus:border"
          placeholder="Password"
        />
        <br />
        <button
          class="bg-black p-2 border border-black text-white font-bold w-3/4 hover:bg-slate-50 hover:border hover:border-black hover:text-black"
        >
          LOGIN
        </button>
        <div class="m-2 p-2">
          <label for=""
            >If You Forgot Password
            <a href="" class="font-bold hover:text-gray-600"
              >Click Here</a
            ></label
          >
          <hr class="w-3/4 mx-auto" />
        </div>
        <div>
          <label for=""
            >Don't have Account
            <RouterLink
              to="/register"
              href=""
              class="font-bold hover:text-gray-600"
              >Register Here</RouterLink
            ></label
          >
        </div>
      </div>
    </div>
  </div>
</template>
