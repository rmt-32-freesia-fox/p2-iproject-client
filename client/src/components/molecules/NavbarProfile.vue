<script>
import { mapActions, mapState } from 'pinia'
import { useUserStore } from '../../stores/user'

export default {
  methods: mapActions(useUserStore, ['toggleLogin', 'myProfile','logout']),
  computed: mapState(useUserStore, ['user']),
}
</script>

<template>
  <div class="flex gap-5">
    <button v-if="!user" @click="toggleLogin" class="btn btn-ghost">
      Login / Sign Up
    </button>

    <button v-if="user" @click="myProfile">My Profile</button>
    <button v-if="user" @click="logout">Logout</button>
  </div>
</template>
