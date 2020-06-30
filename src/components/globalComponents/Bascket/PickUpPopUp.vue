<template>
  <div>
    <div class="dark-cover" v-if="pickUpPopUp" @click="PickUpClose"></div>
    <div
      class="bascket-pop-up-container container-fluid container-ex py-2"
      :class="{'bascket-pop-up-container-come':pickUpPopUp}"
    >
      <div>
        <header class="justify-content-start">
          <span class="fz-15 mr-5">Today</span>
          <span class="ml-5">10/9/2020</span>
        </header>
        <section style="height:auto" class="d-flex align-self-start py-2 borders">
          <div class="d-flex justify-content-center align-items-center">
            <img src="@/assets/icons/clock.png" alt class="mr-1" />
            <span class="text-nowrap mr-3 fz-15">Pickup Time</span>
          </div>
          <div class="time-picker-container">
            <b-form-select v-model="selected" :options="options" class="time-picker"></b-form-select>
            <img src="@/assets/icons/drop down.png" alt />
          </div>
        </section>
      </div>
      <footer>
        <button
          class="submit-btn lightBlue-bg"
          @click="PickUpClose();AddMoreToBascketClose();SmallBascketShow();SmallBascketHide();"
        >CONFIRM</button>
      </footer>
    </div>
  </div>
</template>
<script>
import { eventBus } from "@/main.js";
export default {
  props: ["pickUpPopUp"],
  data() {
    return {
      counter: 1,
      selected: "a",
      options: [
        { value: "a", text: "12:15-13:15" },
        { value: "b", text: "13:15-14:15" },
        { value: "c", text: "14:15-15:15" },
        { value: "d", text: "15:15-16:15" },
        { value: "e", text: "16:15-17:15" }
      ]
    };
  },
  methods: {
    PickUpClose() {
      eventBus.$emit("PickUpClose", false);
    },
    SmallBascketShow() {
      eventBus.$emit("SmallBascketShow", true);
    },
    SmallBascketHide() {
      eventBus.$emit("SmallBascketHide", false);
    },
    AddMoreToBascketClose() {
      eventBus.$emit("AddMoreToBascketClose", false);
    }
  }
};
</script>