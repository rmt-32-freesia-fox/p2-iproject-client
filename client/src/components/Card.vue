<script>
import { mapActions, mapWritableState } from 'pinia';
import { useCounterStore } from '../stores/counter';

export default {
    data() {
        return {
            quantity: 0
        }
    },

    props: ['item'],

    methods: {
        ...mapActions(useCounterStore, ['ADDCART', 'MYPLANT']),
        ADDTOCHART(id) {
            this.ADDCART(id, this.quantity)
        },
        increment() {
            this.quantity++;
        },
        decrement() {
            this.quantity--;
        },
        PRICE(data) {
            let result = data.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
            });

            return result;
        },

    }
}



</script>


<template>

    <div class="flex items-center  justify-center w-full md:w-1/2 lg:my-4 lg:px-0 lg:w-1/5">
        <div class="wrapper bg-white w-64 antialiased text-gray-900">
            <div>

                <img :src="item.imageUrl" alt=" random imgee"
                    class="w-full object-cover object-center rounded-lg shadow-md">

                <div class="relative px-4 -mt-16  ">
                    <div class="bg-white p-6 rounded-lg shadow-lg">
                        <div class="flex items-baseline">
                            <span
                                class="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                                Stock
                            </span>
                            <div class="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                                {{ item.stock }}
                            </div>
                        </div>

                        <h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate">{{ item.name }}</h4>

                        <div class="mt-1"> Rp
                            {{ item.price }}
                            <span class="text-gray-600 text-sm"></span>
                        </div>
                        <div class="mt-4">
                            <td class="p-4 px-6 text-center whitespace-nowrap">
                                <div>
                                    <button @click="decrement">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="inline-flex w-6 h-6 text-red-600"
                                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </button>
                                    {{ quantity }}
                                    <button @click="increment">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            class="inline-flex w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </button>
                                </div>

                            </td>
                            <button @click.prevent="ADDTOCHART(item.id)"
                                class=" rounded-full py-2 px-4 bg-blue-500 text-white  hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center">
                                Add to cart

                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>

bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full