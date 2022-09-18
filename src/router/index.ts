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
  // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/EstablecimientoView.vue')
  },
  {
    path: '/mipe',
  name: 'mipe',
  // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MipeView.vue')
  },
  {
    path: '/nutricion',
  name: 'nutricion',
  // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/NutricionView.vue')
  },
  {
    path: '/vivero',
  name: 'vivero',
  // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ViveroView.vue')
  },
  {
    path: '/poscosecha',
  name: 'poscosecha',
  // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PoscosechaView.vue')
  },
  {
    path: '/serviciosonline',
  name: 'serviciosonline',
  // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ServiciosonlineView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/vivero',
    name: 'vivero',
    component: () => import('../views/ViveroView.vue')
  },
  {
    path: '/establecimiento',
    name: 'establecimiento',
    component: () => import('../views/EstablecimientoView.vue')
  },
  {
    path: '/mipe',
    name: 'mipe',
    component: () => import('../views/MipeView.vue')
  },
  {
    path: '/nutricion',
    name: 'nutricion',
    component: () => import('../views/NutricionView.vue')
  },
  {
    path: '/poscosecha',
    name: 'poscosecha',
    component: () => import('../views/PoscosechaView.vue')
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
