<script>
import { useAuctionStore } from "../stores/auction.js";
import { mapActions, mapState } from "pinia";
export default {
  data() {
    return {
      auction: {
        category: "",
        name: "",
        color: "",
        startPrice: "",
        imageUrl: "",
        date: "",
        multiple: "",
        images: [],
      },
    };
  },
  methods: {
    ...mapActions(useAuctionStore, ["fetchItem", "postAddAuction"]),
    handleChangeCategory() {
      this.fetchItem(this.auction.category);
    },
    handleChangeProduct() {
      const index = this.productList.findIndex(
        (el) => el.title == this.auction.name
      );
      this.auction.imageUrl = this.productList[index].img;
    },
    onSubmit(e) {
      const formData = new FormData();
      console.log(e.target.images.files);
      for (let i = 0; i < e.target.images.files.length; i++) {
        formData.append(
          "images",
          e.target.images.files[i],
          e.target.images.files[i].name
        );
      }
      formData.append("category", this.auction.category);
      formData.append("name", this.auction.name);
      formData.append("color", this.auction.color);
      formData.append("startPrice", this.auction.startPrice);
      formData.append("date", this.auction.date);
      formData.append("multiple", this.auction.multiple);
      this.postAddAuction(formData);
    },
  },
  computed: {
    ...mapState(useAuctionStore, ["productList"]),
  },
};
</script>

<template>
  <div class="mt-[100px] w-full h-screen">
    <div class="w-[80%] mx-auto">
      <div class="w-[50%] m-10 p-10 mx-auto rounded-lg shadow-md bg-slate-200">
        <div class="mx-auto text-center flex justify-center items-center">
          <p
            class="self-center text-4xl font-semibold whitespace-nowrap text-black"
          >
            my
          </p>
          <p
            class="self-center text-4xl font-semibold whitespace-nowrap text-blue-700"
          >
            Auction
          </p>
        </div>
        <p class="mb-5 font-bold ml-20 text-center">● add new auction</p>
        <form @submit.prevent="onSubmit" enctype="multipart/form-data">
          <div class="mb-6">
            <label
              for="date"
              class="block mb-2 text-sm font-medium text-gray-900"
              >Event Data</label
            >
            <input
              v-model="auction.date"
              type="date"
              name="date"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>
          <div class="mb-6">
            <label
              for="category"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Category</label
            >
            <select
              name="category"
              v-model="auction.category"
              @change.prevent="handleChangeCategory"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option value="">Choose a Category</option>
              <option value="power_supply">Power Supply</option>
              <option value="ram">RAM</option>
              <option value="cpu_fan">CPU Fan</option>
              <option value="case">Case</option>
              <option value="storage">Storage</option>
              <option value="mouse">Mouse</option>
              <option value="keyboard">Keyboards</option>
              <option value="processor">Processsors</option>
              <option value="gpu">GPU</option>
            </select>
          </div>
          <div class="mb-6">
            <label
              for="name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Product</label
            >
            <select
              name="name"
              v-model="auction.name"
              @change.prevent="handleChangeProduct"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option value="">Choose a Product</option>
              <option
                v-for="product in productList"
                :key="product.id"
                :value="product.title"
              >
                {{ product.title }}
              </option>
            </select>
          </div>
          <div class="flex justify-center items-center">
            image:
            <img
              :src="auction.imageUrl"
              alt="product image"
              style="width: 200px; height: 100px; object-fit: cover"
            />
          </div>
          <div class="mb-6">
            <label
              for="color"
              class="block mb-2 text-sm font-medium text-gray-900"
              >Color</label
            >
            <input
              type="text"
              name="color"
              v-model="auction.color"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>
          <div class="mb-6">
            <label
              for="startPrice"
              class="block mb-2 text-sm font-medium text-gray-900"
              >start Price</label
            >
            <input
              type="number"
              name="startPrice"
              v-model="auction.startPrice"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>
          <div class="mb-6">
            <label
              for="multiple"
              class="block mb-2 text-sm font-medium text-gray-900"
              >multiple bidding</label
            >
            <input
              v-model="auction.multiple"
              type="number"
              name="multiple"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>
          <div class="mb-6">
            <label
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              for="file_input"
              >Upload Images</label
            >
            <input
              type="file"
              name="images"
              accept="image/png, image/gif, image/jpeg"
              multiple
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>
          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            add
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
