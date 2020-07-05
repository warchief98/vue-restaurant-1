<template>
  <div class="payment-cmp-container" :class="{'payment-cmp-container-come':AddPayment3}">
    <div class="container-fluid container-ex">
      <header class="about-head-title">
        <!-- back arrow -->
        <!-- title -->
        <h3 class="fz-15">Add Payment Methods</h3>
        <!-- edit btn -->
      </header>
      <!-- card number -->
      <div class="card-number-input">
        <label class="fz-15 fw-bold m-0 mr-2">Card Number</label>
        <p class="gray-text-color fz-15">1234 1234 1234 1234</p>
      </div>

      <div class="cvv-container">
        <div class="text-nowrap d-flex text-left fz-15">
          <label class="m-0 fz-15" for>Expire</label>
          <p class="expire ml-3 gray-text-color d-flex align-items-end fz-13">02/22</p>
        </div>
        <div class="text-nowrap d-flex text-right fz-15">
          <label class="m-0 fz-15" for>CVV</label>
          <p class="cvv ml-3 gray-text-color d-flex align-items-end fz-13">165</p>
        </div>
      </div>
    </div>
    <footer>
      <button class="submit-btn lightBlue-bg fz-15" @click="AddPaymentShow">SAVE</button>
      <button class="submit-btn lightRed-bg fz-15" @click="AddPayment3Close">CANCEL</button>
    </footer>
    <!-- to next button just for test
    <button>go to card details</button>-->
  </div>
</template>

<script>
import { eventBus } from "@/main.js";
export default {
  props: ["AddPayment3"],
  methods: {
    AddPayment3Close() {
      eventBus.$emit("AddPayment3Close", false);
    },
    AddPaymentShow() {
      eventBus.$emit("AddPayment3Close", false);
    },
    AllowCameraShow() {
      eventBus.$emit("AllowCameraShow", true);
    },
    PaymentEditDeleteShow() {
      eventBus.$emit("PaymentEditDeleteShow", true);
    }
  }
};
</script>