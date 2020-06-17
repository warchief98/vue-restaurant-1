<template>
  <div class="accountDetails-pop" :class="{'accountDetails-come' : createAccount2}">
    <div class="forms-box">
      <header class="about-head-title border-0">
        <figure @click="createAccountSurnameClose">
          <img src="@/assets/icons/right-arrow.png" alt />
        </figure>
        <h1 class="fz-15 m-0">Create Account</h1>
      </header>
      <div class="forms">
        <label class="fz-15" for="Surname">Enter your surname</label>
        <input class="fz-15" type="text" id="Surname" v-model="Surname" />
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
  props: ["createAccount2"],
  data() {
    return {
      Surname: ""
    };
  },
  methods: {
    createAccountSurnameClose() {
      eventBus.$emit("createAccountClose2", false);
    }
  }
};
</script>

<style>
</style>