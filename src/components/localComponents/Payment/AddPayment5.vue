<template>
  <div class="payment-cmp-container" :class="{'payment-cmp-container-come':AddPayment5}">
    <div class="container-fluid container-ex">
      <header class="backAndEdit mb-5">
        <!-- back arrow -->
        <router-link to="/bascket">
          <img src="@/assets/icons/left-arrow-circle.svg" alt />
        </router-link>
        <!-- title -->
        <h3 class="mr-2">Visa</h3>
        <div class="btn-style-1" @click="PaymentEditDeleteShow">
            <img src="@/assets/icons/3dot.png" alt="">
        </div>
      </header>
      <!-- card number -->
      <div class="card-number-input">
        <label class="fz-15 fw-bold m-0 mr-2">Card Number</label>
        <p class="gray-text-color fz-15">1234 1234 1234 1234</p>
      </div>
     <div class="card-number-input">
        <label class="fz-15 fw-bold m-0 mr-2">Expiry</label>
        <p class="gray-text-color fz-15">02/22</p>
      </div>
    </div>
   
    <!-- to next button just for test
    <button>go to card details</button>-->
  </div>
</template>

<script>
import { eventBus } from "@/main.js";
export default {
  props: ["AddPayment5"],
  methods: {
    AddPayment5Close() {
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
