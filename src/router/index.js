import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../components/MainLayout.vue'
import HomePage from '../views/HomePage.vue'
import HistoriaPage from '../views/HistoriaPage.vue'
import GaleriaPage from '../views/GaleriaPage.vue'
import SoportePage from '../views/SoportePage.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', component: HomePage },
      { path: 'historia', component: HistoriaPage },
      { path: 'galeria', component: GaleriaPage },
      { path: 'soporte', component: SoportePage },
    ],
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
