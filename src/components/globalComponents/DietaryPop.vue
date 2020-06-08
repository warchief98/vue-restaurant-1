<template>
  <div>
    <div class="dark-cover" v-if="dietaryShow"></div>
    <div class="pop-up-container" :class="{'pop-up-container-come':dietaryShow}">
      <header>
        <h2 class="fz-18">Dietary</h2>
      </header>
      <ul>
        <li>
          <label for="vegetarian">Vegetarian</label>
          <input type="radio" name="selectDiet" value="vegetarian" id="vegetarian" v-model="dietValue"/>
        </li>

        <li>
          <label for="vegan">Vegan</label>
          <input type="radio" name="selectDiet" value="vegan" id="vegan"  v-model="dietValue"/>
        </li>

        <li>
          <label for="gluten">Gluten free</label>
          <input type="radio" name="selectDiet" value="gluten" id="gluten"  v-model="dietValue"/>
        </li>

        <li>
          <label for="kosher">Kosher</label>
          <input type="radio" name="selectDiet" value="kosher" id="kosher"  v-model="dietValue"/>
        </li>

        <li>
          <label for="halal">Halal</label>
          <input type="radio" name="selectDiet" value="halal" id="halal"  v-model="dietValue"/>
        </li>
      </ul>
      <footer class="container-fluid">
        <button class="submit-btn lightBlue-bg mb-1" @click="dietaryClose">Apply</button>
      </footer>
    </div>
  </div>
</template>

<script>
import { eventBus } from '@/main.js';

export default {
  props:['dietaryShow'],
    data(){
        return{
            dietValue:"",
        }
    },
    methods:{
      dietaryClose(){
        eventBus.$emit('dietaryClose',false)
      }
    }
};
</script>

<style>
</style>