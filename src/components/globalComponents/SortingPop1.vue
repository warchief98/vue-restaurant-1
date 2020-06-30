<template>
  <div>
    <div class="dark-cover" v-if="sorting1"></div>
    <div class="pop-up-container" :class="{'pop-up-container-come':sorting1}">
      <header>
        <h2 class="fz-16">Sorting</h2>
      </header>
      <div class="sorting-1 pt-3">
        <h3>Price Range:</h3>
        <div class="Euro-range range">
          <b-form-radio-group
            id="btn-radios-2"
            v-model="selected"
            :options="options"
            buttons
            button-variant="outline-primary"
            size="lg"
            name="radio-btn-outline"
          ></b-form-radio-group>
        </div>
        <h3>Rating</h3>

        <div class="rating-container">
          <b-form-rating v-model="value" variant="danger" class="mb-2"></b-form-rating>
        </div>

        <ul>
          <li>
            <label for="popular">Most Popular</label>
            <input type="radio" name="sort1" value="popular" id="popular" v-model="dietValue" />
          </li>

          <li>
            <label for="distance">Distance</label>
            <input type="radio" name="sort1" value="distance" id="distance" v-model="dietValue" />
          </li>
        </ul>
      </div>
      <footer class=" container-ex">
        <button class="submit-btn lightBlue-bg mb-1" @click="sortingClose1">Apply</button>
      </footer>
    </div>
  </div>
</template>

<script>
import { eventBus } from '@/main.js';

export default {
  props:['sorting1'],
  data() {
    return {
      dietValue: "",
      value: "",
      selected: "radio1",
      options: [
        { text: "£", value: "radio1" },
        { text: "££", value: "radio2" },
        { text: "£££", value: "radio3" }
      ]
    };
  },
    methods:{
      sortingClose1(){
        eventBus.$emit('sortingClose1',false)
      }
    }
};
</script>

<style>
</style>