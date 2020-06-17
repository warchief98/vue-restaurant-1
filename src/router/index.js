import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../views/Landing.vue'
import LowerMarket from '../views/LowerMarket/index.vue'
import selectFood from '../views/LowerMarket/SelectFood/index.vue'
import Products from '../views/Product/index.vue'
import SelectCraft from '../views/Product/SelectCraft/index.vue'
import signUp from '../views/signUp.vue'
import orders from '../views/orders/index.vue'
import filter from '../views/filter/index.vue'
import searchMarket from '../views/search-market.vue'

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
        path: '/signUp',
        name: 'signUp',
        component: signUp
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