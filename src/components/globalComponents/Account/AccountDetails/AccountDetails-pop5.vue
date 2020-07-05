<template>
  <div>
    <div class="dark-cover" v-if="AccountDetails5">
        <figure @click="AccountDetailsClose5">
            <img src="@/assets/icons/left-arrow-circle.svg" alt="">
        </figure>
    </div>
    <div class="signOut p-2" :class="{'signOut-come':AccountDetails5}">
      <div class="p-3 px-4">
        <h3 class="fz-15 font-weight-bold">Go to Facebook to disconnect</h3>
        <p class="fz-13 ">Visit your Facebook setting to disconnect your account from <span class="fz-15 fw-bold ">YMH Express</span></p>
      </div>
      <button class="submit-btn lightBlue-bg" @click="AccountDetailsClose5">Go To Facebook</button>
    </div>
  </div>
</template>

<script>
import { eventBus } from '@/main.js'
export default {
  props: ["AccountDetails5"],
  methods:{
      AccountDetailsClose5(){
          eventBus.$emit('AccountDetailsClose5', false)
      }
  }
};
</script>

<style>
</style>