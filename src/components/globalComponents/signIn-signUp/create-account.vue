<template>
  <div class="createAccount" :class="{'createAccount-come' : account }">
    <!-- Account head -->
    <header class="about-head-title border-0">
      <figure @click="createAccountClose">
        <img src="@/assets/icons/right-arrow.png" alt />
      </figure>
      <h1 class="fz-15 m-0">Create Account</h1>
    </header>

    <!-- Account section -->
    <div class="form-createAccount">
      <ul>
        <li @click="createAccount1 = !createAccount1">
          <div class="header">
            <h3 class="fz-15 m-0">First Name</h3>
          </div>
          <div class="information-user">
            <p class="text-left mt-1">{{firstName}}</p>
          </div>
        </li>
        <li @click="createAccount2 = !createAccount2">
          <div class="header">
            <h3 class="fz-15 m-0">Surname</h3>
          </div>
          <div class="information-user">
            <p class="text-left mt-1">{{Surname}}</p>
          </div>
        </li>

        <li @click="createAccount3 = !createAccount3">
          <div class="header">
            <h3 class="fz-15 m-0">Phone Number</h3>
          </div>
          <div class="information-user">
            <p class="text-left mt-1">{{PhoneNumber}}</p>
          </div>
        </li>
        <li @click="createAccount4 = !createAccount4">
          <div class="header">
            <h3 class="fz-15 m-0">Password</h3>
          </div>
          <div class="information-user">
            <p class="text-left mt-1"></p>
          </div>
        </li>
      </ul>
    </div>
    <create-account-pop-1 :createAccount1="createAccount1"></create-account-pop-1>
    <create-account-pop-2 :createAccount2="createAccount2"></create-account-pop-2>
    <create-account-pop-3 :createAccount3="createAccount3"></create-account-pop-3>
    <create-account-pop-4 :createAccount4="createAccount4"></create-account-pop-4>
  </div>
</template>

<script>
import { eventBus } from "@/main.js";

export default {
  props: ["account"],
  data() {
    return {
      firstName: "John",
      Surname: "Doe",
      PhoneNumber: "+44-8520-66-77",
      createAccount1: false,
      createAccount2: false,
      createAccount3: false,
      createAccount4: false
    };
  },
  methods: {
    createAccountClose() {
      eventBus.$emit("createAccountClose", false);
    }
  },
  created() {
    eventBus.$on("createAccountClose1", close => {
      this.createAccount1 = close;
    });

    eventBus.$on("createAccountClose2", close => {
      this.createAccount2 = close;
    });
    eventBus.$on("createAccountClose3", close => {
      this.createAccount3 = close;
    });
    eventBus.$on("createAccountClose4", close => {
      this.createAccount4 = close;
    });
  }
};
</script>

<style>
</style>