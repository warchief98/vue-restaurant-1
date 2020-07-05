<template>
  <div>
    <div class="dark-cover" v-if="orderDetails">
      <figure @click="orderDetailsClose">
        <img src="@/assets/icons/left-arrow-circle.svg" alt />
      </figure>
    </div>
    <div class="orderDetails" :class="{'orderDetails-come':orderDetails}">
      <div class="header">
        <h2>Order Details</h2>
      </div>
      <div class="container-fluid container-ex">
        <div class="orderDetails-main">
          <div class="orderDerails-title">
            <div>
              <h3 class="fz-15 fw-bold dark-color">LowerMarshMarket</h3>
              <h4 class="fz-15 dark-color">Hungery Llama</h4>
              <p class="fz-13">(Peruian treet food)</p>
            </div>
             <div class="orderDetails-icons">
            <div>
              <figure>
                <img src="@/assets/icons/mail.svg" alt />
              </figure>
              <figure>
                <img src="@/assets/icons/phone.svg" alt />
              </figure>
              <figure>
                <img src="@/assets/icons/location2.svg" alt />
              </figure>
            </div>
          </div>
          </div>
          <div class="text-left w-100"><p class="date fz-12 gray-text-color">17/03/2020</p></div>
         
        </div>
        <ul>
          <li v-for="test in 3" :key="test">
            <p class="food">1x Sandwich</p>
            <p class="price">£7.1</p>
          </li>
          <li>
            <p class="order-total dark-color fz-15 fw-bold">Order Total</p>
            <p class="total-price dark-color fz-15 fw-bold">£21.3</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from "@/main.js";

export default {
  props: ["orderDetails"],
  data() {
    return {};
  },
  methods: {
    orderDetailsClose() {
      eventBus.$emit("orderDetailsClose", false);
    }
  }
};
</script>

<style>
</style>