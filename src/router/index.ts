import { createRouter, createWebHistory } from 'vue-router'

import Tab1 from '@/views/tab1.vue'
import Tab2 from '@/views/tab3.vue'
import Tab3 from '@/views/tab2.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'tab1',
      component: Tab1
    },
    {
      path: '/tab2',
      name: 'tab2',
      component: Tab2
    },
    {
      path: '/tab3',
      name: 'tab3',
      component: Tab3
    }]
})



export default router
