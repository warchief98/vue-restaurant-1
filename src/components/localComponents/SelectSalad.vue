<template>
  <div class="select-cmp-2" @click="AddToBascketTrue">
    <header>
      <h2 class="fz-15">Classic</h2>
      <p class="gray-text-color fz-15">Lettuce, cucumber, onion, red wine vinegar</p>
    </header>
    <div class="price-container">
      <span class="fz-15 price">£7.20</span>
      <span class="offer-price fz-15">£7.85</span>
    </div>
    <!-- added number to cmp -->
    <span class="count-btn">1</span>
  </div>
</template>

<script>
import { eventBus } from "@/main.js";
export default {
  methods: {
    AddToBascketTrue() {
      eventBus.$emit("AddToBascketTrue", true);
    }
  }
};
</script>