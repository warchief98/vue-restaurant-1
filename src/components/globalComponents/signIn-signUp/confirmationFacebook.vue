<template>
  <div>
    <div class="dark-cover5" v-if="confirmFacebook"></div>
    <div class="confirmation-facebook" :class="{'confirmation-facebook-come' : confirmFacebook}">
      <h2 class="fz-17 fw-bold text-center p-x-19">
        “Facebook” wants to open
        “YMH Express”
      </h2>

      <footer>
        <button class="fz-17 text-primary" @click="confirmationFacebookClose">Cancel</button>
        <button class="fz-17 fw-bold text-primary"  @click="loginWithFacebookOpen">Open</button>
      </footer>
    </div>
  </div>
</template>

<script>
import { eventBus } from "@/main.js"
export default {
  props: ["confirmFacebook"],
  methods:{
      confirmationFacebookClose(){
          eventBus.$emit('confirmationFacebookClose' , false);
      },
      loginWithFacebookOpen(){
          eventBus.$emit('loginWithFacebookOpen' , true);
          eventBus.$emit('confirmationFacebookClose' , false);
      }
  }
};
</script>

<style>
</style>