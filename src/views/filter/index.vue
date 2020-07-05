<template>
  <div class="filter">
    <header class="about-head-title border-0">
      <figure>
        <img src="@/assets/icons/left-arrow-circle.svg" alt />
      </figure>
      <h1 class="fz-15 m-0">Filter</h1>
    </header>
    <div class="filter-container d-flex flex-column justify-content-between">
      <div>
        <div class="filter-dietary">
          <div class="filter-titles">
            <h3>Dietary</h3>
          </div>
          <ul>
            <li>
              <label for="Vegetarian">Vegetarian</label>
              <input
                type="radio"
                name="Dietary"
                value="Vegetarian"
                id="Vegetarian"
                v-model="DietaryValue"
              />
            </li>

            <li>
              <label for="Vegan">Vegan</label>
              <input type="radio" name="Dietary" value="Vegan" id="Vegan" v-model="DietaryValue" />
            </li>
            <li>
              <label for="Gluten-Free" class="font-weight-bold">Gluten-Free</label>
              <input
                type="radio"
                name="Dietary"
                value="Gluten-Free"
                id="Gluten-Free"
                v-model="DietaryValue"
              />
            </li>
            <li>
              <label for="Kosher">Kosher</label>
              <input type="radio" name="Dietary" value="Kosher" id="Kosher" v-model="DietaryValue" />
            </li>
            <li>
              <label for="Halal">Halal</label>
              <input type="radio" name="Dietary" value="Halal" id="Halal" v-model="DietaryValue" />
            </li>
          </ul>
        </div>
        <div class="filter-price-range">
          <div class="filter-titles">
            <h3>Price Range</h3>
          </div>
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
        </div>
        <div class="filter-rating">
          <div class="filter-titles">
            <h3>Rating</h3>
          </div>
          <div class="rating-container">
            <b-form-rating v-model="ratingValue" variant="danger" class="mb-2"></b-form-rating>
          </div>
          <ul>
            <li>
              <label for="MostPopular">Most Popular</label>
              <input
                type="radio"
                name="rating"
                value="MostPopular"
                id="MostPopular"
                v-model="ratingValue"
              />
            </li>
            <li>
              <label for="Distance">Distance</label>
              <input
                type="radio"
                name="rating"
                value="Distance"
                id="Distance"
                v-model="ratingValue"
              />
            </li>
          </ul>
        </div>
      </div>
      <div>
        <button class="submit-btn lightBlue-bg">Filter</button>
      </div>
    </div>
    <app-nav></app-nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      DietaryValue: "",
      selected: "",
      ratingValue: "",
      value: "",
      options: [
        { text: "££", value: "radio1" },
        { text: "£££", value: "radio2" },
        { text: "££££", value: "radio3" }
      ]
    };
  }
};
</script>

<style>
</style>