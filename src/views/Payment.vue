<template>
  <div class="container-fluid payment-container">
    <header class="backAndEdit">
      <!-- back arrow -->
      <router-link to>
        <img src="@/assets/icons/left-arrow-circle.png" alt />
      </router-link>
      <!-- title -->
      <h3>Payment Methods</h3>
      <!-- edit btn -->
      <div>
        <button class="btn-style-1">
          <img src="@/assets/icons/3dot.png" alt />
        </button>
      </div>
    </header>
    <!-- add payment methods -->
    <div class="add-payment-methods py-3" @click="AddPayment = true">
      <div>
        <img src="@/assets/icons/visa-pay.png" alt />
        <span class="fz-15 fw-bold ml-2">+ Payment Method</span>
      </div>
      <figure>
        <img src="@/assets/icons/right-arrow.png" alt />
      </figure>
    </div>
    <!-- payments methods -->
    <div class="payment text-left py-3">
      <span class="fz-15 fw-bold">Apple Pay</span>
    </div>
    <!-- Add Payment component -->
    <AddPayment :AddPayment="AddPayment"></AddPayment>
    <!-- Add Payment2 component -->
    <AddPayment2 :AddPayment2="AddPayment2"></AddPayment2>
    <!-- Add Payment3 component -->
    <AddPayment3 :AddPayment3="AddPayment3"></AddPayment3>
    <!-- Add Allow camera component -->
    <AllowCamera :AllowCamera="AllowCamera"></AllowCamera>
    <!-- Add camera on component -->
    <CameraOn :CameraOn="CameraOn"></CameraOn>
    <!-- Add payment edit delete component -->
    <PaymentEditDelete :PaymentEditDelete="PaymentEditDelete"></PaymentEditDelete>
  </div>
</template>
<script>
import { eventBus } from "@/main.js";
import AddPayment from "../components/localComponents/Payment/AddPayment.vue";
import AddPayment2 from "../components/localComponents/Payment/AddPayment2.vue";
import AddPayment3 from "../components/localComponents/Payment/AddPayment3.vue";
import AllowCamera from "../components/localComponents/Payment/AllowCamera.vue";
import CameraOn from "../components/localComponents/Payment/CameraOn.vue";
import PaymentEditDelete from "../components/localComponents/Payment/PaymentEditDelete.vue";
export default {
  data() {
    return {
      AddPayment: false,
      AddPayment2: false,
      AddPayment3: false,
      AllowCamera: false,
      CameraOn: false,
      PaymentEditDelete: false
    };
  },
  components: {
    AddPayment: AddPayment,
    AddPayment2: AddPayment2,
    AddPayment3: AddPayment3,
    AllowCamera: AllowCamera,
    CameraOn: CameraOn,
    PaymentEditDelete: PaymentEditDelete
  },
  created() {
    eventBus.$on("AddPaymentClose", close => {
      this.AddPayment = close;
    });

    eventBus.$on("AddPayment2Close", close => {
      this.AddPayment2 = close;
    });

    eventBus.$on("AddPayment3Close", close => {
      this.AddPayment3 = close;
    });

    eventBus.$on("AllowCameraClose", close => {
      this.AllowCamera = close;
    });

    eventBus.$on("CameraOnClose", close => {
      this.CameraOn = close;
    });

    eventBus.$on("PaymentEditDeleteClose", close => {
      this.PaymentEditDelete = close;
    });

    eventBus.$on("AddPayment2Show", show => {
      this.AddPayment2 = show;
    });

    eventBus.$on("AddPayment3Show", show => {
      this.AddPayment3 = show;
    });

    eventBus.$on("AllowCameraShow", show => {
      this.AllowCamera = show;
    });

    eventBus.$on("CameraOnShow", show => {
      this.CameraOn = show;
    });

    eventBus.$on("PaymentEditDeleteShow", show => {
      this.PaymentEditDelete = show;
    });
  }
};
</script>