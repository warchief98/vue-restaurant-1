import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../views/Landing.vue'
import LowerMarket from '../views/LowerMarket/index.vue'
import selectFood from '../views/LowerMarket/SelectFood/index.vue'
import login from '../views/login.vue'

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
        path: '/login',
        name: 'login',
        component: login
    },


]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router