<template>
  <div>
    <div class="Landing">
      <div class="main-wrapper container-fluid">
        <app-header></app-header>

        <div class="container-fluid todays-hot-page">
          <!-- mainTitle -->
          <div class="main-title">
            <div>
              <img src="@/assets/icons/TodaysHotIcon.png" alt class="title-icon" />
              <h2 class="fz-15 dark-text-color">LowerMarsh Market</h2>
            </div>
          </div>
            <div>
                <market-card v-for="test15 in 3" :key="test15"></market-card>
            </div>
              
            
        </div>
        <!-- ________________________________________________navigation menu -->
        <app-nav></app-nav>
      </div>
    </div>
  </div>
</template>

<script>
import marketCard from "@/components/localComponents/LowerMarketCard";

export default {
  name:'LowerMarket',
  components: {
    marketCard: marketCard
  }
};
</script>

<style>
</style>