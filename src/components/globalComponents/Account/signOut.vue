<template>
  <div>
    <div class="dark-cover" v-if="signOut">
        <figure @click="signOutClose">
            <img src="@/assets/icons/left-arrow-circle.png" alt="">
        </figure>
    </div>
    <div class="signOut p-2" :class="{'signOut-come':signOut}">
      <div class="p-3">
        <h3 class="fz-15 font-weight-bold">Sign Out</h3>
        <p class="fz-13 ">Are you sure you want to sign out of your account?</p>
      </div>
      <button class="submit-btn lightBlue-bg">SIGN OUT</button>
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