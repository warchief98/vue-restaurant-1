<template>
  <div class="Account-details" :class="{'Account-details-come' : AccountDetails }">
    <!-- Account head -->
    <div class="Account-head-title">
      <figure @click="AccountDetailsClose">
        <img src="@/assets/icons/right-arrow.png" alt />
      </figure>
      <h1 class="fz-18 m-0">Account Details</h1>
      <button class="done-btn">Done</button>
    </div>
    <div class="Account-head">
      <figure>
        <img src="@/assets/icons/userAvatar.png" alt />
        <!-- edit profile's picture btn -->
        <figcaption @click="AccountDetails1 = !AccountDetails1">
          <img src="@/assets/icons/google-icon.png" alt="">
        </figcaption>
      </figure>
      <section>
        <h3 class="fz-15 dark-text-color">John Doe</h3>
        <p class="fz-12 gray-text-color">john.doe@gmail.com</p>
      </section>
    </div>
    <!-- Account section -->
    <div class="form-Details">
      <ul>
        <li @click="AccountDetails2 = !AccountDetails2">
          <div class="header">
            <h3 class="fz-15 m-0">First Name</h3>
            <button class="done-btn fz-15">►</button>
          </div>
          <div class="information-user">
            <p>{{firstName}}</p>
          </div>
        </li>
        <li @click="AccountDetails3 = !AccountDetails3">
          <div class="header">
            <h3 class="fz-15 m-0">Surname</h3>
            <button class="done-btn fz-15">►</button>
          </div>
          <div class="information-user">
            <p>{{Surname}}</p>
          </div>
        </li>

        <li @click="AccountDetails4 = !AccountDetails4">
          <div class="header">
            <h3 class="fz-15 m-0">Phone Number</h3>
            <div class="d-flex justify-content-between">
              <p class>Verifry</p>
              <button class="done-btn fz-15">►</button>
            </div>
          </div>
          <div class="information-user">
            <p>{{PhoneNumber}}</p>
          </div>
        </li>
      </ul>
      <footer>
        <h3 class="fz-15 font-weight-normal">Social Account</h3>
        <ul>
          <li>
            <div>
              <img src="@/assets/icons/facebook-icon.png" alt />
              Facebook
            </div>
            <button class="disconnect fz-12">Disconnect</button>
          </li>
          <li>
            <div>
              <img src="@/assets/icons/google-icon.png" alt />
              Google
            </div>
            <p class="fz-10 m-0">Not Connected</p>
          </li>
        </ul>
      </footer>
    </div>
    <AccountDetails-pop1 :AccountDetails1="AccountDetails1"></AccountDetails-pop1>
    <AccountDetails-pop2 :AccountDetails2="AccountDetails2"></AccountDetails-pop2>
    <AccountDetails-pop3 :AccountDetails3="AccountDetails3"></AccountDetails-pop3>
    <AccountDetails-pop4 :AccountDetails4="AccountDetails4"></AccountDetails-pop4>
  </div>
</template>

<script>
import { eventBus } from "@/main.js";

export default {
  name: "Account",
  props: ["AccountDetails"],
  data() {
    return {
      firstName: "John",
      Surname: "Doe",
      PhoneNumber: "+44-8520-66-77",
      AccountDetails1: false,
      AccountDetails2: false,
      AccountDetails3: false,
      AccountDetails4: false
    };
  },
  methods:{
    AccountDetailsClose(){
      eventBus.$emit('AccountDetailsClose',false)
    }
    
  },
  created() {
    eventBus.$on("AccountDetailsClose1", close => {
      this.AccountDetails1 = close;
    });

    eventBus.$on("AccountDetailsClose2", close => {
      this.AccountDetails2 = close;
    });
    eventBus.$on("AccountDetailsClose3", close => {
      this.AccountDetails3 = close;
    });
    eventBus.$on("AccountDetailsClose4", close => {
      this.AccountDetails4 = close;
    });
  }
};
</script>

<style>
</style>