<template>
  <div>
    <div class="Landing">
      <div class="main-wrapper container-fluid container-ex">
        <app-header></app-header>
        <!-- back btn -->
        <router-link to="/Landing">
          <figure class="back-btn" :class="{'z-index-0':backHide}">
            <img src="@/assets/icons/left-arrow-circle.svg" alt />
          </figure>
        </router-link>

        <div class="todays-hot-page">
          <!-- mainTitle -->
          <div class="main-title">
            <div>
              <figure class="title-new-icon" style="box-shadow:0 0 10px #C9BF1C">
                <img src="@/assets/icons/productIcon.svg" alt class="title-icon" />
              </figure>
              <h2 class="fz-15 dark-text-color">Product & Craft</h2>
            </div>
          </div>
          <div>
            <!-- discount-show class is for showing discount label/remove it to remove discount in component -->
            <product v-for="test8 in 3" :key="test8" class="discount-show"></product>
            <product v-for="test9 in 2" :key="test9"></product>
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
import { eventBus } from "@/main.js";

export default {
  name: "Products",
  data() {
    return {
      backHide: false
    };
  },
  components: {
    Product: Product
  },
  created() {
    eventBus.$on("backHide", hide => {
      this.backHide = hide;
    });

    eventBus.$on("backShow", show => {
      this.backHide = show;
    });
  }
};
</script>

<style>
</style>