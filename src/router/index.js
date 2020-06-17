import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../views/Landing.vue'
import LowerMarket from '../views/LowerMarket/index.vue'
import selectFood from '../views/LowerMarket/SelectFood/index.vue'
import Products from '../views/Product/index.vue'
import SelectCraft from '../views/Product/SelectCraft/index.vue'
import login from '../views/login/login.vue'
import signUp from '../views/signUp.vue'
import Bascket from '../views/Bascket/index.vue'
import CheckOut from '../views/CheckOut/index.vue'
import Payment from '../views/Payment.vue'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Landing',
        component: Landing
    },
    {
        path: '/Landing/LowerMarket',
        name: 'LowerMarket',
        component: LowerMarket
    },
    {
        path: '/Landing/LowerMarket/SelectFood',
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
        path: '/login',
        name: 'login',
        component: login
    },
    {
        path: '/signUp',
        name: 'signUp',
        component: signUp
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


]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router