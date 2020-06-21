<template>
  <div>
    <div class="dark-cover" v-if="sharePop">
      <figure @click="sharePopClose">
        <img src="@/assets/icons/left-arrow-circle.png" alt />
      </figure>
    </div>
    <div class="share-pop" :class="{'share-pop-come':sharePop}">
      <div class="share-box-head">
        <div class="share-box-app">
          <carousel :per-page="4" :mouse-drag="true" :touchDrag="true">
            <slide v-for="test11 in 8" :key="test11">
              <div class="figure-box">
                <div class="caption-img">
                  <img src="@/assets/images/hot-2.jpg" alt />
                </div>

                <figure>
                  <img src="@/assets/images/hot-1.jpg" alt />
                </figure>
              </div>
              <p>Zahra sis</p>
            </slide>
          </carousel>
        </div>
        <div class="share-box-app border-0 ">
          <carousel :per-page="4" :mouse-drag="true" :touchDrag="true">
            <slide v-for="test12 in 8" :key="test12">
              <div class="figure-box">
                <figure class="share-app-icons">
                  <img src="@/assets/images/hot-1.jpg" alt />
                </figure>
              </div>
              <p>whatsApp</p>
            </slide>
          </carousel>
        </div>
      </div>
      <div class="share-box-foot container-fluid">
          <div class="copy-link">
            <p class="fz-13">Copy</p>
            <button class="done-btn"><img src="@/assets/icons/copy.png" alt=""></button>
          </div>
            <div class="copy-link">
            <p class="fz-13">Add to Reading List</p>
            <button class="done-btn"><img src="@/assets/icons/add.png" alt=""></button>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from "@/main.js";

export default {
  props: ["sharePop"],
  methods: {
    sharePopClose() {
      eventBus.$emit("sharePopClose", false);
    }
  },
  components: {}
};
</script>

<style>
</style>