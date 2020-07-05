<template>
  <div class="createAccount" :class="{'createAccount-come' : createAccount4}">
    <div class="forms-box">
      <header class="about-head-title border-0">
        <figure @click="createAccountPasswordClose">
          <img src="@/assets/icons/left-arrow-circle.svg" alt />
        </figure>
        <h1 class="fz-15 m-0">Create Account</h1>
      </header>
      <div class="forms">
        <label class="fz-13 mb-3" for="Password">Password</label>
        <input class="fz-14 pl-3" type="password" placeholder="********" id="Password" v-model="Password" />
        <p class="fz-12 gray-text-color mt-2"> password must contain at least 8 character</p>
      </div>
    </div>

    <footer>
      <router-link to="/Landing">
      <button class="submit-btn lightBlue-bg fz-15">CREATE ACCOUNT</button>
      </router-link>
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