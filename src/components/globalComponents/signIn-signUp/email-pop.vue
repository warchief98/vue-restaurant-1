<template>
  <div class="email" :class="{'email-come': email}">
    <header class="about-head-title border-0">
      <figure @click="emailClose">
        <img src="@/assets/icons/right-arrow.png" alt />
      </figure>
      <h1 class="fz-15 m-0">Sign Up Or Log In With Email</h1>
    </header>
    <div class="main-email">
      <label for="email" class="fz-14">Email</label>
      <input type="email" class="fz-14" id="email" placeholder="Email" />
    </div>
    <button class="submit-btn lightBlue-bg" @click="verify = true">CONTINUE</button>
      <password-pop :password="password"></password-pop>
      <verify-code v-if="verify" :verify="verify"></verify-code>

  </div>
</template>

<script>
import { eventBus } from '@/main.js'

export default {
  props: ["email"],
  data(){
      return{
          password:false,
          verify: false,
      }
  }, 
  methods:{
      emailClose(){
          eventBus.$emit('emailClose', false)
      },  
  },
  created(){
      eventBus.$on('passwordClose', (close) =>{
          this.password = close
      }),
       eventBus.$on('verifyClose', (close) =>{
          this.verify = close
      })
  }

};
</script>

<style>
</style>