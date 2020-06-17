<template>
  <div class="bascket-order">
    <div>
      <button class="edit-order" v-if="editOrder" @click="editOrderFunc"></button>
      <span class="gold-color fz-15 fw-bold">1x</span>
      <span class="ml-4 fz-15">Sandwich</span>
    </div>
    <div>
      <span class="price gray-text-color fz-15">£8.85</span>
      <button class="fz-15 order-delete" v-if="deleteOrder">Delete</button>
    </div>
  </div>
</template>
<script>
import { eventBus } from '@/main.js'
export default {
    props:['editOrder','deleteOrder'],
    data(){
        return{

        }
    },
    methods:{
        editOrderFunc(){
            eventBus.$emit('deleteOrderShow',true);
            eventBus.$emit('editOrderHide',false);
        }
    }
}
</script>