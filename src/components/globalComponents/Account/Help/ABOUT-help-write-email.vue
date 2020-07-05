<template>
  <div>
      <div class="AboutHelpWriteEmail" :class="{'AboutHelpWriteEmail-come' : AboutHelpWriteEmail}">
          <header class="container-ex" @click="AboutHelpWriteEmailClose">
            <img src="@/assets/icons/left-arrow-circle.svg" alt="">
          </header>
          <div class="AboutHelpWriteEmail-pop">
            <h1 class="fz-15 darkBlue-color">thank you!</h1>
            <p class="fz-13">Your message has been successfully sent.</p>
          </div>
          
      </div>
  </div>
</template>

<script>
import { eventBus } from '@/main.js'
export default {
props:['AboutHelpWriteEmail'],
methods:{
  AboutHelpWriteEmailClose(){
    eventBus.$emit('AboutHelpWriteEmailClose' , false)
  }
}
}
</script>

<style>

</style>