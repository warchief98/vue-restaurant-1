<template>
  <div
    class="payment-cmp-container container-fluid"
    :class="{'payment-cmp-container-come':AddPayment}"
  >
    <header class="backAndEdit">
      <!-- back arrow -->
      <button class="btn-style-1" @click="AddPaymentClose">Cancel</button>
      <!-- title -->
      <h3>Add Payment Methods</h3>
      <!-- edit btn -->
      <div>
        <button class="btn-style-1" @click="AddPayment3Show">
          <img src="@/assets/icons/3dot.png" alt />
        </button>
      </div>
    </header>
    <!-- card number -->
    <div class="card-number-input text-left py-3">
      <label class="fz-15 fw-bold mr-2">Card Number:</label>
      <input type="number" placeholder=".... .... .... ...." />
    </div>

    <!-- card scan -->
    <div class="scan-card py-5">
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
    },
    AddPayment3Show() {
      eventBus.$emit("AddPayment3Show", true);
    }
  }
};
</script>