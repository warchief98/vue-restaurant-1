<template>
  <div class="Upcoming container-fluid">
    <div class="Send-invite">
      <p>Invite your friends to YHM Express and arrange your lunch or dinner together!</p>
      <button class="done-btn" @click="invite = true">SEND INVITE</button>
    </div>
    <div class="Upcoming-head">
      <div class="Upcoming-head-title">
        <h3>Track Order</h3>
        <p>Wed, 18Sep</p>
      </div>
      <p>LowerMarsh Market.Hungry Liama</p>
    </div>
    <div class="Upcoming-main">
      <ul>
        <li>
          <div class="Upcoming-main-box">
            <figure>
              <img src="@/assets/icons/Order-placed.png" alt />
            </figure>
            <div class="Upcoming-main-title">
              <h3>Order Placed</h3>
              <p>We accept your order</p>
            </div>
          </div>
          <p>12:36</p>
          <span class="tick-container">
            <img src="@/assets/icons/tick-icon.png" alt />
          </span>
        </li>

        <li>
          <div class="Upcoming-main-box">
            <figure>
              <img src="@/assets/icons/In-queue.png" alt />
            </figure>
            <div class="Upcoming-main-title">
              <h3>In Queue</h3>
              <p>you are number 4 in queue</p>
            </div>
          </div>
          <p>12:36</p>
          <span class="tick-container">
            <img src="@/assets/icons/tick-icon.png" alt />
          </span>
        </li>

        <li>
          <div class="Upcoming-main-box">
            <figure>
              <img src="@/assets/icons/Order-processed.png" alt />
            </figure>
            <div class="Upcoming-main-title">
              <h3>Order Processed</h3>
              <p>It takes 20 minutes to ready</p>
            </div>
          </div>
          <p>13:15</p>
          <!-- active-tick class help to change tick style(tick-container) to active tick style -->
          <span class="tick-container active-tick">
            <img src="@/assets/icons/tick-icon.png" alt />
          </span>
        </li>

        <li class="Upcoming-inactive">
          <div class="Upcoming-main-box">
            <figure>
              <img src="@/assets/icons/Ready-to-pickup.png" alt />
            </figure>
            <div class="Upcoming-main-title">
              <h3>Ready to Pickup</h3>
              <p>You can Pick up in 5 Minutes</p>
            </div>
          </div>
          <span class="tick-container">
            <img src="@/assets/icons/tick-icon.png" alt />
          </span>
        </li>

        <li class="Upcoming-inactive">
          <div class="Upcoming-main-box">
            <figure>
              <img src="@/assets/icons/locations.png" alt />
            </figure>
            <div class="Upcoming-main-title">
              <h3>Where Are You?</h3>
              <p>We are Waiting for you</p>
            </div>
          </div>
          <span class="tick-container">
            <img src="@/assets/icons/tick-icon.png" alt />
          </span>
        </li>

        <li class="Upcoming-inactive">
          <div class="Upcoming-main-box">
            <figure>
              <img src="@/assets/icons/complete-the-order.png" alt />
            </figure>
            <div class="Upcoming-main-title">
              <h3>Bon appetite</h3>
              <p>Your order is complete</p>
            </div>
          </div>
          <span class="tick-container">
            <img src="@/assets/icons/tick-icon.png" alt />
          </span>
        </li>
      </ul>
    </div>
    <footer v-if="completeOrder">
      <button class="submit-btn">Thanks for Trusting Us</button>
    </footer>
    <inviteFriends :invite="invite"></inviteFriends>
  </div>
</template>

<script>
import { eventBus } from "@/main.js";

export default {
  data() {
    return {
      completeOrder: false,
      invite: false
    };
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