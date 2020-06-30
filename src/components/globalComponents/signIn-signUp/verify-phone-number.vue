<template>
  <div class="email" :class="{'email-come': verifyPhoneNumber}">
    <header class="about-head-title border-0">
      <figure @click="verifyPhoneNumberClose">
        <img src="@/assets/icons/right-arrow.png" alt />
      </figure>
      <h1 class="fz-15 m-0">Verify Phone Number</h1>
    </header>
    <div class="main-email">
      <div class="main-title m-0">
        <p class="m-b-21 fz-13 lh-16">
          We need to send 6-digit code to your phone to help.
        </p>
      </div>
      <input type="number" class="fz-14 m-0" id="verify-code" placeholder="+44 xxx xxxx xxxx" />
      <button class="done-btn text-danger m-t-8 fz-13">invalid phone number</button>
    </div>
    <button class="submit-btn lightBlue-bg fz-15" @click="Verify = true">CONTINUE</button>

    <verify-code :verify="Verify"></verify-code>
  </div>
</template>

<script>
import { eventBus } from "@/main.js";

export default {
  props: ["verifyPhoneNumber"],
  data() {
    return {
      Verify: false
    };
  },
  methods: {
    verifyPhoneNumberClose() {
      eventBus.$emit("verifyPhoneNumberClose", false);
    }
  },
  created() {
    eventBus.$on("verifyClose", close => {
      this.Verify = close;
    });
  }
};
</script>

<style>
</style>