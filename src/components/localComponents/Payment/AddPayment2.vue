<template>
  <div class="payment-cmp-container" :class="{'payment-cmp-container-come':AddPayment2}">
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
        <div class="text-nowrap text-left fz-15">
          <label for>Expire</label>
          <input type="text" placeholder="MM/YY" class="expire" maxlength="5"/>
        </div>
        <div class="text-nowrap text-right fz-15">
          <label for>CVV</label>
          <input type="number" placeholder="123" class="cvv" />
        </div>
      </div>
    </div>
    <footer>
      <button class="submit-btn lightBlue-bg fz-15" @click=" AddPayment2Close">CONTINUE</button>
      <button class="submit-btn lightRed-bg fz-15" @click=" AddPaymentClose">CANCEL</button>
    </footer>
    <!-- to next button just for test
    <button>go to card details</button>-->
  </div>
</template>

<script>
import { eventBus } from "@/main.js";
export default {
  props: ["AddPayment2"],
  methods: {
    AddPayment2Close() {
      eventBus.$emit("AddPayment2Close", false);
      eventBus.$emit('AddPayment3Show' , true)
    },
     AddPaymentClose() {
      eventBus.$emit("AddPayment2Close", false);
    },
    AllowCameraShow() {
      eventBus.$emit("AllowCameraShow", true);
    }
  }
};
</script>