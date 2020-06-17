<template>
  <div class="accountDetails-pop" :class="{'accountDetails-come' : createAccount3}">
    <div class="forms-box">
      <header class="about-head-title border-0">
        <figure @click="createAccountEmailClose">
          <img src="@/assets/icons/right-arrow.png" alt />
        </figure>
        <h1 class="fz-15 m-0">Create Account</h1>
      </header>
      <div class="forms">
        <label class="fz-15" for="Email">Enter your email</label>
        <input class="fz-15" type="email" id="Email" v-model="Email" />
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
  props: ["createAccount3"],
  data() {
    return {
      Email: ""
    };
  },
  methods: {
    createAccountEmailClose() {
      eventBus.$emit("createAccountClose3", false);
    }
  }
};
</script>

<style>
</style>