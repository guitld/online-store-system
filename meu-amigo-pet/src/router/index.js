import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/sign-up',
    name: 'signup',
    component: () => import('../views/SignUpView.vue')
  },
  {
    path: '/shop-cart',
    name: 'shopcart',
    component: () => import('../views/ShopCartView.vue')
  },
  {
    path: '/acessories',
    name: 'acessories',
    component: () => import('../views/AcessoriesView.vue')
  },
  {
    path: '/services',
    name: 'services',
    component: () => import('../views/ServicesView.vue')
  },
  {
    path: '/foods',
    name: 'foods',
    component: () => import('../views/FoodsView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active-link',
  linkExactActiveClass: 'exact-active-link',
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
  }

})

export default router
