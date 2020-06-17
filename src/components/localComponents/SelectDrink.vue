<template>
    <div class="select-cmp-2"  @click="AddToBascketTrue">
        <header class="py-3">
            <h2 class="fz-15">Coke</h2>
            <!-- <p class="gray-text-color fz-15">Lettuce, cucumber, onion, red wine vinegar</p> -->
        </header>
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