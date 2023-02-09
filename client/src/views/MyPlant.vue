<script>
import { mapActions, mapState, mapWritableState } from 'pinia';
import { useCounterStore } from '../stores/counter';

export default {
    methods: {
        ...mapActions(useCounterStore, ['MYPLANT', 'CHECKOUT', 'GATEWAY', 'DELETEMY']),

        deletelist(plantId) {
            this.DELETEMY(plantId)

        },

        checkout() {
            this.CHECKOUT()

        },


    },
    computed: {
        ...mapWritableState(useCounterStore, ['carts'])
    },
    created() {
        this.MYPLANT().then(() => {
            console.log(this.carts);
        })

    },
    // mounted() {
    //     this.MYPLANT()
    // }
}

</script>


<template>

    <!-- {{ carts.ALLMY }} -->




    <div class="container mx-auto mt-10 pt-0">
        <div class="flex shadow-md my-10">
            <div class="w-3/4 bg-white px-10 py-10">
                <div class="flex justify-between border-b pb-8">
                    <h1 class="font-semibold text-2xl">Shopping Cart</h1>
                    <!-- <h2 class="font-semibold text-2xl">{{carts.carts.length}} Items</h2> -->
                </div>
                <div class="flex mt-10 mb-5">
                    <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
                    <h3 class="font-semibold text-start pl-8 text-gray-600 text-xs uppercase w-1/5 text-center">Quantity
                    </h3>
                    <h3 class="font-semibold text-start pl-8 text-gray-600 text-xs uppercase w-1/5 text-center">Price
                    </h3>
                    <!-- <h3 class="font-semibold text-start pl-6 text-gray-600 text-xs uppercase w-1/5 text-center">Total
                    </h3> -->
                </div>
                <div v-for="(cart, i) of carts.ALLMY" :key="cart.id"
                    class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                    <div class="flex w-2/5"> <!-- plant -->
                        <div class="w-20">
                            <img class="h-24" :src="cart.Plant.imageUrl" alt="">
                        </div>
                        <div class="flex flex-col justify-between ml-4 flex-grow">
                            <span class="font-bold text-sm">{{ cart.Plant.name }}</span>


                        </div>
                    </div>
                    <div class="flex justify-center w-1/5">

                        {{ cart.quantity }}

                        <!-- frgrwefrwefrr -->



                    </div>
                    <span class="text-center w-1/5 font-semibold text-sm">Rp {{ cart.Plant.price }}</span>

                    <button @click="deletelist(cart.id)"
                        class="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</button>


                </div>



                <RouterLink to="/" class="flex font-semibold text-indigo-600 text-sm mt-10">

                    <svg class="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512">
                        <path
                            d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                    </svg>
                    Continue Shopping
                </RouterLink>
            </div>


            <div class="w-full md:w-4/12 lg:w-1/4 px-4">
                <div>
                    <h2 class="mb-7 lg:mt-6 text-3xl font-heading font-medium">Order summary</h2>
                    <div
                        class="flex items-center justify-between py-4 px-10 mb-3 leading-8 bg-white bg-opacity-50 font-heading font-medium rounded-3xl">
                        <!-- <span>Subtotal</span>
                        <span class="flex items-center text-xl">
                            <span class="mr-2 text-base">Rp</span>
                            <span>{{ carts.total }}</span>
                        </span> -->
                    </div>
                    <div
                        class="flex items-center justify-between py-4 px-10 mb-3 leading-8 bg-white bg-opacity-50 font-heading font-medium rounded-3xl">
                        <!-- <span>Shipping</span>
                        <span class="flex items-center text-xl">
                            <span class="mr-2 text-base">Rp</span>
                            <span>{{ carts.total * 20 / 100 }}</span>
                        </span> -->
                    </div>
                    <div
                        class="flex items-center justify-between py-4 px-10 mb-14 leading-8 bg-white font-heading font-medium rounded-3xl">
                        <span>Total</span>
                        <span class="flex items-center text-xl text-blue-500">
                            <span class="mr-2 text-base">Rp</span>
                            <!-- <span>{{ carts.total + (carts.total * 20 / 100) }}</span> -->
                            <span>{{ carts.total }}</span>
                        </span>
                    </div>

                    <div class="relative mb-3 lg:mb-10">

                        <a @click.prevent="checkout"
                            class="absolute top-1/2 transform -translate-y-1/2 right-1 -translate-x-px w-auto xl:w-auto py-3 px-8 text-lg leading-7 text-white font-medium tracking-tighter font-heading text-center bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                            href="#">Checkout</a>

                    </div>

                </div>
            </div>

        </div>
        <div class="relative mb-3 lg:mb-10">


        </div>

    </div>
    <!-- </body> -->

</template>