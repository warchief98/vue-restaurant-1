<template>
  <div class="login container-fluid position-relative container-ex m-0 p-0">
    <div class="container-fluid container-ex m-0 p-0">
      <figure class="login-header-pic">
        <img src="@/assets/images/login-top-head.jpg" alt />
        <figcaption>Welcome</figcaption>
      </figure>
    </div>

    <div class="container-fluid container-ex container-ex login-btns">
      <h2 class="m-0 fz-20 fw-bold">YMH Express</h2>
      <p class="fz-13 mb-3">Please sign up or log in with</p>
      <!-- facebook login -->
      <button class="login-btn blue-bg text-white my-2" @click="facebookPermit = true">
        <img src="@/assets/icons/facebook-icon.png" alt />
        Continue with Facebook
      </button>
      <div class="lined-title-signOut fz-12 my-3"></div>
      <button class="email-login-btn my-2" @click="logInAndSignUp = true">Continue with E-mail</button>
      <p class="fz-10 text-left lh-11 mt-4">
        By continuing you agree to our T&Cs. Please also check out our privacy policy.
        We use your data to offer you a personalised experience and to better
        understand and improve our services.For more information
        <span
          class="lightBlue-color"
        >see here</span>.
      </p>
    </div>
    <email-pop :email="logInAndSignUp"></email-pop>
    <facebook-permit :facebookPermit="facebookPermit"></facebook-permit>
    <login-facebook :loginFacebook="loginFacebook" :openFacebook="openFacebook"></login-facebook>
    <open-facebook :openFacebook="openFacebook"></open-facebook>
    <confirmation-facebook :confirmFacebook="confirmFacebook"></confirmation-facebook>
    <login-with-facebook :loginWithFacebook="loginWithFacebook"></login-with-facebook>
  </div>
</template>

<script>
import { eventBus } from "@/main.js";

export default {
  name: "signUp",
  data() {
    return {
      logInAndSignUp: false,
      facebookPermit: false,
      loginFacebook: false,
      openFacebook: false,
      confirmFacebook: false,
      loginWithFacebook: false
    };
  },
  created() {
    eventBus.$on("emailClose", close => {
      this.logInAndSignUp = close;
    });
    eventBus.$on("facebookPermitClose", close => {
      this.facebookPermit = close;
    });
    eventBus.$on("openLoginFacebook", open => {
      this.loginFacebook = open;
    });
    eventBus.$on("openFacebookTrue", open => {
      this.openFacebook = open;
    });
    eventBus.$on("facebookPermitClose", close => {
      this.facebookPermit = close;
    });
    eventBus.$on("loginFacebookClose", close => {
      this.loginFacebook = close;
    });
    eventBus.$on("confirmFacebook", open => {
      this.confirmFacebook = open;
    });
    eventBus.$on("confirmationFacebookClose", close => {
      this.confirmFacebook = close;
    });
    eventBus.$on("openFacebookClose", close => {
      this.openFacebook = close;
    });
    eventBus.$on("loginWithFacebookOpen", open => {
      this.loginWithFacebook = open;
    });
    eventBus.$on("loginWithFacebookClose", close => {
      this.loginWithFacebook = close;
    });
  }
};
</script>

<style>
</style>