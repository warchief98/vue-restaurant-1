import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/scss/main.scss'
import Header from './components/globalComponents/Header.vue'
import Header2 from './components/globalComponents/Header2.vue'
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
import AccountDetailsPop5 from './components/globalComponents/Account/AccountDetails/AccountDetails-pop5.vue'
import About from './components/globalComponents/Account/About/About.vue'
import RatingAndReviews from './components/globalComponents/Account/About/Rating&Reviews.vue'
import writeReviews from './components/globalComponents/Account/About/write-A-Review.vue'
import RatingWriteReviewSuccecful from './components/globalComponents/Account/About/rating-write-a-review-succecful.vue'
import FAQs from './components/globalComponents/Account/About/FAQs.vue'
import signOut from './components/globalComponents/Account/signOut.vue'
import Help from './components/globalComponents/Account/Help/Help.vue'
import WriteEmail from './components/globalComponents/Account/Help/writeAnEmail.vue'
import AboutHelpWriteEmail from './components/globalComponents/Account/Help/ABOUT-help-write-email.vue'
import Share from './components/globalComponents/Share/Share.vue'
import sharePop from './components/globalComponents/Share/share-pop.vue'
import Upcoming from './components/globalComponents/orders/Upcoming.vue'
import OrderHistory from './components/globalComponents/orders/orderHistory.vue'
import orderDetails from './components/globalComponents/orders/orderDetails.vue'
import deletePop from './components/globalComponents/orders/delete-pop.vue'
import inviteFriends from './components/globalComponents/orders/inviteFriends.vue'
import emailPop from './components/globalComponents/signIn-signUp/email-pop.vue'
import facebookPrime from './components/globalComponents/signIn-signUp/facebook-permit.vue'
import loginFacebook from './components/globalComponents/signIn-signUp/login-facebook.vue'
import openFacebook from './components/globalComponents/signIn-signUp/open-facebook.vue'
import confirmationFacebook from './components/globalComponents/signIn-signUp/confirmationFacebook.vue'
import loginWithFacebook from './components/globalComponents/signIn-signUp/loginWithFacebook.vue'
import passwordPop from './components/globalComponents/signIn-signUp/password-pop.vue'
import forgetPassword from './components/globalComponents/signIn-signUp/forget-password'
import verifyCode from './components/globalComponents/signIn-signUp/verify-code.vue'
import verifyPhoneNumber from './components/globalComponents/signIn-signUp/verify-phone-number.vue'
import createAccount from './components/globalComponents/signIn-signUp/create-account.vue'
import createAccountPop1 from './components/globalComponents/signIn-signUp/createAccount-pop-1.vue'
import createAccountPop2 from './components/globalComponents/signIn-signUp/createAccount-pop-2.vue'
import createAccountPop3 from './components/globalComponents/signIn-signUp/createAccount-pop-3.vue'
import createAccountPop4 from './components/globalComponents/signIn-signUp/createAccount-pop-4.vue'
import VueCarousel from 'vue-carousel'
import { Carousel, Slide } from "vue-carousel"
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import ViewBaskectSmall from './components/globalComponents/Bascket/ViewBaskectSmall.vue'
import AddMoreToBascket from './components/globalComponents/Bascket/AddMoreToBascket.vue'
import updateBascket from './components/globalComponents/Bascket/update-bascket.vue'
import changePickupTime from './components/globalComponents/Bascket/change-pickup-time.vue'
import PickUpPopUp from './components/globalComponents/Bascket/PickUpPopUp.vue'
import BascketOrder from './components/globalComponents/Bascket/BascketOrder.vue'
import Suggestion from './components/globalComponents/Bascket/Suggestion.vue'


// import Global components
Vue.component('app-header', Header)
Vue.component('app-header-2', Header2)
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
Vue.component('AccountDetails-pop5', AccountDetailsPop5)
Vue.component('account-about', About)
Vue.component('rating-reviews', RatingAndReviews)
Vue.component('write-reviews', writeReviews)
Vue.component('rating-write-a-review-succecful', RatingWriteReviewSuccecful)
Vue.component('FAQs', FAQs)
Vue.component('signOut', signOut)
Vue.component('Help', Help)
Vue.component('WriteEmail', WriteEmail)
Vue.component('About-Help-Write-Email', AboutHelpWriteEmail)
Vue.component('Share', Share)
Vue.component('share-pop', sharePop)
Vue.component('carousel', Carousel);
Vue.component('slide', Slide);
Vue.component('view-bascket-small', ViewBaskectSmall)
Vue.component('AddMoreToBascket', AddMoreToBascket)
Vue.component('update-bascket', updateBascket)
Vue.component('change-pickup-time', changePickupTime)
Vue.component('PickUpPopUp', PickUpPopUp)
Vue.component('bascket-order', BascketOrder)
Vue.component('Suggestion', Suggestion)


Vue.component('Upcoming', Upcoming)
Vue.component('OrderHistory', OrderHistory)
Vue.component('orderDetails', orderDetails)
Vue.component('delete-pop', deletePop)
Vue.component('inviteFriends', inviteFriends)
Vue.component('email-pop', emailPop)
Vue.component('facebook-permit', facebookPrime)
Vue.component('login-facebook', loginFacebook)
Vue.component('open-facebook', openFacebook)
Vue.component('confirmation-facebook', confirmationFacebook)
Vue.component('login-with-facebook', loginWithFacebook)
Vue.component('password-pop', passwordPop)
Vue.component('forget-password', forgetPassword)
Vue.component('verify-code', verifyCode)
Vue.component('verify-phone-number', verifyPhoneNumber)
Vue.component('create-account', createAccount)
Vue.component('create-account-pop-1', createAccountPop1)
Vue.component('create-account-pop-2', createAccountPop2)
Vue.component('create-account-pop-3', createAccountPop3)
Vue.component('create-account-pop-4', createAccountPop4)


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