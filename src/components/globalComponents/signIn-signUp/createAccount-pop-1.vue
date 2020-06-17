<template>
  <div class="accountDetails-pop" :class="{'accountDetails-come' : createAccount1}">
    <div class="forms-box">
      <header class="about-head-title border-0">
        <figure @click="createAccountFirstNameClose">
          <img src="@/assets/icons/right-arrow.png" alt />
        </figure>
        <h1 class="fz-15 m-0">Create Account</h1>
      </header>
      <div class="forms">
        <label class="fz-15" for="FirstName">Enter your first name</label>
        <input class="fz-15" type="text" id="FirstName" v-model="firstName" />
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
  props: ["createAccount1"],
  data() {
    return {
      firstName: ""
    };
  },
  methods: {
    createAccountFirstNameClose() {
      eventBus.$emit("createAccountClose1", false);
    }
  }
};
</script>

<style>
</style>