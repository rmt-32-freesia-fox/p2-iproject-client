<script >
import { mapState, mapActions } from 'pinia'
import { useUserStore } from '../stores/user'
import { RouterLink } from 'vue-router'
import { useEventStore } from '../stores/event'

export default {
  components: {
    RouterLink
  },
  data() {
    return {
      data: {}
    }
  },
  methods: {
    ...mapActions(useEventStore, ['toggleModal', 'addEvent']),
  },
  
}
</script>
<template>
  <div
    class="fixed h-screen left-0 top-0 z-50 w-full p-4 flex items-center justify-center bg-black bg-opacity-50 overflow-x-hidden overflow-y-auto md:inset-0  md:h-full">
    <div class=" w-screen  md:max-w-md  md:h-auto">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow">
        <button type="button" @click="toggleModal()"
          class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center ">
          <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"></path>
          </svg>
          <span class="sr-only">Close modal</span>
        </button>
        <div class="px-6 py-6 lg:px-8">
          <h3 class="mb-4 text-xl font-medium text-gray-900 ">Add Event</h3>
          <form @submit.prevent="addEvent(data)" class="space-y-6">
            <div>
              <label for="Title" class="block mb-2 text-sm font-medium text-gray-900 ">Title</label>
              <input v-model="data.title" type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="title" required>
            </div>
            <div>
              <label for="EventDate" class="block mb-2 text-sm font-medium text-gray-900 ">Event Date</label>
              <input v-model="data.eventDate" type="datetime-local"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="title" required>
            </div>
            <div>
              <label for="imageUrl" class="block mb-2 text-sm font-medium text-gray-900 ">ImageUrl</label>
              <input v-model="data.imageUrl" type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="Image Url" required>
            </div>
            <div>
              <label for="desc" class="block mb-2 text-sm font-medium text-gray-900 ">
                Description
              </label>
              <textarea v-model="data.desc" placeholder="Description"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                required />
            </div>
            <div>
              <label for="desc" class="block mb-2 text-sm font-medium text-gray-900 ">
                Price
              </label>
              <input v-model="data.price" type="number" placeholder="Price"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                required>
            </div>
            <div>
              <label for="desc" class="block mb-2 text-sm font-medium text-gray-900 ">
                Link
              </label>
              <input v-model="data.link" type="text" placeholder="Link"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                required>
            </div>

            <button type="submit"
              class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Add
              Courses</button>
            <div class="text-sm text-center cursor-pointer font-medium text-gray-500 ">
              <a @click.prevent="toggleModal()" class="text-blue-700 hover:underline cursor-pointer">Cancel</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

</template>