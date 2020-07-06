<template>
  <div class="searchMarket">
    <app-header-2></app-header-2>
    <div class="main-searchMarket container-fluid container-ex">
      <header>
        <h3 class="fz-18">Top markets Categories</h3>
      </header>
      <app-market-card></app-market-card>
      <app-market-card class="comming-soon"></app-market-card>
    </div>
    <app-nav></app-nav>
  </div>
</template>

<script>
import searchMarketCard from '../components/localComponents/searchmarketCard'
export default {
    name:'searchMarket',
    components:{
      appMarketCard: searchMarketCard,
    }

}
</script>

<style>

</style>