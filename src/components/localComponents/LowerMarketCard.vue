<template>
  <div class="todays-hot-card">
    <router-link to="/Landing/Market/SelectFood">
      <figure>
        <img src="@/assets/images/hot-1.jpg" alt />
      </figure>
    </router-link>
    <div class="todays-hot-info">
      <div class="d-flex justify-content-between align-items-center mb-1">
        <h3 class="fz-15 m-0">Hungry Llama</h3>
        <div class="rate">
          <img src="@/assets/icons/star-green.png" alt />
          <p class="fz-10">4.8 Excellent(100)</p>
        </div>
      </div>
      <p class="fz-12 gray-text-color m-0">Peruvian street food.</p>
      <p class="fz-12 gray-text-color m-0">Pice : £ £ - Pick Up.</p>
      <p class="fz-12 gray-text-color m-0">Trading Days: Tuesday, Wednesday, Thursday, Friday</p>
      <div class="discount2">
        <img src="@/assets/icons/discount.svg" alt />
        <p class="fz-12 discount-text-color m-0">10% off</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'selectFood'
};
</script>

<style>
</style>