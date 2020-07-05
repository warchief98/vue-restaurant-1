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
              <figure class="title-new-icon" style="box-shadow:0 0 10px #07C1F6">
                <img src="@/assets/icons/MarketMain.svg" alt class="title-icon" />
              </figure>
              <h2 class="fz-15 dark-text-color">Markets</h2>
              <!-- <img src="@/assets/icons/drop down.svg" alt class="rectangle" /> -->
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
              <figure class="title-new-icon" style="box-shadow:0 0 10px #C9751C">
                <img src="@/assets/icons/TodaysHotIcon.svg" alt class="title-icon" />
              </figure>
              <h2 class="fz-15 dark-text-color">Todays Hot Food</h2>
              <!-- <img src="@/assets/icons/drop down.svg" alt class="rectangle" /> -->
            </div>
            <a href>
              <img src="@/assets/icons/next.svg" alt />
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
              <figure class="title-new-icon" style="box-shadow:0 0 10px #C9BF1C">
                <img src="@/assets/icons/productIcon.svg" alt class="title-icon bdrs-50" />
              </figure>

              <h2 class="fz-15 dark-text-color">Produce & Craft</h2>
              <!-- <img src="@/assets/icons/drop down.svg" alt class="rectangle" /> -->
            </div>

            <a href>
              <img src="@/assets/icons/next.svg" alt />
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
        <div class="dark-cover" v-if="marketPopUp" @click="marketPopUp = false">
          <figure>
            <img src="@/assets/icons/left-arrow-circle.svg" alt />
          </figure>
        </div>

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
  data() {
    return {
      marketPopUp: false
    };
  },
  components: {
    MarketCard: MarketCard,
    MarketCardSoon: MarketCardSoon,
    TodaysHot: TodaysHot,
    Product: Product,
    MarketPopUp: MarketPopUp
  }
};
</script>
