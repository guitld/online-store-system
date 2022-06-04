import { createRouter, createWebHistory } from 'vue-router'
import HHome from '../views/HHome.vue'
import LLogin from '../views/LLogin.vue'
import SignUp from '../views/SignUp.vue'
import ShopCart from '../views/ShopCart.vue'
import AAcessories from '../views/Acessories.vue'
import SServices from '../views/Services.vue'
import FFoods from '../views/Foods.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HHome
    },

    {
        path: '/login',
        name: 'Login',
        component: LLogin
    },

    {
        path: '/sign-up',
        name: 'SignUp',
        component: SignUp
    },

    {
        path: '/shop-cart',
        name: 'ShopCart',
        component: ShopCart
    },

    {
        path: '/acessories',
        name: 'Acessories',
        component: AAcessories
    },

    {
        path: '/services',
        name: 'Services',
        component: SServices
    },

    {
        path: '/foods',
        name: 'Foods',
        component: FFoods
    }
]

const router = createRouter ({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior (to, from, savedPosition) {
        if (to.hash) {
            return {
            selector: to.hash,
            behavior: 'smooth'
            }
        }
    }
})

export default router