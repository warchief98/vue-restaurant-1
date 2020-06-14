import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/scss/main.scss'
import Header from './components/globalComponents/Header.vue'
import Navigation from './components/globalComponents/Navigation.vue'
import Menu from './components/globalComponents/menu.vue'
import DietaryPop from './components/globalComponents/DietaryPop.vue'
import SortingPop1 from './components/globalComponents/SortingPop1.vue'
import SortingPop2 from './components/globalComponents/SortingPop2.vue'
import Account from './components/globalComponents/Account/Account.vue'
import AccountDetails from './components/globalComponents/Account/AccountDetails/AccountDetails.vue'
import AccountDetailsPop1 from './components/globalComponents/Account/AccountDetails/AccountDetails-pop1.vue'
import AccountDetailsPop2 from './components/globalComponents/Account/AccountDetails/AccountDetails-pop2.vue'
import AccountDetailsPop3 from './components/globalComponents/Account/AccountDetails/AccountDetails-pop3.vue'
import AccountDetailsPop4 from './components/globalComponents/Account/AccountDetails/AccountDetails-pop4.vue'
import About from './components/globalComponents/Account/About/About.vue'
import RatingAndReviews from './components/globalComponents/Account/About/Rating&Reviews.vue'
import writeReviews from './components/globalComponents/Account/About/write-A-Review.vue'
import FAQs from './components/globalComponents/Account/About/FAQs.vue'
import signOut from './components/globalComponents/Account/signOut.vue'
import Help from './components/globalComponents/Account/Help/Help.vue'
import WriteEmail from './components/globalComponents/Account/Help/writeAnEmail.vue'
import Share from './components/globalComponents/Share/Share.vue'
import sharePop from './components/globalComponents/Share/share-pop.vue'
import VueCarousel from 'vue-carousel';
import { Carousel, Slide } from "vue-carousel";

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// import Global components
Vue.component('app-header', Header)
Vue.component('app-nav', Navigation)
Vue.component('app-menu', Menu)
Vue.component('dietary-pop', DietaryPop)
Vue.component('sorting-pop-1', SortingPop1)
Vue.component('sorting-pop-2', SortingPop2)
Vue.component('Account-pop', Account)
Vue.component('AccountDetails-pop', AccountDetails)
Vue.component('AccountDetails-pop1', AccountDetailsPop1)
Vue.component('AccountDetails-pop2', AccountDetailsPop2)
Vue.component('AccountDetails-pop3', AccountDetailsPop3)
Vue.component('AccountDetails-pop4', AccountDetailsPop4)
Vue.component('account-about', About)
Vue.component('rating-reviews', RatingAndReviews)
Vue.component('write-reviews', writeReviews)
Vue.component('FAQs', FAQs)
Vue.component('signOut', signOut)
Vue.component('Help', Help)
Vue.component('WriteEmail', WriteEmail)
Vue.component('Share', Share)
Vue.component('share-pop', sharePop)
Vue.component('carousel', Carousel);
Vue.component('slide', Slide);




Vue.use(VueCarousel);

// Install BootstrapVue
Vue.use(BootstrapVue)
    // Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

export const eventBus = new Vue();

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')