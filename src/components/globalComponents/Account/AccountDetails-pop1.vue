<template>
  <div>
    <div class="dark-cover" v-if="AccountDetails1"></div>
    <div class="pop-up-container" :class="{'pop-up-container-come':AccountDetails1}">
      <header>
        <h2 class="fz-16">Select A Photo</h2>
      </header>
      <div class="Account-select-box">
          <button class="select-btn">TAKE PHOTO</button>
          <button class="select-btn">CHOOSE PHOTO</button>
          <button class="select-btn" @click="AccountDetailsClose1">CANCEL</button>
      </div>
  </div>
  </div>
</template>

<script>
import { eventBus } from '@/main.js'

export default {
  props:['AccountDetails1'],
  data() {
    return {
  }
},
methods:{
  AccountDetailsClose1(){
    eventBus.$emit('AccountDetailsClose1',false)
  }
}
}
</script>

<style>
</style>