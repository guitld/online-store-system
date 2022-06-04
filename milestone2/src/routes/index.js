import { createRouter, createWebHistory } from 'vue-router'
import HHome from '../views/HHome.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HHome
    },

    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/LLogin.vue')
    },

    {
        path: '/signup',
        name: 'SignUp',
        component: () => import('../views/SignUp.vue')
    }
]

const router = createRouter ({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router