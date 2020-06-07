<template>
  <div class="menu">
      <!-- menu head -->
    <div class="menu-head darkBlue-bg">
      <figure>
        <img src="@/assets/icons/userAvatar.png" alt />
      </figure>
      <section>
        <h3 class="fz-15">John Doe</h3>
        <p class="fz-12">john.doe@gmail.com</p>
      </section>
    </div>
    <!-- menu section -->
    <ul class="container">
      <li>
        <img src="@/assets/icons/dietary-icon.png" alt />
        DIETARY
      </li>
      <li>
        <img src="@/assets/icons/sorting-icon.png" alt />
        SORTING
      </li>
      <li>
        <router-link to="/Account">
        <img src="@/assets/icons/account-icon.png" alt />
        ACCOUNT
        </router-link>
      </li>
      <li>
        <img src="@/assets/icons/order-icon.png" alt />
        ORDER HISTORY
      </li>
      <li>
        <img src="@/assets/icons/market-icon.png" alt />
        MARKET
      </li>
      <li>
        <img src="@/assets/icons/share-icon.png" alt />
        SHARE
      </li>
    </ul>

    <!-- ________________________________pop up component import -->
    <!-- dietary pp up -->
    <!-- <dietary-pop></dietary-pop> -->
    <!-- sorting-1 pop up -->
    <!-- <sorting-pop-1></sorting-pop-1> -->
    <!-- sorting-2 pop up -->
    <sorting-pop-2></sorting-pop-2>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>