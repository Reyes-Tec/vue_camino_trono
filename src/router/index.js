import { createRouter, createWebHistory } from 'vue-router'
import HomeVue from '../views/Home.vue'
import HistoriaVue from '../views/Historia.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeVue,
    },
    {
      path: '/historia',
      name: 'historia',
      component: HistoriaVue,
    },
    {
      path: '/galeria',
      name: 'galeria',
      component: HistoriaVue,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
