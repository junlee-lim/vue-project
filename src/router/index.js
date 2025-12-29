import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/component',
      component: () => import('@/views/Components.vue')
    },
    {
      path: '/page98',
      component: () => import('@/views/page98.vue')
    },
    {
      path: '/page103',
      component: () => import('@/views/page103.vue')
    },
    {
      path: '/m_1',
      component: () => import('@/views/mission/m_1.vue')
    }
  ],
})

export default router
