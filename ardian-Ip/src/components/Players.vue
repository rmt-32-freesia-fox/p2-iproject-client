<script>
export default {
  props: ['item'],
};
</script>

<template>
  <a target="_blank" :href="item.profileurl">{{ item.personaname }} </a>
</template>
