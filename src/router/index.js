import { createRouter, createWebHistory } from 'vue-router'
import HistoriaPage from '../views/HistoriaPage.vue'

import SoportePage from '../views/SoportePage.vue'
import HomeView from '@/views/HomeView.vue'
import GaleryPage from '@/views/GaleryPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/historia',
    name: 'Historia',
    component: HistoriaPage,
  },
  {
    path: '/soporte',
    name: 'Soporte',
    component: SoportePage,
  },
  {
    path: '/galeria',
    name: 'Galeria',
    component: GaleryPage,
  },
]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
