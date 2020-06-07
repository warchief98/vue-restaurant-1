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
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// import Global components
Vue.component('app-header', Header)
Vue.component('app-nav', Navigation)
Vue.component('app-menu', Menu)
Vue.component('dietary-pop', DietaryPop)
Vue.component('sorting-pop-1', SortingPop1)
Vue.component('sorting-pop-2', SortingPop2)

// Install BootstrapVue
Vue.use(BootstrapVue)
    // Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')