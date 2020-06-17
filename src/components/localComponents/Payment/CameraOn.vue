<template>
  <div class="payment-cmp-container" :class="{'payment-cmp-container-come':CameraOn}">
    <div class="allow-camera-container">
    <header @click="CameraOnClose"></header>
    <section>
        <div class="camera-on">
            <div class="blue-block blue-block1"></div>
            <div class="blue-block blue-block2"></div>
            <div class="blue-block blue-block3"></div>
            <div class="blue-block blue-block4"></div>
            <div class="camera-square">
                <p class="fz-13">Hold card here</p>
                <p class="fz-13">It will scan automatically</p>
            </div>
        </div>
    </section>
    <footer></footer>
    </div>
  </div>
</template>
<script>
import { eventBus } from '@/main.js'
export default {
    props:['CameraOn'],
    methods:{
        CameraOnClose(){
            eventBus.$emit('CameraOnClose',false)
        }
    }
};
</script>