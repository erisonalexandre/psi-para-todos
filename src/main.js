import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Popper from 'popper.js'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import '@fortawesome/fontawesome-free/js/all.js'
import './sass/style.scss'

require('./bootstrap')

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Popper.Defaults.modifiers.computeStyle.gpuAcceleration = false

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
