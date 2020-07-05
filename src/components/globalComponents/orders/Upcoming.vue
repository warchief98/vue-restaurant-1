<template>
  <div class="Upcoming container-fluid container-ex">
    <!-- invite friends -->
    <div class="Send-invite">
      <p class="fz-13 fw-bold text-left lh-16 mb-3">Invite your friends to YHM Express and arrange your lunch or dinner together!</p>
      <button class="done-btn"  @click="invite = true">SEND INVITE</button>
    </div>
    <div class="Upcoming-head">
      <div class="Upcoming-head-title">
        <h3 class="fz-15 fw-bold dark-text-color">Track Order #1234</h3>
        <p class="fz-13 gray-text-color">Wed, 18Sep</p>
      </div>
      <p class="fz-15 dark-text-color">LowerMarsh Market.Hungry Liama</p>
    </div>
    <div class="Upcoming-main">
      <ul>
        <li>
          <div class="Upcoming-main-box">
            <figure>
              <img src="@/assets/icons/Order-placed.svg" alt />
            </figure>
            <div class="Upcoming-main-title">
              <h3>Order Placed</h3>
              <p>We accept your order</p>
            </div>
          </div>
          <p class="gray-text-color fz-13">12:36</p>
        </li>

        <li>
          <div class="Upcoming-main-box">
            <figure>
              <img src="@/assets/icons/In-queue.svg" alt />
            </figure>
            <div class="Upcoming-main-title">
              <h3>In Queue</h3>
              <p>you are number 4 in queue</p>
            </div>
          </div>
          <p class="gray-text-color fz-13 active-tick">12:36</p>
        </li>

        <li class="Upcoming-inactive">
          <div class="Upcoming-main-box">
            <figure>
              <img src="@/assets/icons/Order-processed.svg" alt />
            </figure>
            <div class="Upcoming-main-title">
              <h3>Order Processed</h3>
              <p>It takes 20 minutes to ready</p>
            </div>
          </div>
        </li>

        <li class="Upcoming-inactive">
          <div class="Upcoming-main-box">
            <figure>
              <img src="@/assets/icons/Ready-to-pickup.svg" alt />
            </figure>
            <div class="Upcoming-main-title">
              <h3>Ready to Pickup</h3>
              <p>You can Pick up in 5 Minutes</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <!-- this component is for times that upcomming is empty,now will be disable -->
    <noOrderYet v-if="noOrderYet"></noOrderYet>
    <!-- invite friends component -->
    <inviteFriends :invite="invite"></inviteFriends>
  </div>
</template>

<script>
import { eventBus } from "@/main.js";
import noOrderYet from './no-order-yet.vue'

export default {
  data() {
    return {
      completeOrder: false,
      invite: false,
      noOrderYet:false
    };
  },
  components:{
    noOrderYet:noOrderYet
  },
  created() {
    eventBus.$on("inviteClose", close => {
      this.invite = close;
    });
  }
};
</script>

<style>
</style>