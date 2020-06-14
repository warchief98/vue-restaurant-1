<template>
  <div>
    <div class="Landing">
      <div class="main-wrapper container-fluid">
        <app-header></app-header>

        <div class="container-fluid todays-hot-page">
          <!-- mainTitle -->
          <div class="main-title">
            <div>
              <img src="@/assets/icons/productIcon.png" alt class="title-icon" />
              <h2 class="fz-15 dark-text-color">Product & Craft</h2>
            </div>
          </div>
            <div>
              <!-- discount-show class is for showing discount label/remove it to remove discount in component -->
                <product v-for="test4 in 3" :key="test4" class="discount-show"></product>
                <product v-for="test7 in 2" :key="test7" class=""></product>
            </div>
        </div>
        <!-- ________________________________________________navigation menu -->
        <app-nav></app-nav>
      </div>
    </div>
  </div>
</template>

<script>
import Product from "@/components/localComponents/ProductCard.vue";

export default {
  name:'Products',
  components: {
    Product: Product
  }
};
</script>

<style>
</style>