<template>
  <div id="app">
    <default-layout>
      <router-view/>
    </default-layout>
  </div>
</template>

<script>
import DefaultLayout from './layout/DefaultLayout'
export default {
  name: 'App',
  components: {
    DefaultLayout
  }
}
</script>

<style lang="scss">

</style>
