<template>
  <div class="market">
    <h3 class="text-center fz-18 fw-bold my-3">Market</h3>
    <!-- market block component 1 -->
    <div>
      <innerMarket></innerMarket>
      <!-- market-comming-soon class for transform the same block to comming soon block -->
      <innerMarket class="market-comming-soon"></innerMarket>
    </div>
  </div>
</template>

<script>
import innerMarket from './MarketPopUpInner.vue'
export default {
  components:{
    innerMarket:innerMarket
  }
};
</script>

<style>
</style>