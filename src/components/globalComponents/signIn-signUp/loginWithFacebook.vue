<template>
  <div class="login-With-Facebook" :class="{'login-With-Facebook-come' : loginWithFacebook}">
    <header>
      <h3 class="fz-17 text-black fw-bold">Log in with facebook</h3>
    </header>
    <div class="container-scroll">
      <main>
        <div class="main-head">
          <h2 class="fz-15">
            <span class="fw-bold">YourMarketHube</span> will receive:
            your name and email address.
          </h2>
        </div>
        <div>
          <div class="main-body">
            <div class="d-flex align-items-center">
              <figure class="m-0 d-flex align-items-center pr-2">
                <img src="@/assets/icons/Lock.png" alt />
              </figure>
              <p class="fz-12 blue-color">This doesn’t let the app post to Facebook.</p>
            </div>
            <button class="submit-btn fz-14">Continue as Pegah</button>
            <button class="done-btn fz-17 text-dark" @click="loginWithFacebookClose">Cancel</button>
          </div>
        </div>
      </main>
      <footer>
        <p class="fz-14">
          YourmarketHub
          <span class="lightBlue-color">Privacy Policy</span> and
          <span class="lightBlue-color">Term</span>
        </p>
      </footer>
    </div>
  </div>
</template>

<script>
import { eventBus } from "@/main.js";
export default {
  props: ["loginWithFacebook"],
  methods: {
    loginWithFacebookClose() {
      eventBus.$emit("loginWithFacebookClose", false);
      eventBus.$emit("loginFacebookClose", false);
    }
  }
};
</script>

<style>
</style>