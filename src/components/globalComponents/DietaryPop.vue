<template>
  <div>
    <div class="dark-cover"></div>
    <div class="pop-up-container">
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
        <button class="submit-btn lightBlue-bg mb-1">Apply</button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            dietValue:"",
        }
    }
};
</script>

<style>
</style>