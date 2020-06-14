<template>
  <div
    class="about-rating"
    :class="{'about-rating-come':RatingAndReviews,'over-flow':writeReviews}"
  >
    <div class="about-rating-container">
      <!-- About head -->
      <div class="about-head-title">
        <figure @click="AboutRatingClose">
          <img src="@/assets/icons/left-arrow-circle.png" alt />
        </figure>
        <h1 class="fz-18 m-0">Rating&Reviews</h1>
      </div>

      <!--------------- main-head ---------------->
      <div class="container">
        <div class="main-head">
          <div class="d-flex">
            <figure>
              <img src="@/assets/icons/userAvatar.png" alt />
            </figure>
            <section>
              <h3 class="fz-30">4.5</h3>
              <p class="fz-12">out to 5</p>
            </section>
          </div>
          <p class="rating-view">12,562 Rating</p>
        </div>

        <!-- rating -->
        <div class="main-rating">
          <p>TAP A STAR TO RATE</p>
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
            <review v-for="test in 4" :key="test"></review>
          </div>
        </div>
      </div>
    </div>
    <write-reviews v-if="writeReviews " :writeReviews="writeReviews"></write-reviews>
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
      writeReviews: false
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
  }
};
</script>

<style>
</style>