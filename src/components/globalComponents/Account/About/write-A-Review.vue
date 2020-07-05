<template>
  <div>
    <div class="dark-cover2" v-if="writeReviews"></div>
    <div class="write-review" :class="{'write-review-come':writeReviews}">
      <!-- write a reviws head -->
      <div class="write-review-head" >
        <button class="done-btn fz-13" @click="writeReviewClose">Cancel</button>
        <h1 class="fz-18 m-0">Write a Reviews</h1>
        <button class="done-btn fz-13" @click="RatingWriteReviewSuccecfulOpen">Send</button>
      </div>
      <div class="container-fluid container-ex">
        <!-- rating -->
        <div class="main-rating">
          <p class="fz-15 gray-text-color">TAP A STAR TO RATE</p>
          <b-form-rating id="rating-inline" inline v-model="rating"></b-form-rating>
        </div>
        <div class="input-container">
          <input type="text" placeholder="Title" class="py-2 gray-text-color" />
          <textarea name id cols="30" rows="10" placeholder="Review(optional)" class="py-2 gray-text-color"></textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from "@/main.js";

export default {
  props: ["writeReviews"],
  data() {
    return {
      rating: ""
    };
  },
  methods: {
    writeReviewClose() {
      eventBus.$emit("writeReviewClose", false);
    },
    RatingWriteReviewSuccecfulOpen(){
      eventBus.$emit('RatingWriteReviewSuccecfulOpen' , true);
      eventBus.$emit("writeReviewClose", false);
    }
  }
};
</script>

<style>
</style>