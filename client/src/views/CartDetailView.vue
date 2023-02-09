<script>
import Header from "../components/Header.vue";
import Navbar from "../components/Navbar.vue";
import { mapActions, mapState } from "pinia";
import { useCustomerStore } from "../stores/customers";
import { useCartStore } from "../stores/carts";
export default {
  components: {
    Header,
    Navbar,
  },

  data() {
    return {
      urlQr: window.location.href,
      // count: 0,
    };
  },

  computed: {
    ...mapState(useCartStore, ["cartDetail"]),
    ...mapState(useCustomerStore, ["isLogin"]),
  },

  methods: {
    ...mapActions(useCartStore, [
      "fetchCartDetail",
      "deleteCart",
      "rentHandler",
    ]),
    // ...mapActions(useCartStore, ["addCart"]),
  },

  created() {
    this.fetchCartDetail(this.$route.params.cartId);
    // if (localStorage.access_token) {
    //   this.isLogin = true;
    // }
  },
};
</script>

<template>
  <Header />
  <Navbar />
  <!-- breadcrumb -->
  <div class="container py-4 flex items-center gap-3">
    <a href="../index.html" class="text-primary text-base">
      <i class="fa-solid fa-house"></i>
    </a>
    <span class="text-sm text-gray-400">
      <i class="fa-solid fa-chevron-right"></i>
    </span>
    <p class="text-gray-600 font-medium">Cart Detail</p>
  </div>
  <!-- ./breadcrumb -->

  <!-- item-detail -->
  <div class="container grid grid-cols-2 gap-6">
    <div>
      <img :src="cartDetail.Item.imageUrl" alt="product" class="w-full" />
    </div>
    <div class="grid grid-cols-2 gap-4">
      <div>
        <h2 class="text-3xl font-medium uppercase mb-2">
          {{ cartDetail.Item.name }}
        </h2>
        <div class="flex items-center mb-4">
          <div class="flex gap-1 text-sm text-yellow-400">
            <span><i class="fa-solid fa-star"></i></span>
            <span><i class="fa-solid fa-star"></i></span>
            <span><i class="fa-solid fa-star"></i></span>
            <span><i class="fa-solid fa-star"></i></span>
            <span><i class="fa-solid fa-star"></i></span>
          </div>
        </div>
        <div class="space-y-2">
          <p class="text-gray-800 font-semibold space-x-2">
            <span>Status: </span>
            <span class="text-green-600">
              {{ cartDetail.Item.status }}
            </span>
          </p>
          <p class="space-x-2">
            <span class="text-gray-800 font-semibold">Owner: </span>
            <span class="text-gray-600">
              {{ cartDetail.Item.User.email }}
            </span>
          </p>
          <p class="space-x-2">
            <span class="text-gray-800 font-semibold">Category: </span>
            <span class="text-gray-600">
              {{ cartDetail.Item.Category.name }}
            </span>
          </p>
          <p class="space-x-2">
            <span class="text-gray-800 font-semibold">Quantity: </span>
            <span class="text-gray-600">
              {{ cartDetail.quantity }}
            </span>
          </p>
          <p class="space-x-2">
            <span class="text-gray-800 font-semibold">Total price: </span>
            <span class="text-gray-600">
              {{ cartDetail.subtotal }}
            </span>
          </p>
        </div>
        <br />
        <p class="mt-4 text-gray-600">
          {{ cartDetail.Item.description }}
        </p>
        <br /><br />

        <div class="mt-6 flex gap-3 border-b border-gray-200 pb-5 pt-5">
          <a
            @click.prevent="rentHandler(cartDetail.id)"
            href="#"
            class="bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition"
          >
            <i class="fa-solid fa-bag-shopping"></i> Rent
          </a>
          <!-- v-if="isLogin"
            @click.prevent="addBookmark(itemDetail.id)" -->
          <a
            @click.prevent="deleteCart(cartDetail.id)"
            href="#"
            class="border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:text-primary transition"
          >
            <i class="fa-solid fa-heart"></i> Remove from cart
          </a>
        </div>
        <div class="flex gap-3 mt-4"></div>
      </div>
      <div>
        <h1><strong>QR Code</strong></h1>
        <br />
        <img
          :src="`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${urlQr}`"
          alt=""
        />
      </div>
    </div>
  </div>
  <!-- ./item-detail -->
</template>
