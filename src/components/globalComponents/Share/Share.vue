<template>
  <div class="Share" :class="{'Share-come' : Share}">
    <div class="about-head-title">
      <figure @click="ShareClose">
        <img src="@/assets/icons/left-arrow-circle.svg" alt />
      </figure>
      <h1 class="fz-15 m-0">Share</h1>
    </div>
    <div class="container-fluid container-ex share-box-container">
      <div class="Share-box">
        <div class="Share-head">
          <h1>share that YMH Express</h1>
          <p>Providing Meals Your friends by invite them to use YMH Express</p>
        </div>

        <div class="Share-foot">
          <h5 c>SEND INVATE</h5>
          <button class="submit-btn lightBlue-bg fz-15" @click="sharePop = true">SHARE</button>
          <h5>OR COPY YOUR LINK</h5>
          <div class="copy-link">
            <p class="fz-13">{{ url }}</p>
            <button class="done-btn">COPY</button>
          </div>
        </div>
      </div>
    </div>
    <share-pop
     :sharePop="sharePop"></share-pop>
  </div>
</template>

<script>
import { eventBus } from "@/main.js";

export default {
  props: ["Share"],
  data() {
    return {
      sharePop: false,
      url: "https://www.ymhexpress.com"
    };
  },
  methods: {
    ShareClose() {
      eventBus.$emit("ShareClose", false);
    }
  },
  created() {
    eventBus.$on("sharePopClose", close => {
      this.sharePop = close;
    });
  }
};
</script>

<style>
</style>