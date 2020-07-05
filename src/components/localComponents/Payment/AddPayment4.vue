<template>
  <div
    class="payment-cmp-container container-fluid container-ex"
    :class="{'payment-cmp-container-come':AddPayment4}"
  >
    <header class="backAndEdit">
      <!-- back arrow -->
      <button class="btn-style-1" @click="AddPayment4Close">Cancel</button>
      <!-- title -->
      <h3>Add Payment Methods3</h3>
      <!-- edit btn -->
      <div>
        <button class="btn-style-1">Done</button>
      </div>
    </header>
    <!-- text area payment explain -->
    <div class="text-area-container">
        <textarea name="" id="" cols="30" rows="4" class="my-3"></textarea>
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
  props: ["AddPayment4"],
  methods: {
    AddPayment4Close() {
      eventBus.$emit("AddPayment3Close", false);
    },
    AllowCameraShow(){
        eventBus.$emit('AllowCameraShow',true)
    },
  }
};
</script>