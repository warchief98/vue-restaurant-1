<template>
  <div class="createAccount" :class="{'createAccount-come' : createAccount4}">
    <div class="forms-box">
      <header class="about-head-title border-0">
        <figure @click="createAccountPasswordClose">
          <img src="@/assets/icons/right-arrow.png" alt />
        </figure>
        <h1 class="fz-15 m-0">Create Account</h1>
      </header>
      <div class="forms">
        <label class="fz-15" for="Password">Enter your Password</label>
        <input class="fz-15" type="password" id="Password" v-model="Password" />
      </div>
    </div>

    <footer>
      <button class="submit-btn lightBlue-bg">Continue</button>
    </footer>
  </div>
</template>

<script>
import { eventBus } from "@/main.js";

export default {
  props: ["createAccount4"],
  data() {
    return {
      Password: ""
    };
  },
  methods: {
    createAccountPasswordClose() {
      eventBus.$emit("createAccountClose4", false);
    }
  }
};
</script>

<style>
</style>