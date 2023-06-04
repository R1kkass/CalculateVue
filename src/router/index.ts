import { createRouter, createWebHistory } from 'vue-router'
import Calculate from '../page/Calculate/Calculate.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Calculate',
      component: Calculate
    }
  ]
})

export default router
