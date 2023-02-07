<script>
import AuctionCard from "../components/AuctionCard.vue";
export default {
  components: {
    AuctionCard,
  },
};
</script>

<template>
  <div class="w-full mt-[10px] mx-auto bg-gray-900 p-10">
    <div class="flex flex-col gap-5 justify-center items-center">
      <div>Auction List</div>
      <div class="flex flex-wrap gap-10 justify-center">
        <AuctionCard />
        <AuctionCard />
        <AuctionCard />
        <AuctionCard />
        <AuctionCard />
      </div>
    </div>
  </div>
</template>
