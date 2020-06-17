<template>
  <div>
    <div class="dark-cover" v-if="orderDetails">
         <figure @click="orderDetailsClose">
        <img src="@/assets/icons/left-arrow-circle.png" alt />
      </figure>
    </div>
    <div class="orderDetails" :class="{'orderDetails-come':orderDetails}">
      <div class="header">
        <h2>Order Details</h2>
      </div>
      <div class="container-fluid">
        <div class="orderDetails-main">
          <div class="orderDerails-title">
            <h3>LowerMarshMarket</h3>
            <h4>Hungery Llama</h4>
            <p>(Peruian treet food)</p>
            <p class="date">17/03/2020</p>
          </div>
          <div class="orderDetails-icons">
            <div>
              <figure>
                <img src="@/assets/icons/mail.png" alt />
              </figure>
              <figure>
                <img src="@/assets/icons/phone.png" alt />
              </figure>
              <figure>
                <img src="@/assets/icons/location1.png" alt />
              </figure>
            </div>
          </div>
        </div>
        <ul>
            <li v-for="test in 4" :key="test">
                <p class="food">1x Sandwich</p>
                <p class="price">£7.1</p>
            </li>
            <li>
                  <p class="order-total">Order Total</p>
                <p class="total-price">£21.3</p>
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
  methods:{
      orderDetailsClose(){
          eventBus.$emit('orderDetailsClose' , false);
      }
  }
};
</script>

<style>
</style>