import Vue from 'vue'
import App from './App.vue'
import store from './store'
import auth from './auth'
import router from './router/index'

import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import Popper from 'popper.js'
import VueAuth from '@websanova/vue-auth'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import '@fortawesome/fontawesome-free/js/all.js'
import './sass/style.scss'

require('./bootstrap')

Vue.router = router

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueAxios, axios.create({
  baseURL: 'http://localhost:3333'
  // withCredentials: false,
  // headers: {
  //   'Content-Type': 'application/json',
  //   Authorization: 'Bearer ' + localStorage['jwt-auth'],
  //   'Access-Control-Allow-Origin': '*',
  //   Accept: 'application/json, text/plain, */*',
  //   'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
  //   'Access-Control-Allow-Credentials': true
  // }
}))
Vue.use(VueRouter)
Vue.use(VueAuth, auth)
Popper.Defaults.modifiers.computeStyle.gpuAcceleration = false

Vue.config.productionTip = process.env.VUE_APP_PRODUCTION_TIP

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
