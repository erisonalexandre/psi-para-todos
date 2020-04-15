window._ = require('lodash')

try {
  window.Popper = require('popper.js').default
  window.$ = window.jQuery = require('jquery')
  require('select2/dist/js/select2.full.min')
  require('bootstrap')
} catch (e) {
  console.error(e)
}

window.axios = require('axios')

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
