<template>
  <div
    class="payment-cmp-container container-fluid container-ex"
    :class="{'payment-cmp-container-come':AddPayment}"
  >
    <header class="about-head-title px-0">
      <!-- back arrow -->
      <figure  @click="AddPaymentClose">
          <img src="@/assets/icons/left-arrow-circle.svg" alt />
        </figure>
      <!-- title -->
      <h3 class="fz-15">Add Payment Methods</h3>
      <!-- edit btn -->
      <div>
      </div>
    </header>
    <!-- card number -->
    <div class="card-number-input">
      <label class="fz-15 fw-bold mr-2">Card Number</label>
      <input type="number" class="fz-13 fz-bold" placeholder=".... .... .... ...." />
    </div>

    <!-- card scan -->
    <div class="scan-card">
      <p class="fz-12">Scan your Card</p>
      <p class="fz-12">Your payment info is stored securely</p>
    </div>

    <!-- to next button just for test -->
    <button @click="AddPayment2Show">go to card details</button>
  </div>
</template>

<script>
import { eventBus } from "@/main.js";
export default {
  props: ["AddPayment"],
  methods: {
    AddPaymentClose() {
      eventBus.$emit("AddPaymentClose", false);
    },
    AddPayment2Show() {
      eventBus.$emit("AddPayment2Show", true);
      eventBus.$emit("AddPaymentClose", false);
      
    },
    AddPayment3Show() {
      eventBus.$emit("AddPayment3Show", true);
    }
  }
};
</script>