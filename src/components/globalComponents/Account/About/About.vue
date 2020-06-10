<template>
  <div class="about" :class="{'about-come':About}">
    <!-- About head -->
    <div class="about-head-title">
      <figure @click="aboutClose">
        <img src="@/assets/icons/right-arrow.png" alt />
      </figure>
      <h1 class="fz-18 m-0">About</h1>
    </div>

    <ul>
      <li @click="RatingAndReviews = true">Rating & Reviews</li>
      <li>FAQs</li>
      <li>Legal</li>
    </ul>
    <rating-reviews :RatingAndReviews="RatingAndReviews"></rating-reviews>
  </div>
</template>

<script>
import { eventBus } from '@/main.js'

export default {
  props:['About'],
  data(){
    return{
      RatingAndReviews:false,
    }
  },
  methods:{
    aboutClose(){
      eventBus.$emit('aboutClose',false)
    }
  },
  created(){
    eventBus.$on('Rating&ReviewsClose', (close) =>{
      this.RatingAndReviews = close
    })
  }
};
</script>

<style>
</style>