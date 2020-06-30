<template>
  <div>
    <div class="dark-cover" v-if="PaymentEditDelete" @click="PaymentEditDeleteClose"></div>
    <div
      class="bascket-pop-up-container"
      :class="{'bascket-pop-up-container-come':PaymentEditDelete}"
    >
      <div class="edit-delete container-fluid container-ex">
        <div>
          <h2 class="fz-18 fw-bold pb-3">Payment</h2>
          <p class="fz-15">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <div>
          <button class="submit-btn lightBlue-bg">EDITE</button>
          <button class="submit-btn-2">DELETE</button>
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
    PaymentEditDeleteClose() {
      eventBus.$emit("PaymentEditDeleteClose", false);
    }
  }
};
</script>