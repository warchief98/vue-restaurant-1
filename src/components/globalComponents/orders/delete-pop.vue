<template>
  <div>
    <div class="dark-cover" v-if="deletePop">
        <figure @click="deleteClose">
            <img src="@/assets/icons/left-arrow-circle.png" alt="">
        </figure>
    </div>
    <div class="signOut p-2" :class="{'signOut-come':deletePop}">
      <div class="p-3 text-left">
        <p class="fz-13 ">Are you sure you want to delete this items from your order history?</p>
      </div>
      <button class="submit-btn lightBlue-bg">DELETE</button>
    </div>
  </div>
</template>

<script>
import { eventBus } from '@/main.js'
export default {
  props: ["deletePop"],
  methods:{
      deleteClose(){
          eventBus.$emit('deleteClose', false)
      }
  }
};
</script>

<style>
</style>