<template>
  <div class="about" :class="{'about-come':About}">
    <!-- About head -->
    <div class="about-head-title">
      <figure @click="aboutClose">
        <img src="@/assets/icons/left-arrow-circle.svg" alt />
      </figure>
      <h1 class="fz-15 m-0">About</h1>
    </div>

    <ul>
      <li class="fz-13" @click="RatingAndReviews = true">Rating & Reviews</li>
      <li class="fz-13" @click="FAQs = !FAQs">FAQs</li>
      <li class="fz-13 border-0">Legal</li>
    </ul>
    <rating-reviews v-show="RatingAndReviews" :RatingAndReviews="RatingAndReviews"></rating-reviews>
    <FAQs v-show="FAQs" :FAQs="FAQs"></FAQs>
  </div>
</template>

<script>
import { eventBus } from '@/main.js'

export default {
  props:['About'],
  data(){
    return{
      RatingAndReviews:false,
      FAQs:false,
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
     eventBus.$on('FAQsClose', (close) =>{
      this.FAQs = close
    })
  }
};
</script>

<style>
</style>