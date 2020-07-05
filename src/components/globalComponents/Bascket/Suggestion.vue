<template>
  <div class="suggest-card">
    <div class="suggest-info">
      <div>
        <h5 class="fz-12 m-0">Season Salad</h5>
        <p class="fz-12 gray-text-color text-left">
          Season Salad
          Lettuce, cucumber, onion, red wine ... vinegar
        </p>
      </div>
      <a href="#" class="fz-12 lightGreen-color" @click="addMoreToBascketShow">+ Add New</a>
    </div>
    <div class="suggest-price">
      <span class="fz-12 gray-text-color">£7.85</span>
      <span class="fz-12">£5.85</span>
    </div>
  </div>
</template>
<script>
import { eventBus } from "@/main.js";

export default {
  methods: {
    addMoreToBascketShow() {
      eventBus.$emit("addMoreToBascketShow", true);
    }
  }
};
</script>