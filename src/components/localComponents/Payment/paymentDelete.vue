<template>
  <div>
    <div class="dark-cover2" v-if="PaymentDelete"></div>
    <div class="bascket-pop-up-container" :class="{'bascket-pop-up-container-come':PaymentDelete}">
      <div class="edit-delete container-fluid container-ex">
        <div>
          <h2 class="fz-18 fw-bold">Visa</h2>
        </div>
        <p class="text-left fz-15">Are you sure you want to delete this payment method?</p>
        <div class="edit-btn-box">
          <button class="submit-btn submit-btn-2" @click="paymentDeleteClose">CANCEL</button>
          <router-link to="/Payment">
            <button class="submit-btn-2 lightBlue-bg text-white" @click="NewPaymentDeleteClose">DELETE</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { eventBus } from "@/main.js";
export default {
  props: ["PaymentDelete"],
  methods: {
    paymentDeleteClose() {
      eventBus.$emit("paymentDeleteClose", false);
    },
    NewPaymentDeleteClose() {
      eventBus.$emit("paymentDeleteClose", false);
      eventBus.$emit("AddPayment5Close", false);
    }
  }
};
</script>