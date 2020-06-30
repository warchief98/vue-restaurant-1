<template>
  <div class="email" :class="{'email-come': password}">
    <header class="about-head-title border-0">
      <figure @click="passwordClose">
        <img src="@/assets/icons/right-arrow.png" alt />
      </figure>
      <h1 class="fz-15 m-0">Sign Up Or Log In With Email</h1>
    </header>
    <div class="main-email py-0">
      <label for="password" class="fz-14">Password</label>
      <input type="password" class="fz-14" id="password" placeholder="Password" />
      <button class="done-btn fz-12 mt-2" @click="forgetPassword = true">Forget Your Password?</button>
    </div>
    <!-- login btn  -->
    <router-link to="/Landing">
      <button class="submit-btn lightBlue-bg">LOGIN</button>
    </router-link>
    <!-- forget password component -->
    <forget-password v-if="forgetPassword" :forgetPassword="forgetPassword"></forget-password>
  </div>
</template>

<script>
import { eventBus } from '@/main.js'

export default {
  props: ["password"],
  data(){
      return{
          forgetPassword: false,
      }
  },
  methods:{
      passwordClose(){
          eventBus.$emit('passwordClose', false)
      }
  },
created(){
    eventBus.$on('forgetPasswordClose' , (close) =>{
        this.forgetPassword = close
    })
}
};
</script>
<style>

</style>