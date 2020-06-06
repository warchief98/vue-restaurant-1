import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../views/Landing.vue'
import LowerMarket from '../views/LowerMarket/index.vue'
import LowerMarketInfo from '../views/LowerMarket/SelectFood/index.vue'

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
        name: 'LowerMarketInfo',
        component: LowerMarketInfo
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router