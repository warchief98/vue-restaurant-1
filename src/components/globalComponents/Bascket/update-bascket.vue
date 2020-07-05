<template>
  <div>
    <div class="dark-cover2" v-if="updateBascket">
      <figure @click="updateBascketClose">
        <img src="@/assets/icons/left-arrow-circle.svg" alt />
      </figure>
    </div>
    <div
      class="bascket-pop-up-container container-fluid container-ex py-2"
      :class="{'bascket-pop-up-container-come':updateBascket}"
    >
      <header>
        <span class="fz-20">Sandwich</span>
        <span class="gray-text-color fz-18">£8.85</span>
      </header>
      <section class="section-m-b">
        <p class="gray-text-color fz-18 text-left">Tuna, tomato, pesto,tabasco</p>
      </section>
      <footer>
        <div class="counter">
          <button @click="counter--">-</button>
          <span>{{ counter }}</span>
          <button @click="counter++">+</button>
        </div>
        <p class="discount-text-color fz-12 mb-3">Remove item from cart</p>
        <button class="submit-btn lightBlue-bg">UPDATE BASCKET</button>
      </footer>
    </div>
  </div>
</template>

<script>
import { eventBus } from "@/main.js";

export default {
  data() {
    return {
      counter: 1
    };
  },
  props: ["updateBascket"],
  methods: {
    updateBascketClose() {
      eventBus.$emit("updateBascketCloae", false);
    }
  }
};
</script>

<style>
</style>