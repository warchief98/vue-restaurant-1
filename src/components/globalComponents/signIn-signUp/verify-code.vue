<template>
  <div class="email" :class="{'email-come': verify}">
    <header class="about-head-title border-0">
      <figure @click="verifyClose">
        <img src="@/assets/icons/right-arrow.png" alt />
      </figure>
      <h1 class="fz-15 m-0">Enter Your Code</h1>
    </header>
    <div class="main-email">
      <div class="main-title fz-13">
        <p>We've sent your 6-digit code to +4415206077921</p>
        <figure>

        </figure>
      </div>
      <input type="number" class="fz-14" id="verify-code" placeholder="code" />
      <button class="done-btn lightBlue-color fz-12">Resend code</button>
    </div>
    <button class="submit-btn lightBlue-bg" @click="createAccount = true">VERIFY</button>

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