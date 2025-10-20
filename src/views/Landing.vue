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
              <figure
                class="title-new-icon"
                style="box-shadow: 0 0 10px #07c1f6"
              >
                <img
                  src="@/assets/icons/MarketMain.svg"
                  alt
                  class="title-icon"
                />
              </figure>
              <h2 class="fz-15 dark-text-color">Markets</h2>
              <!-- <img src="@/assets/icons/drop down.svg" alt class="rectangle" /> -->
            </div>
          </div>
          <div
            class="all-roll d-flex justify-content-start justify-content-lg-center"
          >
            <market-card v-for="test20 in 1" :key="test20"></market-card>
            <MarketCardSoon class="comming-soon"></MarketCardSoon>
          </div>
        </div>

        <!-- ________________________________________________todays hot block -->
        <div class="todays-hot">
          <!-- mainTitle -->
          <div class="todays-hot">
            <router-link to="/Landing/todays-hot" class="main-title">
              <div>
                <figure
                  class="title-new-icon"
                  style="box-shadow: 0 0 10px #c9751c"
                >
                  <img
                    src="@/assets/icons/TodaysHotIcon.svg"
                    alt
                    class="title-icon"
                  />
                </figure>
                <h2 class="fz-15 dark-text-color">Todays Hot Food</h2>
              </div>
              <a href>
                <img src="@/assets/icons/next.svg" alt />
              </a>
            </router-link>

            <!-- Vue Carousel -->
            <carousel
              :per-page="3.3"
              :scroll-per-page="false"
              :space-padding="0"
              :navigation-enabled="true"
              :loop="true"
              :pagination-enabled="false"
            >
              <slide v-for="(item, i) in hotFoods" :key="i">
                <todays-hot :item="item" />
              </slide>
            </carousel>
          </div>
        </div>

        <!-- ________________________________________________product -->
        <div class="product">
          <!-- mainTitle -->
          <router-link to="/Landing/Products" class="main-title">
            <div>
              <figure
                class="title-new-icon"
                style="box-shadow: 0 0 10px #c9bf1c"
              >
                <img
                  src="@/assets/icons/productIcon.svg"
                  alt
                  class="title-icon bdrs-50"
                />
              </figure>

              <h2 class="fz-15 dark-text-color">Produce & Craft</h2>
              <!-- <img src="@/assets/icons/drop down.svg" alt class="rectangle" /> -->
            </div>

            <a href>
              <img src="@/assets/icons/next.svg" alt />
            </a>
          </router-link>

          <carousel
            :per-page="3.3"
            :scroll-per-page="false"
            :space-padding="0"
            :navigation-enabled="true"
            :loop="true"
            :pagination-enabled="false"
          >
            <slide v-for="(item, i) in products" :key="i">
              <Product :item="item" />
            </slide>
          </carousel>
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
        <market-pop-up
          :class="{ 'market-pop-up-come': marketPopUp }"
        ></market-pop-up>
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
      marketPopUp: false,
      hotFoods: [
        {
          name: "Fish & Chips",
          rate: "4.9 Excellent",
          img: require("@/assets/images/hot-foods/1.jpeg"),
        },
        {
          name: "Chicken Tikka Masala",
          rate: "4.8 Excellent",
          img: require("@/assets/images/hot-foods/2.jpg"),
        },
        {
          name: "Shepherd’s Pie",
          rate: "4.7 Very Good",
          img: require("@/assets/images/hot-foods/3.jpg"),
        },
        {
          name: "Mac & Cheese",
          rate: "4.6 Good",
          img: require("@/assets/images/hot-foods/4.jpg"),
        },
        {
          name: "Sausage Roll",
          rate: "4.8 Excellent",
          img: require("@/assets/images/hot-foods/5.jpeg"),
        },
      ],
      products: [
        {
          name: "Handmade Vase",
          category: "Craft",
          img: require("@/assets/images/products/1.jpg"),
        },
        {
          name: "Artisan Bread",
          category: "Produce",
          img: require("@/assets/images/products/2.jpeg"),
        },
        {
          name: "Wooden Spoon",
          category: "Craft",
          img: require("@/assets/images/products/3.jpeg"),
        },
        {
          name: "Organic Honey",
          category: "Produce",
          img: require("@/assets/images/products/4.jpg"),
        },
      ],
    };
  },
  components: {
    MarketCard: MarketCard,
    MarketCardSoon: MarketCardSoon,
    TodaysHot: TodaysHot,
    Product: Product,
    MarketPopUp: MarketPopUp,
  },
};
</script>
