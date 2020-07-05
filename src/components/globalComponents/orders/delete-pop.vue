<template>
  <div>
    <div class="dark-cover" v-if="deletePop">
        <figure @click="deleteClose">
            <img src="@/assets/icons/left-arrow-circle.svg" alt="">
        </figure>
    </div>
    <div class="signOut delete-history" :class="{'delete-kistory-come':deletePop}">
      <div class="text-left">
        <p class="fz-20 lh-24">Are you sure you want to delete this items from your order history?</p>
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