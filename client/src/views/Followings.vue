<script>
import { mapActions, mapState } from 'pinia'
import ProfileName from '../components/molecules/ProfileName.vue'
import ProfilePicture from '../components/organisms/ProfilePicture.vue'
import ProfileSocial from '../components/molecules/ProfileSocial.vue'
import { useProfileStore } from '../stores/profile'
import ProfileLink from '../components/molecules/ProfileLink.vue'
import Follow from '../components/molecules/Follow.vue'
import LinkForm from '../components/molecules/LinkForm.vue'
import SkeletonProfile from '../components/atoms/SkeletonProfile.vue'
export default {
  components: {
    ProfilePicture,
    ProfileName,
    ProfileSocial,
    ProfileLink,
    Follow,
    LinkForm,
    SkeletonProfile,
  },
  computed: mapState(useProfileStore, ['followings', 'profile', 'loading']),
  methods: mapActions(useProfileStore, [
    'init',
    'convertTime',
    'getFollowings',
  ]),
  async created() {
    await this.init()
    await this.getFollowings()
  },
}
</script>

<template>
  <div
    v-if="profile && !loading"
    class="flex flex-col items-center gap-4 transition-all"
  >
    <ProfilePicture />
    <ProfileName />
    <Follow />
    <ProfileSocial />
    <div class="text-xl font-bold">Followings</div>
    <div class="divider"></div>
    <div class="flex flex-wrap gap-5 w-full">
      <RouterLink v-for="f in followings" :key="f.id" :to="`/${f.username}`">
        <div
          class="w-64 h-32 rounded-xl border bg-base-300 shadow-lg py-3 px-6 flex flex-col"
        >
          <div class="flex-grow">
            <div class="text-xl font-bold">{{ f.name }}</div>
            <div class="text-sm opacity-50">@{{ f.username }}</div>
          </div>
          <div>Joined {{ convertTime(f.createdAt) }} ago</div>
        </div>
      </RouterLink>
    </div>
  </div>
  <SkeletonProfile v-if="loading" />
</template>
