import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SobreNos from '../views/SobreNos.vue'
import Profissional from '../views/Profissional.vue'
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
    path: '/sobrenos',
    name: 'SobreNos',
    component: SobreNos
  },
  {
    path: '/profissional',
    name: 'Profissional',
    component: Profissional
  },
  {
    path: '/login',
    name: 'login',
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
    // meta: {
    //   auth: {
    //     roles: ['paciente'],
    //     redirect: {
    //       name: 'login'
    //     },
    //     forbiddenRedirect: '/403'
    //   }
    // }
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
