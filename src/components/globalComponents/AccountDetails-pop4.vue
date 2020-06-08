<template>
  <div class="accountDetails-pop">
    <header>
      <div class="close-box">
        <button class="done-btn fz-30">×</button>
      </div>
      <div class="forms">
        <label class="fz-15" for="name">Enter your phone number</label>
        <input class="fz-15" type="number" id="name" v-model="PhoneNumber" />
      </div>
    </header>

    <footer>
      <button class="submit-btn lightBlue-bg">Continue</button>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      PhoneNumber: ""
    };
  }
};
</script>

<style>
</style>