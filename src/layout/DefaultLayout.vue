<template>
  <div>
    <navbar></navbar>
    <slot></slot>
  </div>
</template>

<script>
import Navbar from './Navbar'
export default {
  name: 'DefaultLayout',
  components: {
    Navbar
  }
}
</script>
