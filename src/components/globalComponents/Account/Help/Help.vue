<template>
  <div class="FAQs" :class="{'FAQs-come' : Help,'over-flow':WriteEmail}">
    <!-- About head -->
    <div class="about-head-title">
      <figure @click="HelpClose">
        <img src="@/assets/icons/left-arrow-circle.svg" alt />
      </figure>
      <h1 class="fz-15 m-0">Help</h1>
    </div>
    <div class="FAQs-container">
      <ul>
        <li class="dark-text-color fz-13">Help With An Order</li>
        <li class="dark-text-color fz-13">Help With Payment Methods</li>
        <li class="dark-text-color fz-13">Anything Else?</li>
      </ul>
      <div>
        <div class="FAQs-box">
          <div class="FAQs-title-box">
            <h3 class="fz-15">Help With An Order</h3>
          </div>
          <p class="pb-0">Lorem voluptatem totam ut doloribus quae et aliquam nobis, laboriosam blandielit saepe ducimus minus! Ab nesciunt soluta eligendi nisi obcaecati. Earum iste quaerat molestiae perspiciatis? Natus, neque incidunt.Lorem voluptatem totam ut doloribus quae et aliquam nobis, laboriosam blandielit saepe ducimus minus! Ab nesciunt soluta eligendi nisi obcaecati. Earum iste quaerat molestiae perspiciatis? Natus, neque incidunt.</p>
          <div class="btn-box">
            <button class="done-btn fz-12" @click="WriteEmail = !WriteEmail">Write Email</button>
          </div>
        </div>
        <div class="FAQs-box">
          <div class="FAQs-title-box">
            <h3 class="fz-15">Help With Payment Methods</h3>
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
    <WriteEmail  :WriteEmail="WriteEmail"></WriteEmail>
    <About-Help-Write-Email :AboutHelpWriteEmail="AboutHelpWriteEmail"></About-Help-Write-Email>
  </div>
</template>

<script>
import { eventBus } from "@/main.js";

export default {
  props: ["Help"],
  data() {
    return {
      WriteEmail: false,
      AboutHelpWriteEmail: false,
    };
  },
  methods: {
    HelpClose() {
      eventBus.$emit("HelpClose", false);
    }
  },
  created() {
    eventBus.$on("writeEmailClose", close => {
      this.WriteEmail = close;
    });
    eventBus.$on("AboutHelpWriteEmail", open =>{
      this.AboutHelpWriteEmail = open;
    })
    eventBus.$on('AboutHelpWriteEmailClose', close =>{
      this.AboutHelpWriteEmail = close;
    })
  }
};
</script>

<style>
</style>