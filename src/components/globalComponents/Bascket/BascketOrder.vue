<template>
  <div class="bascket-order">
    <div class="position-relative">
      <button class="edit-order" v-if="editOrder" @click="editOrderFunc"></button>
      <div @click="UpdateBascketOpen">
        <span class="gold-color fz-15 fw-bold" :class="{'edit-order-padding' : editOrder}">1x</span>
        <span class="ml-3 fz-15">Sandwich</span>
      </div>
    </div>
    <div class="position-relative">
      <span
        class="price gray-text-color fz-15 fw-bold"
        :class="{'order-delete-padding' :deleteOrder}"
      >£8.85</span>
      <button class="fz-15 order-delete" v-if="deleteOrder">Delete</button>
    </div>
  </div>
</template>
<script>
import { eventBus } from "@/main.js";
export default {
  props: ["editOrder", "deleteOrder"],
  data() {
    return {};
  },
  methods: {
    editOrderFunc() {
      eventBus.$emit("deleteOrderShow", true);
      eventBus.$emit("editOrderHide", false);
    },
    UpdateBascketOpen() {
      eventBus.$emit("UpdateBascketOpen", true);
    }
  }
};
</script>