import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Loginpage from '@/views/Login_page.vue'
import Doctors from '@/views/Doctors.vue'
import RegisterPage from '@/views/RegisterPage.vue'
import Role_page from '../views/Role_page.vue'
import AppointmentPage from '../views/AppointmentPage.vue'
import Welcomepage from '@/views/Welcome_page.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/loginpage',
      name: 'Loginpage',
      component: Loginpage,
    },
    {
      path: '/About',
      name: 'About',
      component: AboutView,
    },
    {
      path: '/registerpage',
      name: '/Registerpage',
      component: RegisterPage,
    },
    {
      path: '/Role_page',
      name: 'Role_page',
      component: Role_page,
    },
    {
      path: '/Doctors',
      name: 'Doctors',
      component: Doctors,
    },
    {
      path: '/AppointmentPage',
      name: 'AppointmentPage',
      component: AppointmentPage,
    },
    {
      path: '/Welcomepage',
      name: 'Welcomepage',
      component: Welcomepage,
    },
  ],
})

export default router
