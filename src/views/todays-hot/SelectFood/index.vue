<template>
  <div class="bot-menu-padding">
    <div class="container-fluid container-ex m-0 p-0">
      <figure class="header-pic">
        <img src="@/assets/images/header-pic.jpg" alt />
        <figcaption>
          <router-link to="/Landing/todays-hot">
            <img src="@/assets/icons/left-arrow-circle.png" alt />
          </router-link>
        </figcaption>
      </figure>
    </div>
    <div class>
      <div class="container-fluid container-ex select-food-main">
        <div class="select-food-title">
          <div>
            <h3 class="fz-20">Hungry Llama</h3>
            <div class="rate">
              <img src="@/assets/icons/star-green.png" alt />
              <p class="fz-12">4.8 Excellent(100)</p>
            </div>
          </div>
           <p class="fz-18 gray-text-color">Peruvian street food.</p>
        </div>

       
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
      <!-- _______________________________________menu(SelectMenu) -->
      <div class="container-fluid container-ex gray-bg">
        <h2 class="fz-15 dark-text-color py-3 text-left">Menu</h2>
      </div>

      <div class="container-fluid container-ex">
        <h3 class="select-subtitle fz-15 text-left mb-3">Most Popular</h3>

        <!-- with offer price -->
        <SelectMenu v-for="offre in 2" :key="offre" class="offer"></SelectMenu>
        <!-- without offer price -->
        <SelectMenu v-for="offre2 in 2" :key="offre2" class="added-number"></SelectMenu>
      </div>

      <!-- _______________________________________salad box -->

      <div class="container-fluid container-ex gray-bg">
        <h2 class="fz-15 dark-text-color py-3 text-left">Salad Box</h2>
      </div>

      <div class="container-fluid container-ex">
        <!-- with offer price -->
        <SelectSalad v-for="salad in 2" :key="salad" class="offer added-number"></SelectSalad>
        <!-- without offer price -->
        <SelectSalad v-for="salad2 in 2" :key="salad2" class="added-number"></SelectSalad>
      </div>

      <!-- _______________________________________cold drink -->

      <div class="container-fluid container-ex gray-bg">
        <h2 class="fz-15 dark-text-color py-3 text-left">Cold Drinks</h2>
      </div>

      <div class="container-fluid container-ex">
        <!-- .sold-out for soldOot tag -->
        <SelectDrink v-for="drink in 2" :key="drink" class="sold-out"></SelectDrink>
        <SelectDrink v-for="drink2 in 2" :key="drink2"></SelectDrink>
      </div>
    </div>
    <AddToBascket :AddToBascket="AddToBascket"></AddToBascket>
    <!-- ________________________________________________navigation menu -->
    <app-nav></app-nav>
  </div>
</template>

<script>
import { eventBus } from "@/main.js";
import SelectMenu from "@/components/localComponents/SelectMenu.vue";
import SelectSalad from "@/components/localComponents/SelectSalad.vue";
import SelectDrink from "@/components/localComponents/SelectDrink.vue";
import AddToBascket from "@/components/globalComponents/Bascket/AddToBascket.vue";
export default {
  name: "selectFood",
  data() {
    return {
      AddToBascket: false
    };
  },
  components: {
    SelectMenu: SelectMenu,
    SelectSalad: SelectSalad,
    SelectDrink: SelectDrink,
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