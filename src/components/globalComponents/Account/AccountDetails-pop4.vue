<template>
  <div class="accountDetails-pop" :class="{'accountDetails-come' : AccountDetails4}">
    <header>
      <div class="close-box">
        <button class="done-btn fz-30" @click="AccountDetailsClose">×</button>
      </div>
      <div class="forms">
        <label class="fz-15" for="PhoneNumber">Enter your phone number</label>
        <input class="fz-15" type="number" id="PhoneNumber" v-model="PhoneNumber" />
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
  props:['AccountDetails4'],
  data() {
    return {
      PhoneNumber: ""
    };
  },
   methods:{
    AccountDetailsClose(){
      eventBus.$emit('AccountDetailsClose4' , false)
    }
  }
};
</script>

<style>
</style>