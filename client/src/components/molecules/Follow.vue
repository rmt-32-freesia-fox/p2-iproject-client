<script>
import { mapActions, mapState } from 'pinia'
import { useProfileStore } from '../../stores/profile'

export default {
  computed: mapState(useProfileStore, ['isMe', 'profile', 'loading']),
  methods: mapActions(useProfileStore, ['follow', 'unfollow']),
}
</script>

<template>
  <div v-if="profile" class="flex gap-3">
    <RouterLink :to="`/${profile.username}/followers`">
      <div
        class="p-2 w-24 bg-base-300 rounded-lg flex flex-col justify-center items-center"
      >
        <div class="font-bold">Followers</div>
        <div class="text-2xl font-bold">{{ profile.Followers }}</div>
      </div>
    </RouterLink>
    <RouterLink :to="`/${profile.username}/followings`">
      <div
        class="p-2 w-24 bg-base-300 rounded-lg flex flex-col justify-center items-center"
      >
        <div class="font-bold">Following</div>
        <div class="text-2xl font-bold">{{ profile.Followings }}</div>
      </div>
    </RouterLink>
    <div class="p-2 w-24 rounded-lg flex flex-col justify-center items-center">
      <RouterLink v-if="isMe" :to="`/${profile.username}/edit`">
        <button class="btn">Edit Profile</button>
      </RouterLink>

      <button @click="unfollow" v-else-if="profile.followed" class="btn">
        Unfollow
      </button>
      <button @click="follow" v-else class="btn">Follow</button>
    </div>
  </div>
</template>
