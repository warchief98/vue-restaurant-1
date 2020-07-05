<template>
  <div>
    <div class="dark-cover2" v-if="PaymentEditDelete" ></div>
    <div
      class="bascket-pop-up-container"
      :class="{'bascket-pop-up-container-come':PaymentEditDelete}"
    >
      <div class="edit-delete container-fluid container-ex">
        <div>
          <h2 class="fz-18 fw-bold">Visa</h2>
        </div>
        <div class="edit-btn-box">
          <button class="submit-btn lightBlue-bg" @click="paymentEditShow">EDITE</button>
          <button class="submit-btn-2" @click="paymentDeleteShow">DELETE</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { eventBus } from "@/main.js";
export default {
  props: ["PaymentEditDelete"],
  methods: {
    paymentEditShow() {
      eventBus.$emit("PaymentEditDeleteClose", false);
      eventBus.$emit("paymentEditShow", true);

    },
    paymentDeleteShow(){
      eventBus.$emit("PaymentEditDeleteClose", false);
      eventBus.$emit("paymentDeleteShow", true);
    }
  }
};
</script>