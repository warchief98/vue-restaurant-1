<template>
  <div class="Account">
    <!-- Account head -->
    <div class="back-arrow">
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
      <li>
        <router-link to="/Account/AccountDetails">Account Details</router-link>
      </li>
      <li>Payment Methods</li>
      <li>Adout</li>
      <li>Help</li>
      <li>Sing Out</li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'Account'
};
</script>

<style>
</style>