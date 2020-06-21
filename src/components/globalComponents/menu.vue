<template>
  <div
    class="menu"
    :class="{'menuCome': sendMenu ,'over-flow':Account,'over-flow':dietaryShow,'over-flow':sorting1,'over-flow':sorting2,'over-flow':Share}"
  >
    <div class="menu-container">
      <!-- menu head -->
      <div class="menu-head">
        <div class="d-flex">
          <figure>
            <img src="@/assets/icons/userAvatar.png" alt />
          </figure>
          <section>
            <h3 class="fz-15">John Doe</h3>
            <p class="fz-12">john.doe@gmail.com</p>
          </section>
        </div>
        <button class="closeMenu-btn" @click="closeMenu">×</button>
        <!-- <figure class="close-menu-btn" @click="closeMenu">
        <img src="@/assets/icons/dietary-icon.png" alt="">
        </figure>-->
      </div>
      <!-- menu section -->
      <ul class="container">
        <li @click="dietaryShow = true">
          <img src="@/assets/icons/dietary-icon.png" alt />
          DIETARY
        </li>
        <li @click="sorting1 = true">
          <img src="@/assets/icons/sorting-icon.png" alt />
          SORTING
        </li>
        <li @click="Account = true">
          <img src="@/assets/icons/account-icon.png" alt />
          ACCOUNT
        </li>
        <li>
          <router-link to="/orders">
          <img src="@/assets/icons/order-icon.png" alt />
          ORDER HISTORY
          </router-link>
        </li>
        <li @click="closeMenu">
          <router-link to="/Landing/LowerMarket">
            <img src="@/assets/icons/market-icon.png" alt />
            MARKET
          </router-link>
        </li>
        <li @click="Share = true">
          <img src="@/assets/icons/share-icon.png" alt />
          SHARE
        </li>
      </ul>
    </div>
    <!-- ________________________________pop up component import -->
    <!-- dietary pop up -->
    <Account-pop :Account="Account"></Account-pop>
    <!-- dietary pop up -->
    <dietary-pop :dietaryShow="dietaryShow"></dietary-pop>
    <!-- sorting-1 pop up -->
    <sorting-pop-1 :sorting1="sorting1"></sorting-pop-1>
    <!-- sorting-2 pop up -->
    <sorting-pop-2 :sorting2="sorting2"></sorting-pop-2>
    <!-----------Share------------>
    <Share :Share="Share"></Share>
  </div>
</template>

<script>
import { eventBus } from "@/main.js";

export default {
  props: ["sendMenu"],
  data() {
    return {
      Account: false,
      dietaryShow: false,
      sorting1: false,
      sorting2: false,
      Share: false
    };
  },
  methods: {
    closeMenu() {
      eventBus.$emit("closeMenu", false);
    }
  },
  created() {
    eventBus.$on("AccountClose", close => {
      this.Account = close;
    });
    eventBus.$on("dietaryClose", close => {
      this.dietaryShow = close;
    });
    eventBus.$on("sortingClose1", close => {
      this.sorting1 = close;
    });
    eventBus.$on("sortingClose2", close => {
      this.sorting2 = close;
    });
    eventBus.$on("ShareClose", close => {
      this.Share = close;
    });
  }
};
</script>

<style>
</style>