<script>
import LinkCard from './LinkCard.vue'

export default {
  components: { LinkCard },
}
</script>

<template>
  <div class="flex flex-col gap-2 w-full max-w-lg">
    <LinkCard v-for="x in 10" :key="x" />
  </div>
</template>
