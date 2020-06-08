<template>
  <div class="accountDetails-pop">
    <header>
      <div class="close-box">
        <button class="done-btn fz-30">×</button>
      </div>
      <div class="forms">
        <label class="fz-15" for="name">Enter your surname</label>
        <input class="fz-15" type="text" id="name" v-model="Surname" />
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
      surname: ""
    };
  }
};
</script>

<style>
</style>