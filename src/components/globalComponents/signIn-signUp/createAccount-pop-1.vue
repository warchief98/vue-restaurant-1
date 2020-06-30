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
        <label class="fz-13 mb-3" for="FirstName">First Name</label>
        <input class="fz-14 pl-3" type="text" id="FirstName" v-model="firstName" placeholder="John" />
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