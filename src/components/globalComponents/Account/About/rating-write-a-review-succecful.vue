<template>
  <div>
      <div class="AboutHelpWriteEmail" :class="{'AboutHelpWriteEmail-come' : RatingWriteReviewSuccecful}">
          <header class="container-ex" @click="RatingWriteReviewSuccecfulClose">
            <img src="@/assets/icons/left-arrow-circle.svg" alt="">
          </header>
          <div class="AboutHelpWriteEmail-pop">
            <h1 class="fz-15 darkBlue-color">thank you!</h1>
            <p class="fz-13">your review will be published on the your market hub express.</p>
          </div>
          
      </div>
  </div>
</template>

<script>
import { eventBus } from '@/main.js'
export default {
props:['RatingWriteReviewSuccecful'],
methods:{
  RatingWriteReviewSuccecfulClose(){
    eventBus.$emit('RatingWriteReviewSuccecfulClose' , false)
  }
}
}
</script>

<style>

</style>