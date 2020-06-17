<template>
  <div class="bascket">
    <div class="container-fluid">
      <header class="backAndEdit">
        <!-- back arrow -->
        <router-link to="/bascket">
          <img src="@/assets/icons/left-arrow-circle.png" alt />
        </router-link>
        <!-- title -->
        <h3 class="mr-2">Checkout</h3>
        <div></div>
      </header>
    </div>
    <!-- gray title -->
    <div class="gray-bg container-fluid py-2">
      <h3 class="fz-15 text-left m-0">Pickup in 20 min</h3>
    </div>
    <div class="container-fluid">
      <div class="text-left mt-2">
        <img src="@/assets/icons/location.png" alt class="mr-1" />
        <span class="fz-15">Pickup point</span>
      </div>
      <div class="text-left mt-1">
        <img src="@/assets/icons/mini-map.png" alt />
      </div>
    </div>
    <!-- gray title -->
    <div
      class="gray-bg container-fluid py-2 mb-2 mt-4 d-flex justify-content-between align-items-center"
    >
      <h3 class="fz-15 text-left m-0">Payment</h3>
      <button class="btn-style-1">Change</button>
    </div>

    <!-- radio check -->
    <div class="radio-container container-fluid">
      <div>
        <img src="@/assets/icons/apple-pay.png" alt class="mr-2"/>
        <label for="select1">Apple Pay</label>
      </div>
      <input type="radio" name="select" id="select1" class="mr-2"/>
    </div>
    <!-- radio check -->
    <div class="radio-container container-fluid">
      <div>
        <img src="@/assets/icons/visa-pay.png" alt class="mr-2"/>
        <label for="select2">Visa Card</label>
      </div>
      <input type="radio" name="select" id="select2" class="mr-2"/>
    </div>
    <!-- order total -->
    <div class="d-flex justify-content-between align-items-center container-fluid my-3">
        <span class="fz-15 fw-bold">Order Total:</span>
        <span class="fz-15 fw-bold">£16.05</span>
    </div>
    <!-- pay btn -->
    <router-link to="/Payment">
        <button class="lightBlue-bg fz-15 pay-btn">Pay</button>
    </router-link>

    <!-- ________________________________________________navigation menu -->
    <app-nav></app-nav>
  </div>
</template>
<script>
// import { eventBus } from "@/main.js";

export default {
  name: "bascket",
  data() {
    return {
      selected: ""
    };
  },
  methods: {},
  created() {}
};
</script>