<template>
  <div>
    <div class="dark-cover2" v-if="WriteEmail"></div>
    <div class="write-review" :class="{'write-review-come':WriteEmail}">
      <!-- write a reviws head -->
      <div
        class="Account-head-title pt-3 pb-2"
        style="border-bottom:2px solid rgba(128, 128, 128, 0.400) "
      >
        <button class="done-btn fz-13" @click="writeEmailClose">Cancel</button>
        <h1 class="fz-15 m-0">Write a Reviews</h1>
        <button class="done-btn fz-13">Send</button>
      </div>
      <div class="container-fluid">      
        <div class="input-container">
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
    }
  }
};
</script>

<style>
</style>