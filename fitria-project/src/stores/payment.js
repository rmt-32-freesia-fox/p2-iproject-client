import { defineStore } from 'pinia';
import axios from 'axios';
import Swal from 'sweetalert2';

const baseUrl = 'https://scared-home-production.up.railway.app';

// const baseUrl = 'http://localhost:3000';
export const usePaymentStore = defineStore({
  id: 'payment',
  state: () => ({
    payments: [],
  }),
  getters: {},
  actions: {
    async paymentHandler() {
      console.log('wekweokewokeow');
      try {
        const { data } = await axios({
          url: `${baseUrl}/payments`,
          method: 'POST',
          data: {},
          headers: {
            access_token: localStorage.getItem('access_token'),
          },
        });
        var ini = this;
        window.snap.pay(data.token, {
          onSuccess(result) {
            console.log(result);
            ini.updateStatusHandler(result.order_id);
            ini.router.push('/');
            Swal.fire('Payment Success', 'Thank you for supporting us!', 'success');
            localStorage.removeItem('accountStatus');
            localStorage.setItem('accountStatus', 'Premium');
          },
          onError(result) {
            Swal.fire('Payment Failed', '', 'error');
          },
        });
      } catch (err) {
        console.log(err);
        Swal.fire(`${err.response.data.message}`, '', 'error');
      }
    },
    async updateStatusHandler(orderId) {
      // console.log(orderId);
      try {
        await axios({
          url: `${baseUrl}/payments`,
          method: 'PATCH',
          data: { orderId },
          headers: {
            access_token: localStorage.getItem('access_token'),
          },
        });
      } catch (err) {
        console.log(err, 'dari updateStatus');
        Swal.fire(`${err.response.data.message}`, '', 'error');
      }
    },
  },
});
