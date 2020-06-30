<template>
  <div>
      <div class="dark-cover3" v-if="facebookPermit"></div>
      <div class="facebook-permit" :class="{'facebook-permit-come' : facebookPermit}">
          <h2 class="fz-15 fw-bold text-left p-x-19">“YMH Express”  wants to use “facebook.com” to sing in</h2>
          <p class="fz-13 container-ex text-justify">This allows the app and website to share information about you.</p>
          <footer>
              <button class="fz-17" @click="facebookPermitClose">Cancel</button>
              <button class="fz-17" @click="openLoginFacebook">Continue</button>
          </footer>
      </div>

  </div>
</template>

<script>
import { eventBus } from '@/main.js'
export default {
props:['facebookPermit','loginFacebook'],
methods:{
    facebookPermitClose(){
        eventBus.$emit('facebookPermitClose' , false)
    },
    openLoginFacebook(){
        eventBus.$emit('openLoginFacebook' , true)
        eventBus.$emit('facebookPermitClose' , false)
    }
}
}
</script>

<style>

</style>