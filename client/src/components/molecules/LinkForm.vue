<script>
import { mapActions, mapState, mapWritableState } from 'pinia'
import { useProfileStore } from '../../stores/profile'
import { useLinkStore } from '../../stores/link'

export default {
  computed: {
    ...mapState(useProfileStore, ['isMe']),
    ...mapWritableState(useLinkStore, ['show', 'label', 'link'])
  },
  methods: mapActions(useLinkStore, ['submit', 'hideForm', 'showForm']),
}
</script>

<template>
  <div
    :class="`fixed h-screen w-screen top-0 left-0 bg-black bg-opacity-50 transition-all duration-300 backdrop-blur z-50 flex justify-center items-center ${
      show ? '' : 'translate-y-full'
    }`"
  >
    <div class="bg-black rounded-lg p-10 flex flex-col gap-3">
      <label for="">Label</label>
      <input
        type="text"
        class="input input-bordered"
        placeholder="URL Label"
        v-model="label"
      />
      <label for="">URL</label>
      <input
        type="text"
        class="input input-bordered"
        placeholder="https://yoururl.com/that/is/to/loggg???right=true"
        v-model="link"
      />
      <br />
      <div class="flex gap-1">
        <button @click="hideForm" class="btn">Cancel</button>
        <button @click="submit" class="btn">Save</button>
      </div>
    </div>
  </div>

  <div :class="`fixed right-5 bottom-5 transition-all ${isMe? '' : 'translate-x-[150%]'}`">
    <button @click="showForm" class="btn btn-secondary">Add Link</button>
  </div>
</template>
