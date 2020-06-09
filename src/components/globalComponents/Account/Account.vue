<template>
  <div class="Account" :class="{'Account-come' : Account}">
    <!-- Account head -->
    <div class="back-arrow" @click="AccountClose">
      <img src="@/assets/icons/right-arrow.png" alt />
    </div>
    <div class="Account-head">
      <figure>
        <img src="@/assets/icons/userAvatar.png" alt />
      </figure>
      <section>
        <h3 class="fz-15 dark-text-color">John Doe</h3>
        <p class="fz-12 gray-text-color">john.doe@gmail.com</p>
      </section>
    </div>
    <!-- Account section -->
    <ul>
      <li @click="AccountDetails = !AccountDetails">Account Details</li>
      <li>Payment Methods</li>
      <li @click="About = !About">Adout</li>
      <li>Help</li>
      <li>Sing Out</li>
    </ul>
    <AccountDetails-pop :AccountDetails="AccountDetails"></AccountDetails-pop>
    <account-about :About="About"></account-about>
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
      About: false
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
  }
};
</script>

<style>
</style>