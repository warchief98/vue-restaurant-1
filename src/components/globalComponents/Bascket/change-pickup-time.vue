<template>
  <div>
    <div class="dark-cover2" v-if="changePickupTime" @click="pickUpClose"></div>
    <div
      class="change-pickup-time container-fluid container-ex"
      :class="{'change-pickup-time-come' : changePickupTime}"
    >
      <header>
        <div>
          <p class="fz-15">Today</p>
          <p class="fz-15">10/9/2020</p>
        </div>
        <!-- pick up time -->
        <div>
          <img src="@/assets/icons/pickup-time.svg" alt />
          <p class="fz-15">Pickup Time</p>
          <div class="d-flex align-items-center justify-content-center">
            <p class="fz-12 m-0">4:55 PM</p>
          </div>
        </div>
      </header>
      <section></section>
      <footer>
        <button class="submit-btn lightBlue-bg">SAVE</button>
      </footer>
    </div>
  </div>
</template>

<script>
import { eventBus } from "@/main.js";
export default {
  props: ["changePickupTime"],
  methods: {
    pickUpClose() {
      eventBus.$emit("pickTimeClose", false);
    }
  }
};
</script>

<style>
</style>