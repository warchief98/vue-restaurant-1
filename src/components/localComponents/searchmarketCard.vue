<template>
  <!-- market-card component 1-->
  <div class="market-card m-0">
    <figure>
      <img src="@/assets/images/market-1.jpg" alt />
    </figure>
    <div class="main-info">
      <ul class="market-info fz-13">
        <li>LowerMarsh Market</li>
        <li>
          <img src="@/assets/icons/pin.svg" alt /> Lambeth, London SE1.
        </li>
        <li>
          <img src="@/assets/icons/market-3.svg" alt /> Monday to Saturday - 9.00am to
        </li>
        <li>17.00pm</li>
      </ul>
      <!-- <div class="market-icons">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="17.707"
          viewBox="0 0 13 17.707"
          :class="{'save-svg' : saveSvg }"
          @click="saveSvg = !saveSvg"
        >
          <path
            id="Path_180"
            data-name="Path 180"
            d="M0,0H12V16L6,10,0,16Z"
            transform="translate(0.5 0.5)"
            fill="none"
            stroke="#909399"
            stroke-width="1"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19.131"
          height="17.207"
          viewBox="0 0 19.131 17.207"
          :class="{'lick-svg' : lickSvg }"
          @click="lickSvg = !lickSvg"
        >
          <path
            id="Heart"
            d="M16.707,1.474a4.872,4.872,0,0,0-6.934,0l-.682.682-.682-.682A4.9,4.9,0,0,0,1.474,8.409l7.616,7.616,7.616-7.616a4.872,4.872,0,0,0,0-6.934"
            transform="translate(0.475 0.475)"
            fill="none"
            stroke="#909399"
            stroke-width="1"
            fill-rule="evenodd"
          />
        </svg>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lickSvg: false,
      saveSvg: false
    };
  }
};
</script>

<style>
</style>