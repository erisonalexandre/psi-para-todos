import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Esqueci from '../views/Esqueci.vue'
import Cadastro from '../views/Cadastro.vue'
import CadPaciente from '../views/CadPaciente.vue'
import CadProfissional from '../views/CadProfissional.vue'
import CadOrgao from '../views/CadOrgao.vue'
import DashboardProfissional from '../views/DashboardProfissional.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/esqueci',
    name: 'Esqueci',
    component: Esqueci
  },
  {
    path: '/cadastro',
    name: 'Cadastro',
    component: Cadastro
  },
  {
    path: '/cadpaciente',
    name: 'CadPaciente',
    component: CadPaciente
  },
  {
    path: '/cadprofissional',
    name: 'CadProfissional',
    component: CadProfissional
  },
  {
    path: '/cadorgao',
    name: 'CadOrgao',
    component: CadOrgao
  },
  {
    path: '/dashboardprofissional',
    name: 'DashboardProfissional',
    component: DashboardProfissional
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
