<template>
  <div class="login-facebook" :class="{'login-facebook-come' : loginFacebook ,'over-flow' : openFacebook}">
    <header class="d-flex justify-content-between align-items-center container-fluid">
      <div>
        <button class="done-btn blue-med-color" @click="loginFacebookClose">Cancel</button>
      </div>
      <div class="d-flex">
        <figure class="m-0">
          <img src="@/assets/icons/Lock.png" alt />
        </figure>
        <p class="fz-17 p-l-8 fw-bold">Facebook.com</p>
      </div>
      <div class="d-flex">
        <figure class="m-0">
          <img src="@/assets/icons/language.png" alt />
        </figure>
        <figure class="p-l-23 m-0">
          <img src="@/assets/icons/Refresh.png" alt />
        </figure>
      </div>
    </header>
    <div class="facebook-text-box">
      <h1 class="fz-20 fw-bold text-white">facebook</h1>
    </div>
    <div class="container-fluid facebook-box">
      <div class="d-flex justify-content-center facebook-header">
        <h2 class="fz-15 ">
          Log in to Facebook account to
          Connect to YMH Express
        </h2>
      </div>
      <div class=" facebook-main">
        <button class="submit-btn blue-bgc fz-15 height-38" @click="openFacebookTrue">Log In with the Facebook App</button>
        <p class="fz-12">Not now</p>
        <p class="fz-12 blue-color">Help Center - Impressum/AGB/NetzDG</p>
      </div>
      <div>
          <p class="gray-text-color fz-13">Facebook Inc.</p>
      </div>
    </div>
  
  </div>
</template>

<script>
import { eventBus } from '@/main.js'
export default {
  props: ["loginFacebook",'openFacebook'],
  data(){
    return{
    
    }
  },
  methods:{
    loginFacebookClose(){
      eventBus.$emit('loginFacebookClose' , false)
    },
    openFacebookTrue(){
      eventBus.$emit('openFacebookTrue' , true)
    }
  },
  created(){
    eventBus.$on('openFacebookClose', close =>{
      this.openFacebook = close;
    })
  }
};
</script>

<style>
</style>