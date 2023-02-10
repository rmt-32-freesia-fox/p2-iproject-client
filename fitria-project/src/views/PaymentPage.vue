<script>
import NavBar from "../components/NavBar.vue";
import { mapActions, mapState } from "pinia";
import { usePaymentStore } from "../stores/payment";
export default {
  name: "PaymentPage",
  components: { NavBar },
  computed: {
    ...mapState(usePaymentStore, ["payments"]),
  },
  methods: {
    ...mapActions(usePaymentStore, ["paymentHandler", "updateStatusHandler"]),
  },
};
</script>
<template>
  <NavBar />
  <main>
    <div class="container">
      <div class="row">
        <img
          src="https://pbs.twimg.com/media/FeTJPJeaUAEsg7S?format=jpg&name=4096x4096"
          class="col-md-6 align-self-center"
        />
        <div class="col-md-6 align-self-center">
          <h2>Become PREMIUM!!</h2>
          <p>
            Get Premium access to get information about upcoming
            event/streaming!
          </p>
          <button class="btn btn-primary" @click.prevent="paymentHandler">
            Go Premium
          </button>
        </div>
      </div>
    </div>
  </main>
</template>
