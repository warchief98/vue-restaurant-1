<template>
  <div class="orderHistory">
    <div class="orderHistory-container" :class="{'over-flow': orderDetails}">
    <div class="orderHistory-head">
      <figure><img src="@/assets/icons/order.png" alt=""></figure>
      <figure><img src="@/assets/icons/market.png" alt=""></figure>
      <span></span>
    </div>
    <div class="orderHistory-box container-fluid" v-for="test in 5" :key="test">
      <div class="orderHistory-food">
        <div class="food">
          <p>1x SAndwich</p>
          <p>!X Season</p>
          <p>Salad...</p>
        </div>
        <p class="date">17/03/2020</p>
      </div>
      <div class="orderHistory-title">
        <h3>LowerMarshMarket</h3>
        <h4>Hungery Llama</h4>
        <p>(Peruian treet food)</p>
        <button class="done-btn" @click="orderDetails = true"><img src="@/assets/icons/arrow-bottom.png" alt=""> More Details</button>
      </div>
      <div class="orderHistory-icons">
        <div>
          <figure>
            <img src="@/assets/icons/mail.png" alt="">
          </figure>
          <figure>
            <img src="@/assets/icons/phone.png" alt="">
          </figure>
          <figure>
            <img src="@/assets/icons/location1.png" alt="">
          </figure>

        </div>
        <figure @click="deletePop= true">
          <img src="@/assets/icons/delete.png" alt="">
        </figure>
      </div>
    </div>
  </div>
  <orderDetails v-if="orderDetails" :orderDetails="orderDetails"></orderDetails> 
  <delete-pop v-if="deletePop" :deletePop="deletePop"></delete-pop>
  </div>
</template>

<script>
import { eventBus } from '@/main.js'

export default {
  data(){
    return{
      orderDetails: false,
      deletePop: false,
    }
  },
  created(){
    eventBus.$on('orderDetailsClose' , (close) =>{
      this.orderDetails = close
    })
     eventBus.$on('deleteClose' , (close) =>{
      this.deletePop = close
    })
  }
}
</script>

<style>

</style>