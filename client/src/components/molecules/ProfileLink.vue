<script>
import { mapState } from 'pinia';
import { useProfileStore } from '../../stores/profile';
import LinkCard from './LinkCard.vue'

export default {
  components: { LinkCard },
  computed: mapState(useProfileStore, ['profile'])
}
</script>

<template>
  <div class="flex flex-col gap-2 w-full max-w-lg">
    <LinkCard v-for="link in profile.Links" :key="link.id" :link="link" />
  </div>
</template>
