<script>
export default {
  props: ["auction"],
  methods: {
    handleReadDetail() {
      this.$router.push(`/auctions/${this.auction.id}`);
    },
  },
};
</script>

<template>
  <div
    class="flex w-[40%] flex-col p-2 pb-5 m-2 border-4 bg-white border-gray-600 rounded-2xl shadow-2xl"
  >
    <div class="p-2 m-2 flex justify-center items-center">
      <p class="my-[20px] text-md text-center">
        {{ auction.name }}
      </p>
    </div>
    <div
      class="relative overflow-x-auto shadow-sm sm:rounded-lg w-[95%] rounded-2xl mx-auto"
    >
      <table class="w-full mt-2 text-sm text-left text-gray-500">
        <thead class="text-xs text-gray-700 uppercase">
          <tr>
            <th
              scope="col"
              class="px-6 py-3 text-center bg-gray-700 text-white"
            >
              DATE
            </th>
            <th
              scope="col"
              class="px-6 py-3 text-center bg-gray-700 text-white"
            >
              CATEGORY
            </th>
            <th
              scope="col"
              class="px-6 py-3 text-center bg-gray-700 text-white"
            >
              COLOR
            </th>
            <th
              scope="col"
              class="px-6 py-3 text-center bg-gray-700 text-white"
            >
              OP
            </th>
            <th
              scope="col"
              class="px-6 py-3 text-center bg-gray-700 text-white"
            >
              MULTIPLE
            </th>
            <th
              scope="col"
              class="px-6 py-3 text-center bg-gray-700 text-white"
            >
              STATUS
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b text-grey-900 border-gray-200">
            <td class="px-6 py-4 text-center text-grey-900">
              {{
                new Date(auction.date).toLocaleDateString("id-Id", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              }}
            </td>
            <td class="px-6 py-4 text-center text-grey-900">
              {{ auction.category }}
            </td>
            <td class="px-6 py-4 text-center text-grey-900">
              {{ auction.color }}
            </td>
            <td class="px-6 py-4 text-center text-grey-900">
              Rp. {{ auction.startPrice }}
            </td>
            <td class="px-6 py-4 text-center text-grey-900">
              Rp. {{ auction.multiple }}
            </td>
            <td class="px-6 py-4 text-center text-grey-900">
              {{ auction.status }}
            </td>
          </tr>
        </tbody>
      </table>
      <div
        @click.prevent="handleReadDetail"
        class="my-3 flex w-[30%] mx-auto cursor-pointer justify-center items-center bg-blue-800 text-white hover:bg-blue-500 rounded-lg p-2"
      >
        <a> Read Detail</a>
      </div>
    </div>
  </div>
</template>
