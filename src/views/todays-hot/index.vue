<template>
  <div>
    <div class="Landing">
      <div class="main-wrapper container-fluid container-ex">
        <app-header class="border-0">
            <img src="@/assets/icons/TodaysHotIcon.png" alt class="title-icon" />
        </app-header>

        <div class="todays-hot-page">
          <!-- mainTitle -->
          <div class="main-title">
            <div>
              <img src="@/assets/icons/TodaysHotIcon.png" alt class="title-icon" />
              <h2 class="fz-15 dark-text-color">Todays Hot Food</h2>
            </div>
          </div>
            <div>
              <!-- discount-show class is for showing discount label/remove it to remove discount in component -->
                <todaysHotFoodCard v-for="test8 in 3" :key="test8" class="discount-show"></todaysHotFoodCard>
                <todaysHotFoodCard v-for="test9 in 2" :key="test9"></todaysHotFoodCard>
            </div>
        </div>
        <!-- ________________________________________________navigation menu -->
        <app-nav></app-nav>
      </div>
    </div>
  </div>
</template>

<script>
import todaysHotFoodCard from "@/components/localComponents/todaysHotFoodCard.vue";

export default {
  name:'todaysHot',
  components: {
    todaysHotFoodCard: todaysHotFoodCard
  }
};
</script>

<style>
</style>