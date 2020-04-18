<template>
  <div>
    <navbar></navbar>
    <slot></slot>
    <psi-footer></psi-footer>
  </div>
</template>

<script>
import Navbar from './Navbar'
import Footer from './Footer'
import animarInputs from '../mixins/animarInputs'
export default {
  name: 'DefaultLayout',
  mixins: [animarInputs],
  components: {
    'psi-footer': Footer,
    Navbar
  },
  mounted () {
    if (localStorage.getItem('jwt-auth')) {
      const user = JSON.parse(localStorage.getItem('user'))
      if (user) {
        this.$auth.user(user)
      }
    }
  }
}
</script>
