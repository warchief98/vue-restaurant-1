<template>
  <div class="accountDetails-pop" :class="{'accountDetails-come' : AccountDetails2}">
    <header>
      <div class="close-box">
        <button class="done-btn fz-30" @click="AccountDetailsClose">×</button>
      </div>
      <div class="forms">
        <label class="fz-15" for="name">Enter your first name</label>
        <input class="fz-15" type="text" id="name" v-model="firstName" />
      </div>
    </header>

    <footer>
      <button class="submit-btn lightBlue-bg">Continue</button>
    </footer>
  </div>
</template>

<script>
import { eventBus } from '@/main.js'

export default {
  props:['AccountDetails2'],
  data() {
    return {
      firstName: ""
    };
  },
  methods:{
    AccountDetailsClose(){
      eventBus.$emit('AccountDetailsClose2' , false)
    }
  }
};
</script>

<style>
</style>