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
    path: '/cadastro',
    name: 'signup',
    component: () => import('../views/SignUpView.vue')
  },
  {
    path: '/carrinho',
    name: 'shopcart',
    component: () => import('../views/ShopCartView.vue')
  },
  {
    path: '/acessorios',
    name: 'acessories',
    component: () => import('../views/AccessoriesView.vue')
  },
  {
    path: '/servicos',
    name: 'services',
    component: () => import('../views/ServicesView.vue')
  },
  {
    path: '/servicos/agendamento',
    name: 'schedule-services',
    component: () => import('../views/ScheduleServiceView.vue')
  },
  {
    path: '/comidinhas',
    name: 'foods',
    component: () => import('../views/FoodsView.vue')
  },
  {
    path: '/produto/:category/:id',
    name: 'product',
    component: () => import('../views/ProductView.vue')
  },
  {
		path: '/perfil',
		name: 'perfil',
		component: () => import('../views/UserView.vue')
	},
  {
		path: '/admin',
		name: 'administrador',
		component: () => import('../views/AdminView.vue')
	}

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active-link',
  linkExactActiveClass: 'exact-active-link',
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { selector: to.hash }
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
