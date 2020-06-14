<template>
    <div class="select-cmp-1"  @click="AddToBascketTrue">
      <figure>
        <img src="@/assets/images/select-menu-1.jpg" alt />
      </figure>
        <div>
          <h4 class="fz-15">Africans Fan</h4>
          <p class="gray-text-color fz-15">chicken Doner.  Served with salad, pita bread, and sauce.</p>
        </div>
        <div class="price-container">
            <span class="price fz-15">£8.85</span>
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