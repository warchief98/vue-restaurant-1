<template>
  <div class="view-component">
      <div class="rate">
          <b-form-rating id="rating-inline" inline readonly  v-model="rating"></b-form-rating>
      </div>
      <div class="text-box">
          <h3>It was grate</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, quisquam tempore natus accusantium .</p>
      </div>
  </div>
</template>

<script>
export default {
data(){
    return{
        rating:3.5,
    }
}
}
</script>

<style>

</style>