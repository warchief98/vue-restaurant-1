<template>
  <div class="invite" :class="{'invite-come': invite}">
    <header class="about-head-title">
      <figure @click="inviteClose">
        <img src="@/assets/icons/right-arrow.png" alt />
      </figure>
      <h1 class="fz-15 m-0">Invite Friends</h1>
    </header>
    <div class="invite-main container-fluid">
        <div class="invite-title">
             <h3>Eating together just tastes better</h3>
             <p>Invite your friends to YHM Express and arrange your lunch or dinner together!</p>
        </div>
        <button class="submit-btn">SEND INVITE</button>
       
    </div>
  </div>
</template>

<script>
import { eventBus } from '@/main.js'

export default {
  props: ["invite"],
  methods:{
      inviteClose(){
          eventBus.$emit('inviteClose' , false)
      }
  }
};
</script>

<style>
</style>