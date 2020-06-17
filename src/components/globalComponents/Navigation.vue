<template>
  <!--_______________________________________________________ navigation -->

  <div class="navigation container-fluid">
    <div class="navi-items">
      <router-link to="/">
        <img src="@/assets/icons/menu-icon-1.png" alt />
      </router-link>
    </div>
    <div class="navi-items">
      <router-link to="/filter">
        <img src="@/assets/icons/menu-icon-2.png" alt />
      </router-link>
    </div>
    <div class="navi-items">
      <router-link to="/orders">
        <img src="@/assets/icons/menu-icon-3.png" alt />
      </router-link>
    </div>
    <div class="navi-items">
      <router-link  to="/searchMarket">
        <img src="@/assets/icons/menu-icon-4.png" alt />
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