<template>
  <div class="bascket">
    <div class="container-fluid container-ex">
      <header class="backAndEdit">
        <!-- back arrow -->
        <router-link to>
          <img src="@/assets/icons/left-arrow-circle.svg" alt />
        </router-link>
        <!-- title -->
        <h3>Bascket</h3>
        <!-- edit btn -->
        <div>
          <button class="btn-style-1" v-if="editBtn" @click="editBtnFunc">Edit</button>
          <button class="btn-style-1" v-if="!editBtn" @click="doneBtnFunc">Done</button>
        </div>
      </header>
    </div>
    <!-- gray title -->
    <div class="gray-bg container-fluid container-ex py-2">
      <h3 class="fz-15 text-left m-0">Hungry Llama</h3>
    </div>
    <section class="container-fluid container-ex">
      <h4 class="fz-15 text-left py-2 m-0">Your Order</h4>
      <!-- bascket order component -->
      <bascket-order
        v-for="test18 in 2"
        :key="test18"
        :deleteOrder="deleteOrder"
        :editOrder="editOrder"
      ></bascket-order>
      <!-- Suggestion part place here -->
      <div v-if="suggestion">
        <h2 class="fz-13 fw-bold gray-text-color text-left pt-2">Suggestion</h2>
        <div class="suggestion-container">
          <div class="all-roll">
            <!-- <Suggestion v-for="test19 in 3" :key="test19"></Suggestion> -->
            <Suggestion v-for="test19 in 3" :key="test19" class="offer"></Suggestion>
          </div>
        </div>
      </div>
      <!-- pick up time -->
      <div class="pick-up py-3">
        <div>
          <img src="@/assets/icons/pickup-time.svg" alt />
          <p class="fz-15">Pickup Time</p>
          <div class="pickup-time d-flex align-items-center justify-content-center">
            <p class="fz-12 m-0">4:55 PM</p>
          </div>
        </div>
        <button class="btn-style-1" @click="changePickupTime = true">Choose</button>
      </div>
      <!-- add a note text area -->
      <textarea class="fz-13 gray-text-color" cols="30" rows="4" placeholder="Add a Note:"></textarea>
      <div class="add-gift container-fluid container-ex">
        <div class="row">
          <input type="text" class="col-7 mr-2 gray-text-color fz-12" placeholder="Enter Gift Code" />
          <button class="col">Apply</button>
        </div>
      </div>
    </section>
    <!-- order total and check out -->
    <div class="order-total-container">
      <div>
        <p
          class="fz-12 py-3 text-left container-fluid container-ex"
        >Any expires or used credit can be viewed in your account</p>
        <div class="order-total gray-bg">
          <span class="fz-15 fw-bold text-left container-fluid container-ex">Order Total:</span>
          <span class="fz-15 fw-bold text-right container-fluid container-ex">£16.05</span>
        </div>
        <router-link to="/CheckOut">
          <button class="fz-15 lightBlue-bg">GO TO CHECKOUT</button>
        </router-link>
      </div>
    </div>

    <!-- ________________________________________________navigation menu -->
    <app-nav></app-nav>
    <!-- ______________________________________add more to bascket pop up component -->
    <AddMoreToBascket :addMoreToBascket="addMoreToBascket"></AddMoreToBascket>

    <!-- ______________________________________pick up pop up bascket component -->
    <PickUpPopUp :pickUpPopUp="pickUpPopUp"></PickUpPopUp>
    <!---------------------------------update bascket -->
    <update-bascket :updateBascket="updateBascket"></update-bascket>
    <change-pickup-time :changePickupTime="changePickupTime"></change-pickup-time>
  </div>
</template>
<script>
import { eventBus } from "@/main.js";

export default {
  name: "bascket",
  data() {
    return {
      suggestion: true,
      editOrder: false,
      deleteOrder: false,
      editBtn: true,
      addMoreToBascket: false,
      pickUpPopUp: false,
      updateBascket: false,
      changePickupTime: false
    };
  },
  methods: {
    editBtnFunc() {
      this.editBtn = !this.editBtn;
      this.editOrder = !this.editOrder;
    },
    doneBtnFunc() {
      this.editBtn = !this.editBtn;
      this.editOrder = false;
      this.deleteOrder = false;
    }
  },
  created() {
    eventBus.$on("deleteOrderShow", show => {
      this.deleteOrder = show;
    });

    eventBus.$on("editOrderHide", hide => {
      this.editOrder = hide;
    });

    eventBus.$on("addMoreToBascketShow", show => {
      this.addMoreToBascket = show;
    });

    eventBus.$on("AddMoreToBascketClose", close => {
      this.addMoreToBascket = close;
    });

    eventBus.$on("PickUpPopUpShow", show => {
      this.pickUpPopUp = show;
    });

    eventBus.$on("PickUpClose", close => {
      this.pickUpPopUp = close;
    });
    eventBus.$on("UpdateBascketOpen", open => {
      this.updateBascket = open;
    });
    eventBus.$on("updateBascketCloae", close => {
      this.updateBascket = close;
    });

    eventBus.$on("pickTimeClose", close => {
      this.changePickupTime = close;
    });
    
  }
};
</script>