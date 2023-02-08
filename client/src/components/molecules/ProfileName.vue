<script>
import { mapState } from 'pinia'
import { useProfileStore } from '../../stores/profile'

export default {
  computed: mapState(useProfileStore, ['profile']),
}
</script>
<template>
  <div class="flex flex-col items-center">
    <div class="text-2xl font-bold">{{ profile.name }}</div>
    <div class="flex gap-2 items-center">
      @{{ profile.username }}
      <div v-if="profile.following" class="bg-slate-900 px-3 py-1 rounded-lg opacity-40 text-sm">follows you</div>
    </div>
  </div>
</template>
