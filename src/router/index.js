import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Esqueci from '../views/Esqueci.vue'
import Cadastro from '../views/cadastro/Cadastro.vue'
import CadastroPaciente from '../views/cadastro/CadastroPaciente.vue'
import CadastroProfissional from '../views/cadastro/CadastroProfissional.vue'
import CadastroOrgao from '../views/cadastro/CadastroOrgao.vue'

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
    path: '/cadastro/paciente',
    name: 'CadastroPaciente',
    component: CadastroPaciente
  },
  {
    path: '/cadastro/profissional',
    name: 'CadastroProfissional',
    component: CadastroProfissional
  },
  {
    path: '/cadastro/orgao',
    name: 'CadastroOrgao',
    component: CadastroOrgao
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
