<template>
  <div>
    <div class="dark-cover" v-if="addMoreToBascket" @click="AddMoreToBascketClose"></div>
    <div
      class="bascket-pop-up-container container-fluid container-ex py-2"
      :class="{'bascket-pop-up-container-come':addMoreToBascket}"
    >
      <header>
        <span class="fz-20">Sandwich</span>
        <span class="gray-text-color fz-18">£8.85</span>
      </header>
      <section>
        <p class="gray-text-color fz-18 text-left">Tuna, tomato, pesto,tabasco</p>
      </section>
      <footer>
        <div class="counter">
          <button @click="counter--">-</button>
          <span>{{ counter }}</span>
          <button @click="counter++">+</button>
        </div>
        <p class="discount-text-color fz-12 mb-3">Remove item from cart</p>
        <button
          class="submit-btn lightBlue-bg"
          @click="PickUpPopUpShow();SmallBascketShow();"
        >UPDATE CRAFT</button>
      </footer>
    </div>
  </div>
</template>
<script>
import { eventBus } from "@/main.js";
export default {
  props: ["addMoreToBascket"],
  data() {
    return {
      counter: 1
    };
  },
  methods: {
    AddMoreToBascketClose() {
      eventBus.$emit("AddMoreToBascketClose", false);
    },
    PickUpPopUpShow() {
      eventBus.$emit("PickUpPopUpShow", true);
    },
    SmallBascketShow() {
      eventBus.$emit("SmallBascketShow", true);
    }
  }
};
</script>