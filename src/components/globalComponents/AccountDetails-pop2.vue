<template>
  <div class="accountDetails-pop">
    <header>
      <div class="close-box">
        <button class="done-btn fz-30">×</button>
      </div>
      <div class="forms">
        <label class="fz-15" for="name">Enter your first name</label>
        <input class="fz-15" type="text" id="name" v-model="firstName" />
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
      firstName: ""
    };
  }
};
</script>

<style>
</style>