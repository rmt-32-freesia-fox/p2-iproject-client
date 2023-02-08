<script>
export default {
  data() {
    return {
      teriakanmaut: "",
      input: "",
    };
  },
  sockets: {
    connect: function () {
      console.log("connected", this.$socket);
    },
    disconnect: function () {
      console.log("disconnected", this.$socket);
    },
    customEventFromServer: function (payload) {
      console.log("customEventFromServer", payload);
    },
    hello: function (payload) {},
    teriak: function (payload) {
      this.teriakanmaut = payload.message;
    },
  },
  created() {
    this.$socket.emit("join", {
      access_token: localStorage.access_token,
      roomId: this.$route.params.id,
    });
  },
  methods: {
    handlekliq() {
      this.$socket.emit("kirimPesan", {
        input: this.input,
        roomId: this.$route.params.id,
      });
    },
  },
};
</script>

<template>
  <div class="container mt-[100px] w-[50%] mx-auto h-screen">
    <div class="min-w-full border rounded lg:grid lg:grid-cols-3">
      <h2 class="my-2 mb-2 ml-2 text-lg text-gray-600">Chats</h2>
      <div class="border-r bg-white border-gray-300 lg:col-span-1">
        <ul class="overflow-auto h-[32rem]">
          <li>
            <div
              class="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out border-b border-gray-300 cursor-pointer hover:bg-gray-100 focus:outline-none"
            >
              <div class="w-full pb-2">
                <div class="flex justify-between">
                  <span class="block ml-2 font-semibold text-gray-600"
                    >Jhon Don</span
                  >
                  <span class="block ml-2 text-sm text-gray-600"
                    >25 minutes</span
                  >
                </div>
                <span class="block ml-2 text-sm text-gray-600">{{
                  teriakanmaut
                }}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="mt-[100px]">
      <form @submit.prevent="handlekliq">
        <input type="text" v-model="input" />
        <button>Submit</button>
      </form>
    </div>
  </div>
</template>
