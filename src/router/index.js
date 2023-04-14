import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'sort-list',
      component: () => import('../views/SortList.vue')
    },
    {
      path: '/two-list',
      name: 'two-list',
      component: () => import('../views/TwoList.vue')
    },
    {
      path: '/control-clone',
      name: 'control-clone',
      component: () => import('../views/ControlClone.vue')
    },
    {
      path: '/table-list',
      name: 'table-list',
      component: () => import('../views/TableList.vue')
    },
    {
      path: '/handle-icon',
      name: 'handle-icon',
      component: () => import('../views/HandleIcon.vue')
    },
    {
      path: '/nested-list',
      name: 'nested-list',
      component: () => import('../views/NestedList.vue')
    }
  ]
})

export default router
