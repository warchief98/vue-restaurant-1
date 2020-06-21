<template>
  <div class="todays-hot-card">
      <!-- this is product card component -->
    <router-link to="/Landing/Products/SelectCraft">
      <figure>
        <img src="@/assets/images/Product-1.jpg" alt />
      </figure>
    </router-link>
    <div class="todays-hot-info">
      <div class="d-flex justify-content-between align-items-center mb-1">
        <h3 class="fz-15 m-0">Gifted Hands Africa</h3>
        <div class="rate">
          <img src="@/assets/icons/star-green.png" alt />
          <p class="fz-10">4.8 Excellent(100)</p>
        </div>
      </div>
      <p class="fz-12 gray-text-color m-0">Beautiful hand made arts and crafts from recycled materials.</p>
      <p class="fz-12 gray-text-color m-0">Pice : £ £ - Pick Up.</p>
      <p class="fz-12 gray-text-color m-0">Trading Days: Tuesday, Wednesday, Thursday, Friday</p>
      <div class="discount2">
        <img src="@/assets/icons/discount.png" alt />
        <p class="fz-12 discount-text-color m-0">10% off</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'SelectCraft',
};
</script>

<style>
</style>