<template>
  <div @click="AddToBascketTrue">
    <div class="select-cmp-1">
      <figure>
        <img src="@/assets/images/select-hand-craft-1.jpg" alt />
      </figure>
      <div>
        <h4 class="fz-15">Africans Fan</h4>
        <div class="price-container">
          <span class="price fz-15">£8.85</span>
          <span class="offer-price fz-15">£6.85</span>
        </div>
      </div>
      <!-- added number to cmp -->
      <span class="count-btn">1</span>
    </div>
  </div>
</template>
<script>
import { eventBus } from '@/main.js'
export default {
  methods:{
    AddToBascketTrue(){
      eventBus.$emit('AddToBascketTrue',true)
    }
  }
};
</script>