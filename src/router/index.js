import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import HistoriaPage from '../views/HistoriaPage.vue'
import GaleriaPage from '../views/GaleriaPage.vue'
import SoportePage from '../views/SoportePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomePage },
    { path: '/historia', component: HistoriaPage },
    { path: '/galeria', component: GaleriaPage },
    { path: '/soporte', component: SoportePage },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
