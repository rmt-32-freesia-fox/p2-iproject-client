<script>
import { mapActions, mapState } from 'pinia'
import ProfileName from '../components/molecules/ProfileName.vue'
import ProfilePicture from '../components/organisms/ProfilePicture.vue'
import ProfileSocial from '../components/molecules/ProfileSocial.vue'
import { useProfileStore } from '../stores/profile'
import ProfileLink from '../components/molecules/ProfileLink.vue'
import Follow from '../components/molecules/Follow.vue'
import LinkForm from '../components/molecules/LinkForm.vue'
export default {
  components: {
    ProfilePicture,
    ProfileName,
    ProfileSocial,
    ProfileLink,
    Follow,
    LinkForm
},
  computed: mapState(useProfileStore, ['profile', 'song', 'songTime']),
  methods: mapActions(useProfileStore, ['init', 'clearPolling']),
  created() {
    this.init()
  },
  unmounted() {
    this.clearPolling()
  },
  watch: {
    $route() {
      this.clearPolling()
      this.init()
    },
  },
}
</script>

<template>
  <div v-if="profile" class="flex flex-col items-center gap-4 transition-all">
    <ProfilePicture />
    <ProfileName />
    <Follow />
    <ProfileSocial />
    <ProfileLink />
    <LinkForm />
  </div>
</template>
