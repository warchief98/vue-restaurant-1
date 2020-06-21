<template>
  <div class="FAQs" :class="{'FAQs-come' : FAQs}">
    <!-- About head -->
    <div class="about-head-title">
      <figure @click="FAQsClose">
        <img src="@/assets/icons/right-arrow.png" alt />
      </figure>
      <h1 class="fz-15 m-0">Frequently Asked Questions</h1>
    </div>
    <div class="FAQs-container">
      <ul>
        <li>Covid-19</li>
        <li>About YMH Express</li>
        <li>Question About Order</li>
        <li>Anything Else?</li>
      </ul>
      <div>
        <div class="FAQs-box">
          <div class="FAQs-title-box">
            <h3 class="fz-15">Covid-19</h3>
          </div>
          <p>Lorem voluptatem totam ut doloribus quae et aliquam nobis, laboriosam blandielit saepe ducimus minus! Ab nesciunt soluta eligendi nisi obcaecati. Earum iste quaerat molestiae perspiciatis? Natus, neque incidunt.</p>
        </div>
        <div class="FAQs-box">
          <div class="FAQs-title-box">
            <h3 class="fz-15">About YMH Express</h3>
          </div>
          <p>Lorem voluptatem totam ut doloribus quae et aliquam nobis, laboriosam blandielit saepe ducimus minus! Ab nesciunt soluta eligendi nisi obcaecati. Earum iste quaerat molestiae perspiciatis? Natus, neque incidunt.</p>
        </div>
        <div class="FAQs-box">
          <div class="FAQs-title-box">
            <h3 class="fz-15">Question About Order</h3>
          </div>
          <p>Lorem voluptatem totam ut doloribus quae et aliquam nobis, laboriosam blandielit saepe ducimus minus! Ab nesciunt soluta eligendi nisi obcaecati. Earum iste quaerat molestiae perspiciatis? Natus, neque incidunt.</p>
        </div>
        <div class="FAQs-box">
          <div class="FAQs-title-box">
            <h3 class="fz-15">Anything Else?</h3>
          </div>
          <p>Lorem voluptatem totam ut doloribus quae et aliquam nobis, laboriosam blandielit saepe ducimus minus! Ab nesciunt soluta eligendi nisi obcaecati. Earum iste quaerat molestiae perspiciatis? Natus, neque incidunt.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from "@/main.js";

export default {
  props: ["FAQs"],
  methods: {
    FAQsClose() {
      eventBus.$emit("FAQsClose", false);
    }
  }
};
</script>

<style>
</style>