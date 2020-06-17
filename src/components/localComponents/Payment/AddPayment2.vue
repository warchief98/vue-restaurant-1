<template>
  <div
    class="payment-cmp-container container-fluid"
    :class="{'payment-cmp-container-come':AddPayment2}"
  >
    <header class="backAndEdit">
      <!-- back arrow -->
      <button class="btn-style-1" @click="AddPayment2Close">Cancel</button>
      <!-- title -->
      <h3>Add Payment Methods2</h3>
      <!-- edit btn -->
      <div>
        <button class="btn-style-1" @click="PaymentEditDeleteShow">Save</button>
      </div>
    </header>
    <!-- card number -->
    <div class="card-number-input text-left py-3 d-flex justify-content-between">
      <label class="fz-15 fw-bold mr-2">Card Number:</label>
      <img src="@/assets/icons/visa-pay.png" alt />
    </div>

    <div class="cvv-container py-3">
      <div class="text-nowrap text-left fz-15">
        <label for>Expire</label>
        <input type="text" placeholder="MM/YY" class="expire" />
      </div>
      <div class="text-nowrap text-right fz-15">
          <label for="">CVV</label>
          <input type="number" placeholder="123" class="cvv">
      </div>
    </div>

    <!-- card scan -->
    <div class="scan-card py-5" @click="AllowCameraShow">
      <p class="fz-12">Scan your Card</p>
      <p class="fz-12">Your payment info is stored securely</p>
    </div>

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
    },
    AllowCameraShow(){
        eventBus.$emit('AllowCameraShow',true)
    },
    PaymentEditDeleteShow(){
        eventBus.$emit('PaymentEditDeleteShow',true)
    }
  }
};
</script>