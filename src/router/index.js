import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../views/Landing.vue'
import todaysHot from '../views/todays-hot/index.vue'
import selectFood from '../views/todays-hot/SelectFood/index.vue'
import Products from '../views/Product/index.vue'
import SelectCraft from '../views/Product/SelectCraft/index.vue'
import signUp from '../views/signUp.vue'
import Bascket from '../views/Bascket/index.vue'
import CheckOut from '../views/CheckOut/index.vue'
import Payment from '../views/Payment.vue'

import orders from '../views/orders/index.vue'
import filter from '../views/filter/index.vue'
import searchMarket from '../views/search-market.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'signUp',
        component: signUp
    },
    {
        path: '/Landing',
        name: 'Landing',
        component: Landing
    },
    {
        path: '/Landing/Todays-Hot',
        name: 'todaysHot',
        component: todaysHot
    },
    {
        path: '/Landing/Todays-Hot/SelectFood',
        name: 'selectFood',
        component: selectFood
    },
    {
        path: '/Landing/Products',
        name: 'Products',
        component: Products
    },
    {
        path: '/Landing/Products/SelectCraft',
        name: 'SelectCraft',
        component: SelectCraft
    },
    {
        path: '/Bascket',
        name: 'Bascket',
        component: Bascket
    },
    {
        path: '/CheckOut',
        name: 'CheckOut',
        component: CheckOut
    },
    {
        path: '/Payment',
        name: 'Payment',
        component: Payment
    },
    {
        path: '/orders',
        name: 'orders',
        component: orders
    }, {
        path: '/filter',
        name: 'filter',
        component: filter
    },
    {
        path: '/searchMarket',
        name: 'searchMarket',
        component: searchMarket
    }



]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router