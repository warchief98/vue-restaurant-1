<template>
  <div>
    <div class="dark-cover2" v-if="WriteEmail"></div>
    <div class="write-review" :class="{'write-review-come':WriteEmail}">
      <!-- write a reviws head -->
      <div
        class="write-review-head pt-3 pb-2">
        <button class="done-btn fz-13 lightBlue-color" @click="writeEmailClose">Cancel</button>
        <h1 class="fz-15 m-0">Write a Reviews</h1>
        <button class="done-btn fz-13 lightBlue-color" @click="AboutHelpWriteEmail">Send</button>
      </div>
      <div class="container-fluid container-ex">      
        <div class="input-container mt-58px">
          <input type="text" placeholder="Title" class="py-2" />
          <textarea name id cols="30" rows="10" placeholder="Review(optional)" class="py-2"></textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from "@/main.js";

export default {
  props: ["WriteEmail"],
  data() {
    return {
    };
  },
  methods: {
    writeEmailClose() {
      eventBus.$emit("writeEmailClose", false);
    },
    AboutHelpWriteEmail(){
      eventBus.$emit('AboutHelpWriteEmail', true);
      eventBus.$emit("writeEmailClose", false);
    }
  }
};
</script>

<style>
</style>