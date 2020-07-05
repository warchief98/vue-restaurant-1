<template>
  <div class="payment-cmp-container" :class="{'payment-cmp-container-come':paymentEdit}">
    <div class="container-fluid container-ex">
      <header class="about-head-title pb-5">
        <!-- back arrow -->
        <figure>
          <img src="@/assets/icons/left-arrow-circle.svg" alt />
        </figure>
        <!-- title -->
        <h3 class="fz-15">Edit Card</h3>
        <!-- edit btn -->
      </header>
      <!-- card number -->
      <div class="card-number-input">
        <label class="fz-15 fw-bold m-0 mr-2">Card Number</label>
        <p class="gray-text-color fz-15">1234 1234 1234 1234</p>
      </div>

      <div class="cvv-container border-bottom">
        <div class="text-nowrap text-left fz-15">
          <label for>Expire</label>
          <input type="text" placeholder="MM/YY" class="expire" maxlength="5" />
        </div>
        <div class="text-nowrap text-right fz-15">
          <label for>CVV</label>
          <input type="number" placeholder="123" class="cvv" />
        </div>
      </div>
    </div>
    <footer>
      <router-link to="/Payment">
        <button class="submit-btn lightBlue-bg fz-15" @click="paymentEditClose">SAVE</button>
      </router-link>
    </footer>
    <!-- to next button just for test
    <button>go to card details</button>-->
  </div>
</template>

<script>
import { eventBus } from "@/main.js";
export default {
  props: ["paymentEdit"],
  methods: {
    paymentEditClose() {
      eventBus.$emit("paymentEditClose", false);
      eventBus.$emit("AddPayment5Close", false);
    },
  }
};
</script>