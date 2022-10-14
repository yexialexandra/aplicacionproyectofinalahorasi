import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/establecimiento',
  name: 'establecimiento',
    component: () => import('../views/EstablecimientoView.vue')
  },
  {
    path: '/serviciosonline',
  name: 'serviciosonline',
    component: () => import('../views/ServiciosonlineView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/establecimiento',
    name: 'establecimiento',
    component: () => import('../views/EstablecimientoView.vue')
  },
  {
    path: '/serviciosonline',
    name: 'serviciosonline',
    component: () => import('../views/ServiciosonlineView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
