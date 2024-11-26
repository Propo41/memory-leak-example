import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PageOne from '../views/PageOne.vue'
import PageTwo from '@/views/PageTwo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/page1',
      name: 'Page 1',
      component: PageOne,
    },
    {
      path: '/page2',
      name: 'Page 2',
      component: PageTwo,
    },
  ],
})

export default router
