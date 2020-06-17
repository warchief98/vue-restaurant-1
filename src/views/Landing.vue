<template>
  <div>
    <div class="Landing">
      <div class="main-wrapper container-fluid">
        <app-header></app-header>
        <!-- ________________________________________________LowerMarsh block -->
        <div class="container-fluid lower-marsh">
          <!-- main-title -->
          <div class="main-title">
            <div>
              <img src="@/assets/icons/TodaysHotIcon.png" alt class="title-icon" />
              <h2 class="fz-15 dark-text-color">LowerMarsh Market</h2>
              <img src="@/assets/icons/drop down.png" alt class="rectangle" />
            </div>
          </div>
          <div class="all-roll">
            <market-card></market-card>
            <market-card class="comming-soon"></market-card>
          </div>
        </div>

        <!-- ________________________________________________todays hot block -->
        <div class="todays-hot container-fluid">
          <!-- mainTitle -->
          <router-link to="/Landing/LowerMarket" class="main-title">
            <div>
              <img src="@/assets/icons/TodaysHotIcon.png" alt class="title-icon" />
              <h2 class="fz-15 dark-text-color">Todays Hot Food</h2>
              <img src="@/assets/icons/drop down.png" alt class="rectangle" />
            </div>
            <a href>
              <img src="@/assets/icons/right-arrow.png" alt />
            </a>
          </router-link>

          <div class="all-roll">
            <!-- todays hot component 1 -->
            <todays-hot v-for="test13 in 2" :key="test13"></todays-hot>
            <todays-hot class="discount"></todays-hot>
          </div>
        </div>

        <!-- ________________________________________________product -->
        <div class="product container-fluid">
          <!-- mainTitle -->
          <router-link to="/Landing/Products" class="main-title">
            <div>
              <img src="@/assets/icons/productIcon.png" alt class="title-icon" />
              <h2 class="fz-15 dark-text-color">Product</h2>
              <img src="@/assets/icons/drop down.png" alt class="rectangle" />
            </div>

            <a href>
              <img src="@/assets/icons/right-arrow.png" alt />
            </a>
          </router-link>

          <div class="all-roll">
            <!-- sell card (product) component 1 -->
            <Product v-for="test14 in 3" :key="test14"></Product>
          </div>
        </div>
        <!-- ________________________________________________navigation menu -->
        <app-nav></app-nav>

        <!--_______________________________________________________ dark cover -->
        <div class="dark-cover" v-if="marketPopUp"></div>

        <!--_______________________________________________________ market pop up -->
        <market-pop-up v-if="marketPopUp"></market-pop-up>
      </div>
    </div>
  </div>
</template>

<script>
import MarketCard from "../components/localComponents/MarketCard";
import TodaysHot from "../components/localComponents/TodaysHot";
import Product from "../components/localComponents/Product";
import MarketPopUp from "../components/localComponents/MarketPopUp";
export default {
  name: "Home",
  data(){
    return{
      marketPopUp:false
    }
  },
  components: {
    MarketCard: MarketCard,
    TodaysHot: TodaysHot,
    Product: Product,
    MarketPopUp: MarketPopUp
  }
};
</script>
