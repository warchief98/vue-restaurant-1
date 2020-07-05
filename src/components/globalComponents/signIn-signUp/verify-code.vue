<template>
  <div class="email" :class="{'email-come': verify}">
    <header class="about-head-title border-0">
      <figure @click="verifyClose">
        <img src="@/assets/icons/left-arrow-circle.svg" alt />
      </figure>
      <h1 class="fz-15 m-0">Enter Your Code</h1>
    </header>
    <div class="main-email">
      <div class="main-title m-0 fz-13">
        <p class="col-8 p-0 lh-16">We've sent your 6-digit code to +4415206077921</p>
        <figure>
          <img src="@/assets/icons/red-close.svg" alt="">
        </figure>
      </div>
      <input type="number" class="fz-14" id="verify-code" placeholder="code" />
      <button class="done-btn green-text-color fz-13 fw-bold">Resend code</button>
    </div>
    <button class="submit-btn lightBlue-bg fz-15" @click="createAccount = true">VERIFY</button>

    <create-account  v-if='createAccount' :account='createAccount'></create-account>
  </div>
</template>

<script>
import { eventBus } from '@/main.js'

export default {
  props: ["verify"],
  data(){
      return{
          Verfy:false,
          createAccount: false
      }
  }, 
  methods:{
      verifyClose(){
          eventBus.$emit('verifyClose', false)
      }
  },
  created(){
    eventBus.$on('createAccountClose', (close) =>{
      this.createAccount = close
    })
  }

};
</script>

<style>
</style>