<template>
  <div class="bot-menu-padding">
    <div class="container-fluid container-ex m-0 p-0">
      <figure class="header-pic m-0">
        <img src="@/assets/images/header-pic-2.jpg" alt />
        <figcaption class="bdrs-50">
          <router-link to="/Landing/Products">
            <img src="@/assets/icons/left-arrow-circle.svg" alt />
          </router-link>
        </figcaption>
      </figure>
    </div>
    <div>
      <div class="container-fluid container-ex select-food-main">
        <div class="select-food-title">
          <div>
            <h3 class="fz-20 fw-bold">Hungry Llama</h3>
            <div class="rate">
              <img src="@/assets/icons/star-green.png" alt />
              <p class="fz-12">4.8 Excellent(100)</p>
            </div>
          </div>
          <p class="fz-18 gray-text-color const-height-45">Beautiful hand made arts and crafts from recycled materials. 
          </p>
        </div>

        
        <p class="m-0 fz-15">Pice : £ £ - Pick Up.</p>
        <p class="m-0 fz-15">Trading Days: Tuesday, Wednesday, Thursday, Friday</p>
        <p
          class="info-pop-1 gray-text-color fz-13 gray-bg mt-3">I'm a mum of 💁‍♂️💁‍♂️💁‍♂️💁‍♀️💁‍♀️supporting creative mind of Africawomen who handmake Arts and crafts</p>
        <div class="discount3">
          <img src="@/assets/icons/discount.svg" alt />
          <p class="fz-15 discount-text-color m-0">10% off entir menu</p>
        </div>
      </div>
      <!-- _______________________________________menu -->
      <div class="container-fluid container-ex gray-bg">
        <h2 class="fz-15 dark-text-color gray-titles text-left">Hand Craft</h2>
      </div>

      <div class="container-fluid container-ex">
        <h3 class="select-subtitle fz-15 text-left mb-3">Most Popular</h3>
        <!-- without offer price -->
        <!-- .added number to show little box number -->
        <SelectHandCraft v-for="test6 in 2" :key="test6" class="added-number"></SelectHandCraft>
        <!-- with offer price -->
        <SelectHandCraft v-for="test7 in 2" :key="test7" class="offer"></SelectHandCraft>
      </div>
    </div>
    <AddToBascket :AddToBascket="AddToBascket"></AddToBascket>
    <!-- ________________________________________________navigation menu -->
    <app-nav></app-nav>
  </div>
</template>

<script>
import SelectHandCraft from "@/components/localComponents/SelectHandCraft.vue";
import AddToBascket from "@/components/globalComponents/Bascket/AddToBascket.vue";
import { eventBus } from "@/main.js";

export default {
  name: "selectFood",
  data() {
    return {
      AddToBascket: false
    };
  },
  components: {
    SelectHandCraft: SelectHandCraft,
    AddToBascket: AddToBascket
  },
  created() {
    eventBus.$on("AddToBascketClose", close => {
      this.AddToBascket = close;
    });

    eventBus.$on("AddToBascketTrue", getTrue => {
      this.AddToBascket = getTrue;
    });
  }
};
</script>

<style>
</style>