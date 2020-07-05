<template>
  <div class="Account" :class="{'Account-come' : Account}">
    <!-- Account head -->
    <div class="back-arrow container-ex" @click="AccountClose">
      <img src="@/assets/icons/left-arrow-circle.svg" alt />
    </div>
    <div class="Account-main">
    <div class="Account-head">
      <figure>
        <img src="@/assets/icons/avatar.svg" alt />
      </figure>
      <section>
        <h3 class="fz-15 dark-text-color">John Doe</h3>
        <p class="fz-12 gray-text-color">john.doe@gmail.com</p>
      </section>
    </div>
    <!-- Account section -->
    <ul>
      <li @click="AccountDetails = !AccountDetails">Account Details</li>
      <router-link to="/Payment"><li class="border-bottom-0">Payment Methods</li></router-link>
      <li @click="About = !About">About</li>
      <li @click="Help = !Help">Help</li>
      <li @click="signOut= !signOut">Sing Out</li>
    </ul>
    </div>
    <AccountDetails-pop :AccountDetails="AccountDetails"></AccountDetails-pop>
    <account-about :About="About"></account-about>
    <Help :Help="Help"></Help>
    <signOut :signOut="signOut"></signOut>
  </div>
</template>

<script>
import { eventBus } from "@/main.js";

export default {
  props: ["Account"],
  name: "Account",
  data() {
    return {
      AccountDetails: false,
      About: false,
      signOut: false,
      Help: false,
    };
  },
  methods: {
    AccountClose() {
      eventBus.$emit("AccountClose", false);
    }
  },
  created() {
    eventBus.$on("AccountDetailsClose", (close) => {
      this.AccountDetails = close;
    });

    eventBus.$on("aboutClose", (close) => {
      this.About = close;
    });
    eventBus.$on("signOutClose", (close) => {
      this.signOut = close;
    });
     eventBus.$on("HelpClose", (close) => {
      this.Help = close;
    });
  }
};
</script>

<style>
</style>