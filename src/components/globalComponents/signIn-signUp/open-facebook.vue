<template>
  <div>
    <div class="dark-cover4" v-if="openFacebook"></div>
    <div class="open-facebook" :class="{'open-facebook-come' : openFacebook}">
        <h2 class="fz-15 text-left">Open this page in “Facebook”?</h2>
        <div class="facebook-btn-box">
            <button class="done-btn blue-med-color" @click="openFacebookClose">Cancel</button>
            <button class="done-btn blue-med-color fw-bold" @click="confirmationFacebook">Open</button>
        </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from '@/main.js'
export default {
  props: ["openFacebook"],
  methods:{
      openFacebookClose(){
          eventBus.$emit('openFacebookClose' , false);
      },
      confirmationFacebook(){
          eventBus.$emit('confirmFacebook' , true);
          eventBus.$emit('openFacebookClose' , false);
      }
  }
};
</script>

<style>
</style>