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
    <div>@{{ profile.username }}</div>
  </div>
</template>
