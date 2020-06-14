<template>
    <div>
        <div class="dark-cover" v-if="AddToBascket" @click="AddToBascketClose"></div>
        <div class="bascket-pop-up-container container-fluid py-2" :class="{'bascket-pop-up-container-come':AddToBascket}">
            <header>
                <span class="fz-20">Sandwich</span>
                <span class="gray-text-color fz-18">£8.85</span>
            </header>
            <section>
                <p class="gray-text-color fz-18 text-left">Tuna, tomato, pesto,tabasco</p>
            </section>
            <footer>
                <div class="counter">
                    <button @click="counter--">-</button>
                        <span>{{ counter }}</span>
                    <button @click="counter++">+</button>
                </div>
                    <button class="submit-btn lightBlue-bg">Add to Basket</button>
            </footer>
        </div>
    </div>
</template>
<script>
import { eventBus } from '@/main.js'
export default {
    props:['AddToBascket'],
    data(){
        return{
            counter:1,
        }
    },
    methods:{
        AddToBascketClose(){
            eventBus.$emit("AddToBascketClose",false)
        }
    }
}
</script>