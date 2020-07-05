<template>
  <div class="succesful-error-container" :class="{'succesful-error-container-show':succesful}">
    <router-link to="/orders">
      <div class="dark-cover" v-if="succesful" @click="succesfulHide"></div>
      <div class="succesful-error" :class="{'succesful-error-come':succesful}">
        <figure>
          <img src="@/assets/icons/succesful.png" alt />
        </figure>
        <p class="fz-20 text-white">payment succesful</p>
      </div>
    </router-link>
  </div>
</template>

<script>
import { eventBus } from "@/main.js";
export default {
  props: ["succesful"],
  methods: {
    succesfulHide() {
      eventBus.$emit("succesfulHide", false);
    }
  }
};
</script>

<style>
</style>