<script>
import { mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  data() {
    return {
      dataRegister: {
        username: "",
        email: "",
        password: "",
        phoneNumber: "",
      },
    };
  },
  methods: {
    ...mapActions(useCounterStore, ["forRegister"]),
    formRegister() {
      this.forRegister(this.dataRegister);
    },
  },
};
</script>
<template>
  <div class="container mx-auto">
    <div class="mx-auto">
      <h1 class="text-center font-bold text-xl mt-16">
        Register Account mCourse
      </h1>
    </div>
    <div
      class="p-5 border border-black bg-white w-2/5 mx-auto mt-2 shadow pt-10"
    >
      <div class="mx-auto text-center">
        <input
          v-model="dataRegister.username"
          type="text"
          class="bg-white border border-black w-3/4 p-2 px-2 m-1 placeholder:text-black placeholder:font-semibold"
          placeholder="Username"
        />
        <input
          v-model="dataRegister.email"
          type="text"
          class="bg-white border border-black w-3/4 p-2 px-2 m-1 placeholder:text-black placeholder:font-semibold"
          placeholder="Email"
        />
        <input
          v-model="dataRegister.password"
          type="password"
          class="bg-white border border-black w-3/4 p-2 px-2 m-1 placeholder:text-black placeholder:font-semibold"
          placeholder="Password"
        />
        <input
          v-model="dataRegister.phoneNumber"
          type="number"
          class="bg-white border border-black w-3/4 p-2 px-2 m-1 placeholder:text-black placeholder:font-semibold"
          placeholder="Phone Number"
        />
        <br />
        <button
          @click.prevent="formRegister"
          class="bg-black p-2 m-1 border border-black text-white font-bold w-3/4 hover:bg-slate-50 hover:border hover:border-black hover:text-black"
        >
          Register
        </button>
        <div class="mt-5">
          <label for=""
            >If You have Account
            <RouterLink to="/login" class="font-bold hover:text-gray-600"
              >Login Now</RouterLink
            ></label
          >
        </div>
      </div>
    </div>
  </div>
</template>
