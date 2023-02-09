<script>
import { mapActions, mapState } from 'pinia'
import LandingPage from '../components/organisms/LandingPage.vue'
import { useUserStore } from '../stores/user'
import { useHomeStore } from '../stores/home'
import LinkCard from '../components/molecules/LinkCard.vue'
import { RouterLink } from 'vue-router'
import Carousel from '../components/organisms/Carousel.vue'

export default {
  components: { LandingPage, LinkCard, RouterLink, Carousel },
  computed: {
    ...mapState(useUserStore, ['user']),
    ...mapState(useHomeStore, ['next', 'logs', 'loading']),
  },
  methods: mapActions(useHomeStore, ['getLogs', 'convertTime', 'reset']),
  created() {
    this.getLogs(1)
  },
}
</script>

<template>
  <LandingPage v-if="!user" />
  <div v-if="user" class="flex flex-col">
    <h1 class="text-4xl font-bold">Discovers</h1>
    <div class="divider"></div>
    <Carousel />
    <h1 class="text-4xl font-bold mt-10">New Update</h1>
    <div class="divider divider-vertical"></div>
    <div v-for="(log, i) of logs" :key="log.i" class="md:px-6">
      <div class="flex gap-2 md:gap-7 p-2 md:p-4">
        <div>
          <div class="avatar">
            <div class="w-12 rounded-full">
              <img
                :src="
                  log.User.profilePicture ||
                  'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
                "
              />
            </div>
          </div>
        </div>
        <div class="min-w-[30vw] bg-base-300 p-3 rounded-md gap-3">
          <div class="text-lg font-bold flex items-center justify-between">
            <div class="flex gap-2">
              <RouterLink
                :to="{
                  name: 'profile',
                  params: { username: log.User.username },
                }"
              >
                <div class="link-primary">
                  {{ log.User.id === user.id ? 'You' : log.User.name }}
                </div>
              </RouterLink>
              {{ log.type }} a link
            </div>
            <div class="text-sm ml-10 font-normal">
              {{
                convertTime(
                  log.type === 'created'
                    ? log.Link.createdAt
                    : log.Link.updatedAt
                )
              }}
              ago
            </div>
          </div>
          <div class="w-full mt-2">
            <LinkCard :link="log.Link" noedit="true" />
          </div>
        </div>
      </div>
      <div
        v-if="logs[i + 1]?.User?.id !== log.User.id"
        class="divider divider-vertical"
      ></div>
    </div>
  </div>
  <div class="flex justify-center">
    <button v-if="next && user" class="btn btn-sm" @click="getLogs">
      Load More
    </button>
  </div>
</template>
