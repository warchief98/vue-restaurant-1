<template>
  <div class="accountDetails-pop" :class="{'accountDetails-come' : AccountDetails3}">
    <header>
      <div class="close-box">
        <button class="done-btn fz-30" @click="AccountDetailsClose">×</button>
      </div>
      <div class="forms">
        <label class="fz-15" for="Surname">Enter your surname</label>
        <input class="fz-15" type="text" id="Surname" v-model="Surname" />
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
  props:['AccountDetails3'],
  data() {
    return {
      Surname: ""
    };
  },
  methods:{
    AccountDetailsClose(){
      eventBus.$emit('AccountDetailsClose3' , false)
    }
  }
};
</script>

<style>
</style>