<template>
  <div class="payment-cmp-container" :class="{'payment-cmp-container-come':AllowCamera}">
    <div class="allow-camera-container">
    <header></header>
    <section>
        <div class="allow">
            <button class="btn-style-2 mr-2" @click="AllowCameraClose">Dont Allow</button>
            <button class="btn-style-2" @click="CameraOnShow">ok</button>
        </div>
    </section>
    <footer></footer>
    </div>
  </div>
</template>
<script>
import { eventBus } from '@/main.js'
export default {
    props:['AllowCamera'],
    methods:{
        AllowCameraClose(){
            eventBus.$emit('AllowCameraClose',false)
        },
        CameraOnShow(){
            eventBus.$emit('CameraOnShow',true)
        }
    }
};
</script>