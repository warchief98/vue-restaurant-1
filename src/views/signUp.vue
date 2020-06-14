<template>
  <div class="login container-fluid m-0 p-0">
    <div class="container-fluid m-0 p-0">
      <figure class="login-header-pic">
        <img src="@/assets/images/login-top-head.jpg" alt />
        <figcaption>Welcome</figcaption>
      </figure>
    </div>

    <div class="container-fluid login-btns">
      <h2 class="m-0 fz-20"> YMH Express</h2>
      <p class="fz-15 mb-3">Please sign up or log in with</p>
      <!-- facebook login -->
      <button class="login-btn blue-bg text-white my-2">
        <img src="@/assets/icons/facebook-icon.png" alt />
        Continue with Facebook
      </button>

      <div class="lined-title-signOut fz-10 my-3">

      </div>

    
    </div>
  </div>
</template>

<script>
export default {
  name:'signUp'
};
</script>

<style>
</style>