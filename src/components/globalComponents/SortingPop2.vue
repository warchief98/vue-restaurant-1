<template>
  <div>
    <div class="dark-cover" v-if="sorting2"></div>
    <div class="pop-up-container" :class="{'pop-up-container-come':sorting2}">
      <header>
        <h2 class="fz-16">Sorting</h2>
      </header>
      <div class="sorting-2 pt-3">
        <h3>Price Range:</h3>
        <div class="range my-1 my-md-2">
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

        <div class="rating-container-2 my-1 my-md-2">
          <b-form-radio-group
            id="btn-radios-2"
            v-model="selected2"
            :options="options2"
            buttons
            button-variant="outline-primary"
            size="lg"
            name="radio-btn-outline"
          ></b-form-radio-group>
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
      <footer class="container-fluid">
        <button class="submit-btn lightBlue-bg mb-1" @click="sortingClose2">Apply</button>
      </footer>
    </div>
  </div>
</template>

<script>
import { eventBus } from '@/main.js';

export default {
  props:['sorting2'],
  data() {
    return {
      dietValue: "",
      value: "",
      selected: "radio1",
      selected2: "radio2",
      options: [
        { text: "$", value: "radio1" },
        { text: "$$", value: "radio2" },
        { text: "$$$", value: "radio3" }
      ],
      options2: [
        { text: "★", value: "radio1" },
        { text: "★★", value: "radio2" },
        { text: "★★★", value: "radio3" },
        { text: "★★★★", value: "radio4" },
        { text: "★★★★★", value: "radio5" }
      ]
    };
  },
    methods:{
      sortingClose2(){
        eventBus.$emit('sortingClose2',false)
      }
    }
};
</script>

<style>
</style>