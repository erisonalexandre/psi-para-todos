import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/publico/Home.vue'
import Profissional from '../views/publico/Profissional.vue'
import Login from '../views/publico/Login.vue'
import Esqueci from '../views/publico/Esqueci.vue'
import Cadastro from '../views/cadastro/Cadastro.vue'
import CadastroPaciente from '../views/cadastro/CadastroPaciente.vue'
import CadastroProfissional from '../views/cadastro/CadastroProfissional.vue'
import CadastroInstituicao from '../views/cadastro/CadastroInstituicao.vue'
import DashboardPaciente from '../views/restrito/paciente/DashboardPaciente.vue'
import DashboardProfissional from '../views/restrito/profissional/DashboardProfissional.vue'
import DashboardInstituicao from '../views/restrito/instituicao/DashboardInstituicao.vue'
import OQueE from '../views/publico/OQueE'
import Instituicao from '../views/publico/Instituicao'
import SaudeMental from '../views/publico/SaudeMental'
import Agenda from '../views/restrito/profissional/Agenda'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profissional',
    name: 'Profissional',
    component: Profissional
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      auth: false
    }
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
    path: '/o-que-e',
    name: 'OQueE',
    component: OQueE
  },
  {
    path: '/instituicoes',
    name: 'Instituicoes',
    component: Instituicao
  },
  {
    path: '/saude-mental',
    name: 'SaudeMental',
    component: SaudeMental
  },
  {
    path: '/dashboard/paciente',
    name: 'DashboardPaciente',
    component: DashboardPaciente,
    meta: {
      auth: {
        roles: ['paciente'],
        redirect: {
          name: 'login'
        },
        forbiddenRedirect: '/403'
      }
    }
  },
  {
    path: '/dashboard/instituicao',
    name: 'DashboardInstituicao',
    component: DashboardInstituicao,
    meta: {
      auth: {
        roles: ['instituicao'],
        redirect: {
          name: 'login'
        },
        forbiddenRedirect: '/403'
      }
    }
  },
  {
    path: '/cadastro/Instituicao',
    name: 'CadastroInstituicao',
    component: CadastroInstituicao
  },
  {
    path: '/dashboard/profissional/agenda',
    name: 'ProfissionalAgenda',
    component: Agenda,
    meta: {
      auth: {
        roles: ['profissional'],
        redirect: {
          name: 'login'
        },
        forbiddenRedirect: '/403'
      }
    }
  },
  {
    path: '/dashboard/profissional',
    name: 'DashboardProfissional',
    component: DashboardProfissional,
    meta: {
      auth: {
        roles: ['profissional'],
        redirect: {
          name: 'login'
        },
        forbiddenRedirect: '/403'
      }
    }
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
