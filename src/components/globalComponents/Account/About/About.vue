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
      <li>Rating & Reviews</li>
      <li>FAQs</li>
      <li>Legal</li>
    </ul>
  </div>
</template>

<script>
import { eventBus } from '@/main.js'

export default {
  props:['About'],
  methods:{
    aboutClose(){
      eventBus.$emit('aboutClose',false)
    }
  }
};
</script>

<style>
</style>