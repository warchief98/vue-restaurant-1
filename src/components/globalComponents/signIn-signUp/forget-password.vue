<template>
  <div class="email" :class="{'email-come': forgetPassword}">
    <header class="about-head-title border-0">
      <figure @click="forgetPasswordClose">
        <img src="@/assets/icons/right-arrow.png" alt />
      </figure>
      <h1 class="fz-15 m-0">Forget Your Password?</h1>
    </header>
    <div class="main-email">
      <label for="email" class="fz-12 text-left">Enter Your Email and we'll send the instructions.</label>
      <input type="Email" class="fz-14" id="email" placeholder="Pegah@Gmail.Com" />
    </div>
    <button class="submit-btn lightBlue-bg">SUBMIT</button>
  </div>
</template>

<script>
import { eventBus } from '@/main.js'

export default {
  props: ["forgetPassword"],
  data(){
      return{
      }
  },
  methods:{
      forgetPasswordClose(){
          eventBus.$emit('forgetPasswordClose', false)
      }
  }
};
</script>
<style>

</style>