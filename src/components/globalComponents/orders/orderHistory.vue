<template>
  <div class="orderHistory">
    <div class="orderHistory-container" :class="{'over-flow': orderDetails}">
      <div class="orderHistory-box container-fluid container-ex" v-for="test in 5" :key="test">
        <div class="orderHistory-food">
          <div class="food">
            <p>
              <span class="container-ex pl-0">1x</span>Sandwich
            </p>
            <p>
              <span class="container-ex pl-0">1x</span>Season
            </p>
            <p>Salad...</p>
          </div>
          <p class="date">17/03/2020</p>
        </div>
        <div class="orderHistory-title">
          <div>
            <h3>LowerMarshMarket</h3>
            <h4>Hungery Llama</h4>
          </div>

          <button class="done-btn" @click="orderDetails = true">
            <img src="@/assets/icons/drop down.svg" alt />
          </button>
        </div>
        <div class="orderHistory-icons">
          <div>
            <figure>
              <img src="@/assets/icons/mail.svg" alt />
            </figure>
            <figure>
              <img src="@/assets/icons/phone.svg" alt />
            </figure>
            <figure class="mr-0">
              <img src="@/assets/icons/location1.svg" alt />
            </figure>
          </div>
          <figure @click="deletePop= true">
            <img src="@/assets/icons/delete.svg" alt />
          </figure>
        </div>
      </div>
    </div>
    <orderDetails v-if="orderDetails" :orderDetails="orderDetails"></orderDetails>
    <delete-pop v-if="deletePop" :deletePop="deletePop"></delete-pop>
  </div>
</template>

<script>
import { eventBus } from "@/main.js";

export default {
  data() {
    return {
      orderDetails: false,
      deletePop: false
    };
  },
  created() {
    eventBus.$on("orderDetailsClose", close => {
      this.orderDetails = close;
    });
    eventBus.$on("deleteClose", close => {
      this.deletePop = close;
    });
  }
};
</script>

<style>
</style>