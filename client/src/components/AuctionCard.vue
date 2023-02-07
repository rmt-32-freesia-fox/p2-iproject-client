<template>
  <div
    class="flex w-[40%] flex-col p-2 m-2 border-4 bg-gray-200 border-gray-600 rounded-2xl shadow-2xl"
  >
    <div class="flex items-center">
      <p
        class="bg-green-600 text-white px-3 py-1 m-1 rounded-xl w-[5em] shadow-lg"
      >
        ACTIVE
      </p>
      <p
        class="bg-blue-600 text-white px-3 py-1 m-1 rounded-xl w-[8em] shadow-lg"
      >
        PREPARATION
      </p>
      <p
        class="bg-red-600 text-white px-3 py-1 m-1 rounded-xl w-[5em] shadow-lg"
      >
        FINISH
      </p>
    </div>
    <div
      class="p-2 m-2 border-2 bg-white rounded-xl border-gray-600 shadow-md flex justify-center items-center"
    >
      <p class="my-[20px] text-3xl">test</p>
    </div>
    <div
      class="relative overflow-x-auto shadow-md sm:rounded-lg w-[95%] rounded-2xl mx-auto"
    >
      <table
        class="w-full mt-2 text-sm text-left text-gray-500 dark:text-gray-400"
      >
        <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
          <tr>
            <th
              scope="col"
              class="px-6 py-3 text-center bg-gray-700 text-white"
            >
              Start
            </th>
            <th
              scope="col"
              class="px-6 py-3 text-center bg-gray-700 text-white"
            >
              Open Bid
            </th>
            <th
              scope="col"
              class="px-6 py-3 text-center bg-gray-700 text-white"
            >
              Current Bid
            </th>
            <th
              scope="col"
              class="px-6 py-3 text-center bg-gray-700 text-white"
            >
              Close
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b text-grey-900 border-gray-200">
            <td class="px-6 py-4 text-center text-grey-900">5 hours</td>
            <td class="px-6 py-4 text-center text-grey-900">20000</td>
            <td class="px-6 py-4 text-center text-grey-900">30000</td>
            <td class="px-6 py-4 text-center text-grey-900">6 hours</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div
      class="mt-5 flex justify-center w-[25%] mx-auto p-2 m-2 cursor-pointer font-bold bg-yellow-500 text-white rounded-xl hover:bg-yellow-500 shadow-lg"
    >
      JOIN NOW
    </div>
  </div>
</template>
