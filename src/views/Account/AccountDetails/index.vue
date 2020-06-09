<template>
  <div class="Account-details">
    <!-- Account head -->
    <div class="Account-head-title">
      <img src="@/assets/icons/right-arrow.png" alt />
      <h1 class="fz-18 m-0">Account Details</h1>
      <button class="done-btn">Done</button>
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
    <div class="form-Details">
      <ul>
        <li>
          <div class="header">
            <h3 class="fz-15 m-0">First Name</h3>
            <button class="done-btn fz-15">►</button>
          </div>
          <p class="information-user">{{firstName}}</p>
        </li>
        <li>
          <div class="header">
            <h3 class="fz-15 m-0">Surname</h3>
            <button class="done-btn fz-15">►</button>
          </div>
          <p class="information-user">{{Surname}}</p>
        </li>

        <li>
          <div class="header">
            <h3 class="fz-15 m-0">Phone Number</h3>
            <div class="d-flex justify-content-between">
              <p class="">Verifry</p>
              <button class="done-btn fz-15">►</button>
            </div>
          </div>
          <p class="information-user">{{PhoneNumber}}</p>
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
    <!-- <AccountDetails-pop1></AccountDetails-pop1> -->
    <!-- <AccountDetails-pop2></AccountDetails-pop2> -->
    <!-- <AccountDetails-pop3></AccountDetails-pop3> -->
    <!-- <AccountDetails-pop4></AccountDetails-pop4> -->

  </div>
</template>

<script>
export default {
  name: "Account",
  data() {
    return {
      firstName: "John",
      Surname: "Doe",
      PhoneNumber: "+44-8520-66-77"
    };
  }
};
</script>

<style>
</style>