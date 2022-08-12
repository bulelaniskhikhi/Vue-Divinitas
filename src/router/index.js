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
      component: function () {
        return import('../views/LoginView.vue')
      }
    },
    {
      path: '/products',
      name: 'products',
      component: function () {
        return import('../views/ProductsView.vue')
      }
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
