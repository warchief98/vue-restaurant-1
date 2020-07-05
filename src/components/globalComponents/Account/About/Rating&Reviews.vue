<template>
  <div
    class="about-rating"
    :class="{'about-rating-come':RatingAndReviews,'over-flow':writeReviews}"
  >
    <div class="about-rating-container">
      <!-- About head -->
      <div class="about-head-title">
        <figure @click="AboutRatingClose">
          <img src="@/assets/icons/left-arrow-circle.svg" alt />
        </figure>
        <h1 class="fz-18 m-0">Rating&Reviews</h1>
      </div>

      <!--------------- main-head ---------------->
      <div class="container container-ex">
        <div class="main-head">
          <div class="d-flex">
            <figure>
              <img src="@/assets/icons/YHM-Express-logo.png" alt />
            </figure>
            <section class="d-flex flex-column align-items-center justify-content-center">
              <h3 class="fz-53 fw-bold">4.5</h3>
              <p class="fz-15 fw-bold">out to 5</p>
            </section>
          </div>
          <p class="rating-view">12,562 Rating</p>
        </div>

        <!-- rating -->
        <div class="main-rating">
          <p class="fz-15 font-weight-normal">TAP A STAR TO RATE</p>
          <b-form-rating id="rating-inline" inline v-model="rating"></b-form-rating>
        </div>
        <!------- Write & review---->
        <div class="write-btn-box">
          <button class="done-btn fz-13" @click="openWriteReview">Write A Review</button>
          <button class="done-btn fz-13">App Support</button>
        </div>
        <!--------------------------->
        <div class="main-foot">
          <div class="sort-box">
            <button class="sort-btn">Sort By Most Helpful</button>
          </div>
          <div>
            <review v-for="test10 in 4" :key="test10"></review>
          </div>
        </div>
      </div>
    </div>
    <write-reviews :writeReviews="writeReviews"></write-reviews>
    <rating-write-a-review-succecful :RatingWriteReviewSuccecful="RatingWriteReviewSuccecful"></rating-write-a-review-succecful>
  </div>
</template>

<script>
import { eventBus } from "@/main.js";
import review from "@/components/localComponents/rating&Reviews-box.vue";

export default {
  props: ["RatingAndReviews"],
  data() {
    return {
      rating: "",
      writeReviews: false,
      RatingWriteReviewSuccecful: false,
    };
  },
  components: {
    review: review
  },
  methods: {
    AboutRatingClose() {
      eventBus.$emit("Rating&ReviewsClose", false);
    },
    openWriteReview() {
      this.writeReviews = true;
    }
  },
  created() {
    eventBus.$on("writeReviewClose", close => {
      this.writeReviews = close;
    });
    eventBus.$on('RatingWriteReviewSuccecfulOpen', open =>{
      this.RatingWriteReviewSuccecful = open;
    })
    eventBus.$on('RatingWriteReviewSuccecfulClose', close =>{
      this.RatingWriteReviewSuccecful = close;
    })
  }
};
</script>

<style>
</style>