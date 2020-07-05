<template>
  <div class="container-fluid container-ex payment-container">
    <header class="about-head-title px-0">
      <!-- back arrow -->
      <router-link to="/Checkout">
        <figure>
          <img src="@/assets/icons/left-arrow-circle.svg" alt />
        </figure>
      </router-link>
      <!-- title -->
      <h3 class="fz-15 fw-bold">Payment Methods</h3>
      <!-- edit btn -->
    </header>
    <!-- add payment methods -->
    <div class="add-payment-methods" @click="AddPayment = true">
      <div>
        <img src="@/assets/icons/payment-method-icon.svg" alt />
        <span class="fz-15 fw-bold ml-2">+ Payment Method</span>
      </div>
    </div>
    <!-- payments methods -->
    <div class="payment add-payment-methods">
      <div>
        <img src="@/assets/icons/Apple.png" alt />
        <span class="fz-15 fw-bold">Apple Pay</span>
      </div>
    </div>
    <!-- this part is added payment that should be handle by API -->

    <div class="add-payment-methods">
      <div>
        <img src="@/assets/icons/visa-pay.svg" alt />
        <span class="fz-15 fw-bold ml-2">…1234</span>
      </div>
      <img
        class="container-ex"
        src="@/assets/icons/next1.svg"
        alt
        @click="AddPayment5 = true"
      />
    </div>

    <!-- Add Payment component -->

    <AddPayment :AddPayment="AddPayment"></AddPayment>

    <!-- Add Payment2 component -->
    <AddPayment2 :AddPayment2="AddPayment2"></AddPayment2>

    <!-- Add Payment3 component -->
    <AddPayment3 :AddPayment3="AddPayment3"></AddPayment3>

    <!-- Add Payment4 component -->
    <AddPayment4 :AddPayment4="AddPayment4"></AddPayment4>

    <!-- Add Payment5 component -->
    <AddPayment5 :AddPayment5="AddPayment5"></AddPayment5>

    <!-- Add paymentEdit component -->
    <paymentEdit :paymentEdit="paymentEdit"></paymentEdit>

    <!-- Add PaymentDelete component -->
    <PaymentDelete :PaymentDelete="PaymentDelete"></PaymentDelete>

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
import AddPayment4 from "../components/localComponents/Payment/AddPayment4.vue";
import AddPayment5 from "../components/localComponents/Payment/AddPayment5.vue";
import paymentEdit from "../components/localComponents/Payment/paymentEdit.vue";
import PaymentDelete from "../components/localComponents/Payment/paymentDelete.vue";
import AllowCamera from "../components/localComponents/Payment/AllowCamera.vue";
import CameraOn from "../components/localComponents/Payment/CameraOn.vue";
import PaymentEditDelete from "../components/localComponents/Payment/PaymentEditDelete.vue";

export default {
  data() {
    return {
      AddPayment: false,
      AddPayment2: false,
      AddPayment3: false,
      AddPayment4: false,
      AddPayment5: false,
      AllowCamera: false,
      CameraOn: false,
      PaymentEditDelete: false,
      paymentEdit: false,
      PaymentDelete: false
    };
  },
  components: {
    AddPayment: AddPayment,
    AddPayment2: AddPayment2,
    AddPayment3: AddPayment3,
    AddPayment4: AddPayment4,
    AddPayment5: AddPayment5,
    AllowCamera: AllowCamera,
    CameraOn: CameraOn,
    PaymentEditDelete: PaymentEditDelete,
    paymentEdit: paymentEdit,
    PaymentDelete: PaymentDelete
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
    eventBus.$on("AddPayment5Close", close => {
      this.AddPayment5 = close;
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

    eventBus.$on("paymentEditShow", show => {
      this.paymentEdit = show;
    });

    eventBus.$on("paymentEditClose", close => {
      this.paymentEdit = close;
    });
    
       eventBus.$on("paymentDeleteShow", show => {
      this.PaymentDelete = show;
    });

    eventBus.$on("paymentDeleteClose", close => {
      this.PaymentDelete = close;
    });
  }
};
</script>