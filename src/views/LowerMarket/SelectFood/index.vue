<template>
  <div class="container-fluid">
    <div class="container-fluid m-0 p-0">
      <figure class="header-pic">
        <img src="@/assets/images/header-pic.jpg" alt />
        <figcaption>
          <router-link to="/Landing/LowerMarket">
            <img src="@/assets/icons/left-arrow-circle.png" alt />
          </router-link>
        </figcaption>
      </figure>
    </div>

    <div class="container-fluid select-food-main">
      <div>
        <h3 class="fz-20">Hungry Llama</h3>
        <div class="rate">
          <img src="@/assets/icons/star-green.png" alt />
          <p class="fz-12">4.8 Excellent(100)</p>
        </div>
      </div>

      <p class="fz-18 gray-text-color">Peruvian street food.</p>
      <p class="m-0 fz-15">Pice : £ £ - Pick Up.</p>
      <p class="m-0 fz-15">Trading Days: Tuesday, Wednesday, Thursday, Friday</p>
      <p
        class="info-pop-1 gray-text-color fz-13 gray-bg mt-3"
      >We have a dream of presenting the wide diversity and fusion of Peruvian food, using the best and most authentic ingredients with a modern twist.</p>
      <div class="discount2">
        <img src="@/assets/icons/discount.png" alt />
        <p class="fz-15 discount-text-color m-0">10% off entir menu</p>
      </div>
    </div>
    <!-- _______________________________________menu -->
    <div class="container-fluid gray-bg">
      <h2 class="fz-15 dark-text-color py-3 text-left">Menu</h2>
    </div>

    <div class="container-fluid gray-bg">
      <h2 class="fz-15 dark-text-color py-3 text-left">Salad Box</h2>
    </div>

    <div class="container-fluid gray-bg">
      <h2 class="fz-15 dark-text-color py-3 text-left">Cold Drinks</h2>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>