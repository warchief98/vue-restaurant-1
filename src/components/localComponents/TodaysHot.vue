<template>
  <div class="today-hot">
    <figure>
      <img :src="item.img" :alt="item.name" />
    </figure>
    <h4 class="fz-13 text-left">{{ item.name }}</h4>
    <div class="rate">
      <img src="@/assets/icons/star-green.png" alt />
      <p class="fz-10">{{ item.rate }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object, // دریافت آبجکت داینامیک از والد
  },
};
</script>
