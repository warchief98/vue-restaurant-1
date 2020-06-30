<template>
  <div>
    <div class="Landing">
      <div class="main-wrapper container-fluid container-ex">
        <app-header></app-header>
        <!-- ________________________________________________LowerMarsh block -->
        <div class="lower-marsh">
          <!-- main-title -->
          <div class="main-title" @click="marketPopUp = true">
            <div>
              <img src="@/assets/icons/TodaysHotIcon.png" alt class="title-icon" />
              <h2 class="fz-15 dark-text-color">Markets</h2>
              <img src="@/assets/icons/drop down.png" alt class="rectangle" />
            </div>
          </div>
          <div class="all-roll d-flex justify-content-start justify-content-lg-center">
            <market-card v-for="test20 in 1" :key="test20"></market-card>
            <MarketCardSoon class="comming-soon"></MarketCardSoon>
          </div>
        </div>

        <!-- ________________________________________________todays hot block -->
        <div class="todays-hot">
          <!-- mainTitle -->
          <router-link to="/Landing/todays-hot" class="main-title">
            <div>
              <img src="@/assets/icons/TodaysHotIcon.png" alt class="title-icon" />
              <h2 class="fz-15 dark-text-color">Todays Hot Food</h2>
              <img src="@/assets/icons/drop down.png" alt class="rectangle" />
            </div>
            <a href>
              <img src="@/assets/icons/right-arrow.png" alt />
            </a>
          </router-link>

          <div class="all-roll d-flex justify-content-start justify-content-lg-center">
            <!-- todays hot component 1 -->
            <todays-hot v-for="test13 in 5" :key="test13"></todays-hot>
            <todays-hot class="discount"></todays-hot>
          </div>
        </div>

        <!-- ________________________________________________product -->
        <div class="product">
          <!-- mainTitle -->
          <router-link to="/Landing/Products" class="main-title">
            <div>
              <img src="@/assets/icons/productIcon.png" alt class="title-icon" />
              <h2 class="fz-15 dark-text-color">Produce & Craft</h2>
              <img src="@/assets/icons/drop down.png" alt class="rectangle" />
            </div>

            <a href>
              <img src="@/assets/icons/right-arrow.png" alt />
            </a>
          </router-link>

          <div class="all-roll d-flex justify-content-start justify-content-lg-center">
            <!-- sell card (product) component 1 -->
            <Product v-for="test14 in 5" :key="test14"></Product>
          </div>
        </div>
        <!-- ________________________________________________navigation menu -->
        <app-nav></app-nav>

        <!--_______________________________________________________ dark cover -->
        <div class="dark-cover" v-if="marketPopUp" @click="marketPopUp = false"></div>

        <!--_______________________________________________________ market pop up -->
        <market-pop-up :class="{'market-pop-up-come':marketPopUp}"></market-pop-up>
      </div>
    </div>
  </div>
</template>

<script>
import MarketCard from "../components/localComponents/MarketCard";
import MarketCardSoon from "../components/localComponents/MarketCardSoon";
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
    MarketCardSoon:MarketCardSoon,
    TodaysHot: TodaysHot,
    Product: Product,
    MarketPopUp: MarketPopUp
  }
};
</script>
