<template>
  <!--_______________________________________________________ main header -->
  <div class="main-header container-fluid container-ex">
    <div class="row pl-0">
      <div class="main-search col-10">
        <img src="@/assets/icons/search-3.svg" alt />

        <input class="fz-12" type="text" />
      </div>

      <div class="col-2 menu-btn" @click="menuShow = !menuShow">
        <img src="@/assets/icons/menu-btn.svg" alt @click="backHides"/>
      </div>
    </div>
    <!-- .all-blue-menu is a class for another theme of app-menu component -->
    <app-menu class :sendMenu="menuShow"></app-menu>
  </div>
</template>

<script>
import { eventBus } from "@/main.js";

export default {
  data() {
    return {
      menuShow: false
    };
  },
  methods:{
      backHides(){
          eventBus.$emit("backHide",true)
      }
  },
  created() {
    eventBus.$on("closeMenu", close => {
      this.menuShow = close;
    });
  }
};
</script>

<style>
</style>