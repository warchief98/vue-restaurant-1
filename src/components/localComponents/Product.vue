<template>
  <div class="product-card">
    <figure>
      <img :src="item.img" :alt="item.name" />
    </figure>
    <h4 class="fz-13">{{ item.name }}</h4>
    <h4 class="fz-13">Hungry Llama</h4>
  </div>
</template>

<script>
export default {
  props: {
    item: Object, // دریافت آبجکت داینامیک از والد
  },
};
</script>

<style></style>
