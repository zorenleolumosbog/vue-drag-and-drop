import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'sorting-list',
      component: () => import('../views/SortingList.vue')
    }
  ]
})

export default router
