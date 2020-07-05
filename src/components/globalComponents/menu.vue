<template>
  <div
    class="menu"
    :class="{'menuCome': sendMenu ,'over-flow':Account,'over-flow':dietaryShow,'over-flow':sorting1,'over-flow':sorting2,'over-flow':Share}"
  >
    <div class="menu-container">
      <div class="menu-head-container">
        <!-- menu head -->
        <div class="menu-head">
          <div class="d-flex">
            <figure>
              <img src="@/assets/icons/userAvatar.svg" alt />
            </figure>
            <section>
              <h3 class="fz-15">John Doe</h3>
              <p class="fz-12">john.doe@gmail.com</p>
            </section>
          </div>
          <button class="closeMenu-btn" @click="closeMenu">
            <img class="m-0" src="@/assets/icons/close-icon.svg" alt @click="backShow" />
          </button>
          <!-- <figure class="close-menu-btn" @click="closeMenu">
        <img src="@/assets/icons/dietary-icon.png" alt="">
          </figure>-->
        </div>
        <!-- menu section -->
        <ul class="container">
          <li @click="Account = true">
            <img src="@/assets/icons/account-icon.svg" alt />
            ACCOUNT
          </li>
          <li>
            <router-link to="/orders">
              <img src="@/assets/icons/order-icon.svg" alt />
              ORDER HISTORY
            </router-link>
          </li>
          <li @click="closeMenu">
            <router-link to="/Landing/Market">
              <img src="@/assets/icons/market-icon.svg" alt />
              MARKET
            </router-link>
          </li>
          <li @click="Share = true">
            <img src="@/assets/icons/share-icon.svg" alt />
            SHARE
          </li>
        </ul>
      </div>
      <!-- footer -->
      <footer>
        <figure>
          <img src="@/assets/icons/instagram.svg" alt />
        </figure>
        <figure>
          <img src="@/assets/icons/facebook-icon.svg" alt />
        </figure>
        <figure>
          <img src="@/assets/icons/twitter.svg" alt />
        </figure>
      </footer>
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
    },

    backShow() {
      eventBus.$emit("backShow", false);
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