<template>
  <div class="bascket">
    <div class="container-fluid container-ex">
      <header class="backAndEdit">
        <!-- back arrow -->
        <router-link to="/bascket">
          <img src="@/assets/icons/left-arrow-circle.svg" alt />
        </router-link>
        <!-- title -->
        <h3 class="mr-2">Checkout</h3>
        <div></div>
      </header>
    </div>
    <!-- gray title -->
    <div class="gray-titles gray-bg container-fluid container-ex d-flex justify-content-between align-items-center">
      <div class="d-flex align-items-center">
        <img src="@/assets/icons/pickup-time.svg" class="mr-3" alt="">
      <h3 class="fz-15 text-left m-0">Pickup time</h3>
      </div>
      <p class="fz-15">4:55 PM</p>
    </div>
    <div class="container-fluid container-ex">
      <div class="text-left mt-3">
        <img src="@/assets/icons/location2.svg" alt class="mr-1" />
        <span class="fz-15">Pickup point</span>
      </div>
      <div class="text-left mini-map">
        <img src="@/assets/icons/mini-map.png" alt />
      </div>
    </div>
    <!-- gray title -->
    <div
      class="gray-bg gray-titles container-fluid container-ex d-flex justify-content-between align-items-center"
    >
      <h3 class="fz-15 text-left m-0">Payment</h3>
      <router-link to="/Payment">
      <button class="btn-style-1">Change</button>
      </router-link>
    </div>

    <!-- radio check -->
    <div class="radio-container container-fluid container-ex">
      <div>
        <img src="@/assets/icons/apple-pay.svg" alt class=""/>
        <label for="select1" class="fz-15">Apple Pay</label>
      </div>
      <input type="radio" name="select" id="select1" class=""/>
    </div>
    <!-- radio check -->
    <div class="radio-container container-fluid container-ex">
      <div>
        <img src="@/assets/icons/visa-pay.svg" alt class=""/>
        <label for="select2" class="fz-15">Visa Card</label>
      </div>
      <input type="radio" name="select" id="select2" class=""/>
    </div>
    <!-- order total -->
    <div class="d-flex justify-content-between align-items-center container-fluid container-ex my-3">
        <span class="fz-15 fw-bold">Order Total:</span>
        <span class="fz-15 fw-bold">£16.05</span>
    </div>
    <!-- pay btn -->
    
        <button class="lightBlue-bg fz-15 pay-btn" @click="succesful = true">PAY</button>


    <!-- ________________________________________________navigation menu -->
    <app-nav></app-nav>
    <!-- _____________________________succesful error -->
    <succesful :succesful="succesful"></succesful>
  </div>
</template>
<script>
import { eventBus } from "@/main.js";
import succesful from '@/components/localComponents/Payment/paymentSuccesful'

export default {
  name: "bascket",
  data() {
    return {
      selected: "",
      succesful: false,
    };
  },
  components:{
    succesful : succesful,
  },
  methods: {},
  created() {
    eventBus.$on('succesfulHide',(close)=>{
      this.succesful = close
    })
  }
};
</script>