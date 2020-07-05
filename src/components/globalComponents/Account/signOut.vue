<template>
  <div>
    <div class="dark-cover" v-if="signOut">
        <figure @click="signOutClose">
            <img src="@/assets/icons/left-arrow-circle.svg" alt="">
        </figure>
    </div>
    <div class="signOut" :class="{'signOut-come':signOut}">
      <div class="p-3">
        <h3 class="fz-18 font-weight-bold">Sign Out</h3>
        <p class="fz-15">Are you sure you want to sign out of your account?</p>
      </div>
      <router-link to="/" class="w-100"><button class="submit-btn lightBlue-bg">SIGN OUT</button></router-link>
    </div>
  </div>
</template>

<script>
import { eventBus } from '@/main.js'
export default {
  props: ["signOut"],
  methods:{
      signOutClose(){
          eventBus.$emit('signOutClose', false)
      }
  }
};
</script>

<style>
</style>