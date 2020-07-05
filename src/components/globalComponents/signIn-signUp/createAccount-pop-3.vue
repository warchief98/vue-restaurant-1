<template>
  <div class="accountDetails-pop" :class="{'accountDetails-come' : createAccount3}">
    <div class="forms-box">
      <header class="about-head-title border-0">
        <figure @click="createAccountEmailClose">
          <img src="@/assets/icons/left-arrow-circle.svg" alt />
        </figure>
        <h1 class="fz-15 m-0">Create Account</h1>
      </header>
      <div class="forms">
        <label class="fz-13 mb-3" for="Email">Email</label>
        <input class="fz-14 pl-3" type="email" id="Email" v-model="Email" placeholder="test@test.com" />
      </div>
    </div>

    <footer>
      <button class="submit-btn lightBlue-bg fz-15">CONTINUE</button>
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