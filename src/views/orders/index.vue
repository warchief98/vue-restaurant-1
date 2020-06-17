<template>
  <div class="order">
      <div class="order-head">
          <button class="order-btn"  :class="{'order-head-click' : Upcoming}" @click="UpcomingClick">Upcoming</button>
          <button class="order-btn" :class="{'order-head-click' : OrderHistory}" @click="OrderHistoryClick">Order History</button>
      </div>
      <Upcoming v-if="Upcoming" :Upcoming="Upcoming"></Upcoming>
      <OrderHistory v-if="OrderHistory" :OrderHistory="OrderHistory"></OrderHistory>
      <app-nav></app-nav>
  </div>
</template>

<script>
export default {
name:'orders',
data(){
  return{
    Upcoming: true,
    OrderHistory: false,
  }
},
methods:{
  UpcomingClick(){
    this.OrderHistory = false;
    this.Upcoming = true;

  },
   OrderHistoryClick(){
    this.Upcoming = false;
    this.OrderHistory = true;
  }
}
}
</script>

<style>

</style>