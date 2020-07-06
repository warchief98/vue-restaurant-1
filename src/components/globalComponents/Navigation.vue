<template>
  <!--_______________________________________________________ navigation -->

  <div class="navigation container-fluid container-ex">
    <div class="navi-items">
      <router-link to="/Landing">
        <img src="@/assets/icons/home.svg" alt="">
        <img src="@/assets/icons/menu-icon-1.svg" alt />
        
      </router-link>
    </div>
    <div class="navi-items">
      <router-link to="/filter">
        <img src="@/assets/icons/menu-icon-2.svg" alt />
        <img src="@/assets/icons/filter selected.svg" alt="">
      </router-link>
    </div>
    <div class="navi-items">
      <router-link to="/orders">
        <img src="@/assets/icons/menu-icon-3.svg" alt />
        <img src="@/assets/icons/order-selected.svg" alt="">
      </router-link>
    </div>
    <div class="navi-items">
      <router-link  to="/searchMarket">
        <img src="@/assets/icons/menu-icon-4.svg" alt />
        <img src="@/assets/icons/search market-selected.svg" alt="">
      </router-link>
    </div>

    <!-- view bascket component -->
    <view-bascket-small v-if="smallBascket"></view-bascket-small>
  </div>
</template>

<script>
import { eventBus } from "@/main.js";
export default {
  data() {
    return {
      smallBascket: false
    };
  },
  created() {
    eventBus.$on("SmallBascketShow", open => {
      this.smallBascket = open;
    });
    eventBus.$on("SmallBascketHide", close => {
      this.smallBascket = close;
    });
  }
};
</script>

<style lang="scss">
</style>