<template>
  <div>
    <navbar></navbar>
    <div class="container">
      <slot></slot>
    </div>
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
