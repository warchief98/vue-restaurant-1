<template>
  <div class="login container-fluid m-0 p-0">
    <div class="container-fluid m-0 p-0">
      <figure class="login-header-pic">
        <img src="@/assets/images/login-top-head.jpg" alt />
        <figcaption>Welcome</figcaption>
      </figure>
    </div>

    <div class="container-fluid login-btns">
      <h2 class="m-0 fz-20">Sign into YHM Express</h2>
      <p class="fz-13">Please log in with</p>
      <!-- facebook login -->
      <button class="login-btn blue-bg text-white my-2">
        <img src="@/assets/icons/facebook-icon.png" alt />
        Continue with Facebook
      </button>
      <!-- 
        google login -->
      <button class="login-btn my-2">
        <img src="@/assets/icons/google-icon.png" style="margin: 0 5px 0 -20px;"/>
        Continue with google
      </button>

      <div class="lined-title fz-10 my-2">

      </div>

      <input class="fz-12 login-btn my-2 px-4" type="number" placeholder="+44 8520-66-77">

      <p class="fz-12 gray-text-color text-left my-2">Your phone number is kept confidentional and not shares with others</p>

      <!-- Continue btn -->
      <button class="continue-btn lightBlue-bg my-2 fz-15">Continue</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>